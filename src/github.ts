// Every GitHub URL the site points at, in one place.
//
// The site and the app are separate repositories now, and the changelog is read
// from the app's own file at request time rather than copied in at build time —
// so the branch name and the repository name are not decoration, they are the
// source of two pages. One constant each, so moving the project moves every
// link with it.

// The app is still on its original account: only the site and the extension
// moved to the adfree-app organisation, and a link to a repository that is not
// there is a 404 the page would show as an empty changelog.
export const APP = { owner: 'yuuki-kagura', repo: 'adfree', branch: 'main' } as const
export const EXTENSION = { owner: 'adfree-app', repo: 'adfree-extension' } as const

/** The app's changelog, as GitHub serves the raw file. */
export const CHANGELOG_URL =
  `https://raw.githubusercontent.com/${APP.owner}/${APP.repo}/${APP.branch}/CHANGELOG.md`

/** The page a person can read it on, for when the raw read fails. */
export const CHANGELOG_PAGE = `https://github.com/${APP.owner}/${APP.repo}/blob/${APP.branch}/CHANGELOG.md`

/** Where a release of the extension lands, and where its source lives. */
export const EXTENSION_RELEASES = `https://github.com/${EXTENSION.owner}/${EXTENSION.repo}/releases`
export const EXTENSION_SOURCE = `https://github.com/${EXTENSION.owner}/${EXTENSION.repo}`
