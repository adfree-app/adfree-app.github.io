// The shape every language of the site fills in. Two copies exist (en, vi) and
// the build fails if one of them is missing a key: a page with a hole in it is
// worse than a page in one language.

export type IconItem = { icon: string; title: string; body: string }

export type Step = { step: string; icon: string; title: string; body: string }

export type PlatformCard = { icon: string; name: string; body: string; points: string[] }

export type FaqItem = { label: string; icon: string; content: string }

export type ShotPlatform = { id: string; label: string; icon: string; note: string }

export type Copy = {
  /** `<html lang>` and the toggle label. */
  name: string
  nav: {
    features: string
    how: string
    screenshots: string
    platforms: string
    changelog: string
    faq: string
  }
  cta: { download: string; howItWorks: string; getBuild: string; latestRelease: string; source: string }
  hero: { badge: string; lead: string; accent: string; body: string; notes: string[] }
  trust: IconItem[]
  how: { kicker: string; title: string; body: string; steps: Step[] }
  features: { kicker: string; title: string; body: string; items: IconItem[] }
  numbers: { value: string; label: string }[]
  proof: {
    kicker: string
    title: string
    link: string
    bodyRest: string
    phoneAlt: string
    desktopAlt: string
    cards: { value: string; label: string }[]
    runTest: string
    getBuild: string
  }
  youtube: { kicker: string; title: string; body: string; points: string[]; alt: string; caption: string }
  extension: {
    kicker: string
    title: string
    body: string
    points: string[]
    download: string
    note: string
    cardName: string
    cardVersion: string
    steps: string[]
    footnote: string
  }
  shots: { kicker: string; title: string; body: string; platforms: ShotPlatform[] }
  platforms: { kicker: string; title: string; body: string; items: PlatformCard[]; getBuild: string }
  download: {
    title: string
    body: string
    note: string
    install: { label: string; body: string; copy: string; copied: string }
    release: {
      loading: string
      error: string
      retry: string
      all: string
      latest: string
      size: string
    }
  }
  sponsor: {
    kicker: string
    title: string
    body: string
    kofi: { title: string; body: string; action: string }
    momo: { title: string; body: string; action: string }
    bank: {
      title: string
      body: string
      account: string
      holder: string
      bankName: string
      swift: string
      address: string
      copy: string
      copied: string
      action: string
    }
    note: string
  }
  faq: { kicker: string; title: string; body: string; design: string; items: FaqItem[] }
  footer: {
    blurb: string
    disclaimer: string
    product: string
    project: string
    changelog: string
    design: string
    source: string
    releases: string
    issues: string
    madeWith: string
    rights: string
  }
  changelog: { title: string; body: string; back: string; loading: string; error: string; empty: string }
}
