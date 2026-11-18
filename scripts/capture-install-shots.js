// Real captures of chrome://extensions for the install guide, in English.
//
// Not mockups: a browser is started on a throwaway profile, the extension is
// loaded from `extension/dist` the way a person would load it, and the page is
// photographed with the DevTools protocol. Run from the repository root:
//
//   bun scripts/capture-install-shots.js
//
// The two files land in public/shots/ and are what the /extension page shows.

import { spawn } from 'node:child_process'
import { mkdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const DIST = resolve(import.meta.dir, '../../adfree-extension/dist')
const OUT = resolve(import.meta.dir, '../public/shots')
const PROFILE = '/tmp/adfree-install-shots'
const PORT = 9361

const chrome =
  process.env.CHROME ??
  ['/usr/bin/google-chrome', '/opt/google/chrome/chrome'].find((p) => existsSync(p))

if (!chrome) throw new Error('no google-chrome found; set CHROME=/path/to/chrome')
if (!existsSync(join(DIST, 'manifest.json'))) {
  throw new Error(`no built extension at ${DIST} — run bun run build in adfree-extension`)
}
mkdirSync(OUT, { recursive: true })

const child = spawn(
  chrome,
  [
    `--user-data-dir=${PROFILE}`,
    `--remote-debugging-port=${PORT}`,
    '--lang=en-US',
    '--no-first-run',
    '--no-default-browser-check',
    '--enable-unsafe-extension-debugging',
    '--window-size=1000,720',
    '--window-position=0,0',
    'chrome://extensions/',
  ],
  {
    stdio: 'ignore',
    detached: true,
    // Chrome takes its interface language from the locale, not from --lang on
    // every build: the guide's screenshots have to be the English ones.
    env: { ...process.env, LANGUAGE: 'en_US', LANG: 'en_US.UTF-8', LC_ALL: 'en_US.UTF-8' },
  },
)
process.on('exit', () => {
  try {
    process.kill(-child.pid, 'SIGKILL')
  } catch {}
})

async function endpoint(path) {
  for (let i = 0; i < 60; i++) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}${path}`)
      if (response.ok) return await response.json()
    } catch {}
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error(`devtools endpoint ${path} never answered`)
}

class Session {
  #ws
  #id = 0
  #pending = new Map()

  static async open(url) {
    const session = new Session()
    session.#ws = new WebSocket(url)
    session.#ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data)
      const pending = session.#pending.get(message.id)
      if (!pending) return
      session.#pending.delete(message.id)
      message.error ? pending.reject(new Error(JSON.stringify(message.error))) : pending.resolve(message.result)
    })
    await new Promise((resolve, reject) => {
      session.#ws.addEventListener('open', resolve, { once: true })
      session.#ws.addEventListener('error', reject, { once: true })
    })
    return session
  }

  send(method, params = {}, sessionId) {
    const id = ++this.#id
    const body = { id, method, params }
    if (sessionId) body.sessionId = sessionId
    this.#ws.send(JSON.stringify(body))
    return new Promise((resolve, reject) => this.#pending.set(id, { resolve, reject }))
  }

  close() {
    this.#ws.close()
  }
}

const version = await endpoint('/json/version')
const browser = await Session.open(version.webSocketDebuggerUrl)

const { targetId } = await browser.send('Target.createTarget', { url: 'chrome://extensions/' })
const { sessionId } = await browser.send('Target.attachToTarget', { targetId, flatten: true })
const page = (method, params) => browser.send(method, params, sessionId)

await page('Page.enable')
await page('Runtime.enable')
// The site has both themes and these sit inside it, so the captures are taken
// in the light one — the same page either way, but the surrounding page decides
// what looks deliberate.
await page('Emulation.setEmulatedMedia', {
  features: [{ name: 'prefers-color-scheme', value: 'light' }],
})
// A tighter frame than a whole desktop window: the guide shows these at about
// half the width of the page, so a 1280px capture would be unreadable there.
await page('Emulation.setDeviceMetricsOverride', {
  width: 1000,
  height: 720,
  deviceScaleFactor: 1,
  mobile: false,
})

const evaluate = async (expression) => {
  const result = await page('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails))
  return result.result.value
}

async function shoot(name) {
  // Cropped to the part the guide talks about: the row of controls and the
  // card. The rest of the page is empty space at this width.
  const { data } = await page('Page.captureScreenshot', {
    format: 'png',
    clip: { x: 0, y: 0, width: 1000, height: 640, scale: 1 },
  })
  const file = join(OUT, name)
  await Bun.write(file, Buffer.from(data, 'base64'))
  console.log(`wrote ${file}`)
}

// The extensions page is a tree of shadow roots, and the developer-mode toggle
// is at the bottom of it. Nothing here is a selector a page could change under
// us: the ids are the ones the page ships with.
const toggleDevMode = `(() => {
  const manager = document.querySelector('extensions-manager')
  const toolbar = manager.shadowRoot.querySelector('extensions-toolbar')
  const toggle = toolbar.shadowRoot.querySelector('#devMode')
  if (!toggle) return 'no toggle'
  if (!toggle.checked) toggle.click()
  return toggle.checked
})()`

for (let i = 0; i < 40; i++) {
  const state = await evaluate(toggleDevMode).catch(() => 'not ready')
  if (state === true) break
  await new Promise((r) => setTimeout(r, 500))
}

await new Promise((r) => setTimeout(r, 1200))
await shoot('extension-load-unpacked.png')

// Loaded the way the guide tells a person to load it — through the button in
// the page, not through a flag. Chrome 137+ only allows it here when the browser
// was started with --enable-unsafe-extension-debugging.
// The Extensions domain lives on the browser session, not the page's: a page
// target has no business installing anything.
const loaded = await browser.send('Extensions.loadUnpacked', { path: DIST })
console.log('loaded', loaded.id)

// The card appears on its own; reloading races the service worker and leaves a
// half-drawn second copy in the list. The list settles by itself.
await new Promise((r) => setTimeout(r, 3500))
await shoot('extension-installed.png')

browser.close()
process.exit(0)
