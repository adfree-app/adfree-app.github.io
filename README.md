# adfree-website

The AdFree landing page: Vite, Vue 3 and Nuxt UI without Nuxt, in four
languages. It is a static site — the changelog is read from the app's
repository at request time and the extension is linked from its releases, so
the build contains no copy of either.

## Run

```sh
bun install
bun run dev         # http://localhost:5173
bun run typecheck   # vue-tsc: a key missing from one language fails the build
bun run build       # typecheck + vite build -> dist/
bun run preview     # serve dist/
```

## Languages

`src/content/` holds one file per language (`en`, `vi`, `ja`, `zh`). The two
that came first are the template; every key has to exist in all four, and
`vue-tsc` enforces it — a key in one and not another is a hole in the page, not
a translation to do later. Add a key to `src/content/types.ts` first, then fill
all four copies.

## Where the pages get their facts

| Fact | Source | Why not a copy |
| --- | --- | --- |
| Changelog | `CHANGELOG_URL` in `src/github.ts` → raw GitHub | a copied file goes stale the first time a release lands |
| Extension zip | the `adfree-extension` repository's releases | there is only ever one copy, the one CI published |
| GitHub links | `src/github.ts` | one constant each, so a move updates every page |

`src/github.ts` owns the repository names and branch. Change the organisation
there and every link on the site follows.

## Screenshots

`public/shots/` are real captures of the released builds, never mockups — the
install guide's two are photographs of `chrome://extensions` taken by a browser
that really loaded the extension (`scripts/capture-install-shots.js`).

## Relationship to the other repositories

- `adfree` — the app and engine; the site's changelog and source links point here.
- `adfree-extension` — the browser extension; the install guide and the release link point here.
- `adfree-website` (this one) — what you are reading.

## CI

`bun run typecheck && bun run build`, then on a push to `main` the build is
published to GitHub Pages. A project site is served from `/adfree/`, so set the
repository variable `SITE_BASE=/` (the default, `/adfree-website/`, is the
project path).