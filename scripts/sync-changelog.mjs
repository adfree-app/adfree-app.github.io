// Copy the repository's CHANGELOG.md into public/, so the site can read it with
// a fetch instead of sending the visitor to a raw URL on GitHub. Run before dev
// and build; the copy is generated and must not be edited by hand.
import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const source = resolve(here, '..', '..', 'CHANGELOG.md')
const target = resolve(here, '..', 'public', 'changelog.md')

await mkdir(dirname(target), { recursive: true })
await copyFile(source, target)
console.log('changelog: copied CHANGELOG.md into public/changelog.md')
