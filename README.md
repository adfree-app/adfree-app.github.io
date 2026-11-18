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
bun run build       # vite build, then prerender every route -> dist/
bun run preview     # serve dist/
```

## Routes are files

The app is a Vue router app on a host that only serves files. `vite build`
leaves one `index.html`, so `/changelog` is a 404 with a script in it — which is
what a crawler sees and what a shared link hits first.

`scripts/prerender.mjs` closes that: it serves the build, opens each route in
headless Chrome over the DevTools protocol, and writes the document Chrome ended
up with to `dist/<route>/index.html`. Every route is then a 200 on Pages. The
client is unchanged — Vue mounts over the captured markup and re-reads the
release list and the changelog — so what is baked in is a first paint, not a
frozen number.

The route list lives in that script and mirrors `src/main.ts`; a page added to
one has to be added to the other, and CI fails if a route file is missing.

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
published to GitHub Pages. The repository is named `adfree-app.github.io`
because it is the organisation's root site: it is served from
`https://adfree-app.github.io/`, and `/install-extension` there is the address
the app opens. A custom domain would set the repository variable `SITE_BASE`.