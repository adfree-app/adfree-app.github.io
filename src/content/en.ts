import type { Copy } from './types'

// Plain sentences. The page is for someone deciding whether to install a
// blocker, not for a launch post: say what it does, what it needs, what it
// does not send anywhere, and stop.
export const en: Copy = {
  name: 'English',
  nav: {
    features: 'Features',
    how: 'How it works',
    screenshots: 'Screenshots',
    platforms: 'Platforms',
    changelog: 'Changelog',
    faq: 'FAQ',
  },
  cta: {
    download: 'Download',
    howItWorks: 'See how it works',
    getBuild: 'Download',
    latestRelease: 'Latest release',
    source: 'Build from source',
  },
  hero: {
    badge: 'Open source · No tracking',
    lead: 'Ads and trackers,',
    accent: 'blocked on your device.',
    body:
      'AdFree runs on your phone or your desktop. It answers DNS queries, filters HTTPS when you install its certificate, and removes what is left of the ad in the page. No account, no server, nothing sent anywhere.',
    notes: ['Android, Windows, Linux', 'Privacy'],
  },
  trust: [
    {
      icon: 'i-lucide-smartphone',
      title: 'On your device',
      body: 'The filtering runs locally. A blocked request never leaves the machine.',
    },
    {
      icon: 'i-lucide-eye-off',
      title: 'No telemetry',
      body: 'No analytics, no crash reports, no account. The request log is a local SQLite file.',
    },
    {
      icon: 'i-lucide-cpu',
      title: "Built on Brave's adblock",
      body:
        "Brave's filter engine, called from Kotlin through uniffi. The phone and the desktop run the same one.",
    },
    {
      icon: 'i-simple-icons-github',
      title: 'Open source',
      body: 'Rules, tests and release builds are all in the repository.',
    },
  ],
  how: {
    kicker: 'How it works',
    title: 'Three layers, each one optional',
    body:
      'DNS is answered first because it is the cheapest block. HTTPS and in-page filtering stay off until you turn them on.',
    steps: [
      {
        step: '01',
        icon: 'i-lucide-globe',
        title: 'DNS',
        body:
          'A blocked name gets NXDOMAIN or 0.0.0.0 from the local resolver, so the connection is never opened and no data is spent on it.',
      },
      {
        step: '02',
        icon: 'i-lucide-lock-keyhole',
        title: 'HTTPS',
        body:
          'Off by default. With the local CA installed, port 443 is terminated, HTML is rewritten and scripts are injected. Without the CA it only relays.',
      },
      {
        step: '03',
        icon: 'i-lucide-wand-sparkles',
        title: 'In the page',
        body:
          'Cosmetic rules, scriptlets and userscripts remove the empty box an ad left behind.',
      },
    ],
  },
  features: {
    kicker: 'Features',
    title: 'What it does',
    body: 'A filtering engine that reads the request, the response and the page, not a DNS resolver with a switch.',
    items: [
      {
        icon: 'i-lucide-network',
        title: 'Full-tunnel VPN',
        body:
          'TCP on every port is relayed and non-DNS UDP goes through a userspace NAT. QUIC and DoT are dropped so apps fall back to TCP, which can be filtered.',
      },
      {
        icon: 'i-lucide-layers',
        title: 'AdGuard, EasyList and uBO rules',
        body:
          'adblock-rust does the matching, plus the response modifiers the crate lacks: $$ and ##^ HTML filtering, $jsonprune, $hls, $path and $url masks.',
      },
      {
        icon: 'i-lucide-layout-grid',
        title: 'Per-app rules',
        body:
          'Narrow a rule to one app with $app, or route an app around the tunnel from the Apps tab.',
      },
      {
        icon: 'i-lucide-eye-off',
        title: 'Tracking protection',
        body:
          'One switch over fourteen changes: headers and cookies, browser APIs, handshake splitting against DPI, and IP masking. The three levels write twelve of them at once.',
      },
      {
        icon: 'i-lucide-code-2',
        title: 'Cosmetic filtering and userscripts',
        body:
          'A page runtime with @require and a safe subset of the GM APIs, so a broken site can be patched without a new app build.',
      },
      {
        icon: 'i-lucide-zap',
        title: 'Smart filtering',
        body:
          'Optional. A host blocked seven times in ten seconds gets a one-minute pass so an app stops retrying. It is off by default.',
      },
      {
        icon: 'i-lucide-building-2',
        title: 'Company breakdown',
        body:
          'Statistics group blocked traffic by domain and name the company, service and category from AdGuard’s tracker list and Ghostery TrackerDB.',
      },
      {
        icon: 'i-lucide-flask-conical',
        title: 'Security Lab',
        body:
          'Offline checks with no network calls. When a security list blocks a domain, one notification opens the log filtered to it.',
      },
      {
        icon: 'i-lucide-bot',
        title: 'Automation',
        body:
          'Tasker can switch protection through an exported receiver. It stays closed until you enable it, and needs that install’s token.',
      },
    ],
  },
  numbers: [
    { value: '0', label: 'servers of ours' },
    { value: '14', label: 'privacy edits' },
    { value: '3', label: 'protection levels' },
    { value: '1', label: 'Rust core' },
  ],
  proof: {
    kicker: 'Third-party test',
    title: '123 of 130 requests blocked',
    link: 'adblock.turtlecute.org',
    bodyRest:
      'sends 130 known ad and tracker requests and counts the ones that never arrive. AdFree blocked 123 of them, 95%, on the phone and on the desktop, with HTTPS filtering off — so each one was refused by name rather than by a rewritten certificate.',
    phoneAlt: 'AdFree scoring 95% on adblock.turtlecute.org in Chrome for Android',
    desktopAlt: 'AdFree scoring 95% on adblock.turtlecute.org in a desktop browser',
    cards: [
      { value: '95%', label: 'score' },
      { value: '123', label: 'requests blocked' },
      { value: '0', label: 'certificates rewritten' },
    ],
    runTest: 'Run the test yourself',
    getBuild: 'Download',
  },
  youtube: {
    kicker: 'YouTube',
    title: 'The video plays, the ads never arrive',
    body:
      'AdFree takes the ad placements out of the player response before the page reads it, and blocks the requests YouTube uses to count and sell them. Nothing to skip, no extension to install.',
    points: [
      'Pre-roll, mid-roll and bumper ads never reach the player',
      'Sponsored cards in search and on the home feed are removed',
      'The same filter list refuses the ad requests on the network',
    ],
    alt: 'YouTube playing 一番の宝物 by LiSA with no advertisement, filtered by AdFree',
    caption: 'YouTube through AdFree: one video, no ad break.',
  },
  shots: {
    kicker: 'Screenshots',
    title: 'The app on each platform',
    body: 'Screenshots of the released builds, not mockups. The phone app and the desktop builds run the same Compose screens over the same core.',
    platforms: [
      {
        id: 'android',
        label: 'Android',
        icon: 'i-simple-icons-android',
        note: 'Six tabs over the uniffi bridge: Home, Protection, Apps, Activity, Statistics, Settings.',
      },
      {
        id: 'windows',
        label: 'Windows',
        icon: 'i-simple-icons-windows',
        note: 'The same UI in a desktop window, with DNS redirects set per adapter and a tray icon that keeps running.',
      },
      {
        id: 'linux',
        label: 'Linux',
        icon: 'i-simple-icons-linux',
        note: 'deb, rpm or Arch package, the UI on the host JVM, and the CA added to the distribution’s trust store when you allow it.',
      },
    ],
  },
  platforms: {
    kicker: 'Platforms',
    title: 'Which build to take',
    body: 'Every build comes from the same tag and the same core. Android is the phone app; the desktop packages run the whole UI on your machine.',
    items: [
      {
        icon: 'i-simple-icons-android',
        name: 'Android',
        body:
          'A full-tunnel VpnService, six Compose tabs, reconnect after a reboot, and Tasker automation.',
        points: ['APK from the latest release', 'minSdk 24 · arm64, armv7, x86_64', 'No root'],
      },
      {
        icon: 'i-simple-icons-windows',
        name: 'Windows',
        body:
          'The same core in a desktop window. DNS is redirected per adapter, and the tray keeps it running when the window closes.',
        points: ['MSI for x64 and arm64', 'Per-adapter DNS redirect', 'Tray and auto-start'],
      },
      {
        icon: 'i-simple-icons-linux',
        name: 'Linux',
        body:
          'deb, rpm or Arch package with the whole UI on the host JVM. The CA goes into the distribution’s trust store when you allow it.',
        points: ['deb, rpm and pkg.tar.zst', 'Debian, Ubuntu, Fedora, Arch, CachyOS', 'pkexec only for the CA'],
      },
    ],
    getBuild: 'Download',
  },
  download: {
    title: 'Download',
    body:
      'The files below are from the latest release, published by CI from the tag. Pick your platform; every package includes its own runtime.',
    note: 'No account and no sign-up. If a build does not work for you, the source is all there.',
    install: {
      label: 'Install on Linux with one command',
      body:
        'The script asks your package manager what it needs — deb on Debian, Ubuntu, Mint and Pop, rpm on Fedora and openSUSE, pkg.tar.zst on Arch, CachyOS, EndeavourOS and Manjaro — then installs to /opt/adfree.',
      copy: 'Copy',
      copied: 'Copied',
    },
    release: {
      loading: 'Reading the latest release from GitHub…',
      error: 'Could not read the release list. The releases page has the same files.',
      retry: 'Try again',
      all: 'All releases',
      latest: 'Latest release',
      size: 'size',
    },
  },
  sponsor: {
    kicker: 'Sponsor',
    title: 'Buy me a coffee',
    body: 'AdFree is free, with no ads and no paid tier. If it helps you, here are three ways to chip in.',
    kofi: {
      title: 'Ko-fi',
      body: 'One-off or monthly, by card or PayPal.',
      action: 'Open Ko-fi',
    },
    momo: {
      title: 'MoMo',
      body: 'E-wallet transfer, easiest from inside Vietnam.',
      action: 'Open MoMo',
    },
    bank: {
      title: 'Bank transfer',
      body: 'Transfer to BVBank from any banking app. From abroad, use SWIFT.',
      account: 'Account number',
      holder: 'Account name',
      bankName: 'Bank',
      swift: 'SWIFT',
      address: 'Branch',
      copy: 'Copy',
      copied: 'Copied',
      action: 'Copy account number',
    },
    note: 'Thank you. Sponsoring does not buy a feature: the releases stay the same for everyone.',
  },
  faq: {
    kicker: 'FAQ',
    title: 'Questions',
    body: 'The long answers are in DESIGN.md.',
    design: 'Read the design notes',
    items: [
      {
        label: 'Is AdFree a VPN?',
        icon: 'i-lucide-shield-question',
        content:
          'It uses Android’s VpnService as the tunnel, but there is no exit server: packets are filtered and routed on the phone itself.',
      },
      {
        label: 'Does it need root?',
        icon: 'i-lucide-key-round',
        content:
          'No. Android uses VpnService. On desktop, the DNS redirects are added when you allow them and removed when the listeners close, so quitting AdFree takes the rules with it.',
      },
      {
        label: 'Does HTTPS filtering need a certificate?',
        icon: 'i-lucide-badge-check',
        content:
          'Yes, and it stays off until you install the local CA. When the system does not trust it, the engine relays instead of filtering, and the app tells you which trust store it found.',
      },
      {
        label: 'What leaves the device?',
        icon: 'i-lucide-cloud-off',
        content:
          'Nothing. There is no backend and no API key, and the app sends no data anywhere. Filter lists update from URLs or files you choose, the request log stays in SQLite, and the automation token is left out of backups.',
      },
      {
        label: 'How is it different from a DNS blocker?',
        icon: 'i-lucide-git-compare',
        content:
          'DNS is one layer. AdFree also terminates TLS, rewrites HTML, runs cosmetic rules and userscripts, applies per-app rules, and makes the fourteen privacy changes.',
      },
      {
        label: 'Is it free?',
        icon: 'i-lucide-gift',
        content: 'Yes. The source is on GitHub and every release can be downloaded without an account.',
      },
    ],
  },
  footer: {
    blurb: 'An ad and tracker blocker that runs on your own device. It collects no data.',
    disclaimer:
      'AdFree is an independent project, not affiliated with AdGuard or any other blocker vendor.',
    product: 'Product',
    project: 'Project',
    changelog: 'Changelog',
    design: 'Design notes',
    source: 'Source',
    releases: 'Releases',
    issues: 'Issues',
    madeWith: 'Made with Open Source',
    rights: 'Tachibana Shin',
  },
  changelog: {
    title: 'Changelog',
    body: 'Every release, as written by its commits. The file is read and shown here; nothing opens a raw URL.',
    back: 'Back to the site',
    loading: 'Loading the changelog…',
    error: 'The changelog could not be loaded.',
    empty: 'No releases yet.',
  },
}