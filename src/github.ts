// Every GitHub URL the site points at, in one place.
//
// The site and the app are separate repositories now, and the changelog is read
// from the app's own file at request time rather than copied in at build time —
// so the branch name and the repository name are not decoration, they are the
// source of two pages. One constant each, so moving the project moves every
// link with it.

// All three repositories live in the same organisation, and the site is its
// root site: this file is the one place that says so.
export const APP = { owner: 'adfree-app', repo: 'adfree', branch: 'main' } as const
export const EXTENSION = { owner: 'adfree-app', repo: 'adfree-extension' } as const

/** The app's changelog, as GitHub serves the raw file. */
export const CHANGELOG_URL =
  `https://raw.githubusercontent.com/${APP.owner}/${APP.repo}/${APP.branch}/CHANGELOG.md`

/** The page a person can read it on, for when the raw read fails. */
export const CHANGELOG_PAGE = `https://github.com/${APP.owner}/${APP.repo}/blob/${APP.branch}/CHANGELOG.md`

/** Where a release of the extension lands, and where its source lives. */
export const EXTENSION_RELEASES = `https://github.com/${EXTENSION.owner}/${EXTENSION.repo}/releases`
export const EXTENSION_SOURCE = `https://github.com/${EXTENSION.owner}/${EXTENSION.repo}`
