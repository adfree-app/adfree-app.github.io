// Every route, written out as the HTML a browser renders.
//
// The site is a Vue app on a static host: `vite build` leaves one `index.html`
// and every other address is a 404 with a script in it. This step closes that
// gap the blunt way — it serves the build, opens each route in Chrome, and
// saves the document Chrome ended up with at `dist/<route>/index.html`. A deep
// link is then a file the host has, answered with 200, and a crawler reads the
// page instead of an empty `#app`.
//
// What the client does afterwards is unchanged: Vue mounts over the captured
// markup and re-reads the release list and the changelog from GitHub, so the
// numbers baked in here are a first paint, never a frozen one.

import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, normalize } from 'node:path'
const dist = new URL('../dist/', import.meta.url).pathname

/** The routes in `src/main.ts`. A page added there has to be added here. */
const routes = ['/', '/changelog', '/sponsor', '/install-extension']

const chrome = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].find((path) => path && existsSync(path))

if (!chrome) {
  console.error('prerender: no Chrome found; set CHROME_PATH')
  process.exit(1)
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.md': 'text/plain; charset=utf-8',
}

const server = Bun.serve({
  port: 0,
  hostname: '127.0.0.1',
  fetch(request) {
    const path = normalize(decodeURIComponent(new URL(request.url).pathname))
    const candidates =
      path === '/'
        ? [join(dist, 'index.html')]
        : [join(dist, path), join(dist, path, 'index.html'), join(dist, 'index.html')]
    const file = candidates.find((candidate) => existsSync(candidate) && statSync(candidate).isFile())
    const extension = file.slice(file.lastIndexOf('.'))
    return new Response(Bun.file(file), {
      headers: { 'content-type': types[extension] ?? 'application/octet-stream' },
    })
  },
})

const port = server.port
const profile = mkdtempSync(join(tmpdir(), 'adfree-prerender-'))
const browser = spawn(chrome, [
  '--headless=new',
  // One language for the captured document: English, the site's base. A
  // visitor's own choice takes over as soon as the app mounts.
  '--lang=en-US',
  '--accept-lang=en-US,en',
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${profile}`,
  '--remote-debugging-port=0',
  'about:blank',
], { stdio: 'ignore' })

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** Chrome writes the port it chose into `DevToolsActivePort` in the profile. */
async function debuggingPort() {
  for (let attempt = 0; attempt < 80; attempt++) {
    try {
      const port = readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim()
      if (port) {
        return port
      }
    } catch {
      // Not written yet.
    }
    await sleep(150)
  }
  throw new Error('chrome did not open a debugging port')
}

const { webSocketDebuggerUrl } = await (
  await fetch(`http://127.0.0.1:${await debuggingPort()}/json/version`)
).json()

const socket = new WebSocket(webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.onopen = resolve
  socket.onerror = () => reject(new Error('devtools socket refused'))
})

let next = 0
const pending = new Map()
socket.onmessage = (event) => {
  const message = JSON.parse(event.data)
  const waiting = pending.get(message.id)
  if (!waiting) {
    return
  }
  pending.delete(message.id)
  message.error ? waiting.reject(new Error(JSON.stringify(message.error))) : waiting.resolve(message.result)
}

const send = (method, params = {}, sessionId) =>
  new Promise((resolve, reject) => {
    const id = ++next
    pending.set(id, { resolve, reject })
    socket.send(JSON.stringify({ id, method, params, sessionId }))
  })

/** One page, navigated and waited for. */
async function render(route) {
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
  await send('Page.enable', {}, sessionId)
  await send('Page.navigate', { url: `http://127.0.0.1:${port}${route}` }, sessionId)

  // Mounted and settled: Vue has run, the release list and the changelog have
  // had their chance to arrive, and the fonts are the ones in the build.
  for (let attempt = 0; attempt < 100; attempt++) {
    await sleep(150)
    const { result } = await send('Runtime.evaluate', {
      expression: `document.readyState === 'complete' && document.querySelector('#app')?.children.length > 0`,
      returnByValue: true,
    }, sessionId)
    if (result.value) {
      break
    }
  }
  await sleep(600)

  const { result } = await send('Runtime.evaluate', {
    expression: `'<!DOCTYPE html>\\n' + document.documentElement.outerHTML`,
    returnByValue: true,
  }, sessionId)

  await send('Target.closeTarget', { targetId })
  return result.value
}

let written = 0
for (const route of routes) {
  const html = await render(route)
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  written += 1
  console.log(`prerender: ${route} -> ${file.slice(dist.length)} (${html.length} B)`)
}

socket.close()
browser.kill()
server.stop(true)

if (written !== routes.length) {
  console.error(`prerender: wrote ${written} of ${routes.length}`)
  process.exit(1)
}
