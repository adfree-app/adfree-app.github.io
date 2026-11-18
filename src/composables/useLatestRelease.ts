import { ref } from 'vue'

// The download buttons are not written into the page: they are read from the
// release itself, so a new architecture or a new package appears on the site
// without editing it. One request per page load, cached in the module.

export type Asset = {
  name: string
  url: string
  size: number
  /** Which tab it belongs under. */
  family: 'android' | 'windows' | 'linux'
  /** What the file is, for the line under its name: APK, MSI, deb, rpm… */
  kind: string
  arch: string
}

export type Release = {
  version: string
  published: string
  pageUrl: string
  assets: Asset[]
}

const ENDPOINT = 'https://api.github.com/repos/yuuki-kagura/adfree/releases/latest'
const RELEASES_PAGE = 'https://github.com/yuuki-kagura/adfree/releases'

// Assets that are release machinery rather than something to install: the Play
// bundle, the userscripts, and the Arch debug package CI uses to prove the
// build works.
function wanted(name: string) {
  if (name.includes('-debug')) return false
  if (name.endsWith('.user.js')) return false
  if (name.endsWith('.aab')) return false
  return /\.(apk|msi|deb|rpm|zst)$/.test(name)
}

function kindOf(name: string) {
  if (name.endsWith('.apk')) return 'APK'
  if (name.endsWith('.msi')) return 'MSI'
  if (name.endsWith('.deb')) return 'deb'
  if (name.endsWith('.rpm')) return 'rpm'
  if (name.endsWith('.pkg.tar.zst')) return 'pkg.tar.zst'
  return 'file'
}

function archOf(name: string) {
  if (/(arm64|aarch64)/.test(name)) return 'arm64'
  if (/(x64|x86_64|amd64)/.test(name)) return 'x86_64'
  if (/armv7/.test(name)) return 'armv7'
  return ''
}

function familyOf(name: string): Asset['family'] | null {
  if (name.endsWith('.apk')) return 'android'
  if (name.endsWith('.msi')) return 'windows'
  if (/\.(deb|rpm|zst)$/.test(name)) return 'linux'
  return null
}

export const release = ref<Release | null>(null)
export const error = ref<string | null>(null)
export const loading = ref(false)

let started: Promise<void> | null = null

export function loadRelease() {
  started = null
  return fetchRelease()
}

function fetchRelease(): Promise<void> {
  if (started) return started
  loading.value = true
  error.value = null
  started = (async () => {
    try {
      const response = await fetch(ENDPOINT, {
        headers: { Accept: 'application/vnd.github+json' },
      })
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
      const data = await response.json()
      const assets: Asset[] = (data.assets ?? [])
        .filter((asset: { name: string }) => wanted(asset.name))
        .map((asset: { name: string; browser_download_url: string; size: number }) => ({
          name: asset.name,
          url: asset.browser_download_url,
          size: asset.size,
          family: familyOf(asset.name)!,
          kind: kindOf(asset.name),
          arch: archOf(asset.name),
        }))
        .sort((a: Asset, b: Asset) => a.name.localeCompare(b.name))

      release.value = {
        version: String(data.tag_name ?? '').replace(/^v/, ''),
        published: data.published_at ?? '',
        pageUrl: data.html_url ?? RELEASES_PAGE,
        assets,
      }
    } catch (cause) {
      error.value = cause instanceof Error ? cause.message : String(cause)
    } finally {
      loading.value = false
    }
  })()
  return started
}

export const releasesPage = RELEASES_PAGE

/** Bytes to a short size, e.g. 60.4 MB. */
export function humanSize(bytes: number) {
  if (!bytes) return ''
  const mb = bytes / 1024 / 1024
  if (mb >= 1) return `${mb.toFixed(1)} MB`
  return `${Math.round(bytes / 1024)} KB`
}
