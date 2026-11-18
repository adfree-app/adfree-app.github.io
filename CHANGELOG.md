# Changelog

## Unreleased

- Every route is prerendered to its own HTML file at build time, so a deep link
  is a 200 instead of a 404 that redirects itself.
- The install guide names both extension zips and Firefox's `about:debugging`
  path, in four languages.
- The copy states the fact and stops: no "not a mockup", no "so the page can
  never be older", no "the source is all there".

The site is versioned with its own content, not with the app or the extension:
it reads both of those at request time.

## 0.1.0

- A repository of its own, with its own CI and Pages deployment.
- The changelog is read from the app's `CHANGELOG.md` on GitHub at request time.
  The copy step before `dev` and `build` is gone, along with the copied file.
- `/install-extension` is a real install guide: four steps, and two screenshots of
  `chrome://extensions` taken from a browser that actually loaded the build.
- The extension's zip is no longer bundled here — the guide links to its
  releases, so the two cannot disagree about a version.
- One Extension entry in the header, the footer and the home section, all
  pointing at that guide.
