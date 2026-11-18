import type { Copy } from './types'

// 日本語. The English file is the source of truth; this one says the same
// things in the register a Japanese reader expects from a technical product
// page: plain です・ます in the prose, no exclamation marks, no slogans.
export const ja: Copy = {
  name: '日本語',
  nav: {
    features: '機能',
    how: '仕組み',
    screenshots: 'スクリーンショット',
    platforms: '対応環境',
    changelog: '変更履歴',
    faq: 'よくある質問',
  },
  cta: {
    download: 'ダウンロード',
    howItWorks: '仕組みを見る',
    getBuild: 'ダウンロード',
    latestRelease: '最新リリース',
    source: 'ソースからビルド',
  },
  hero: {
    badge: 'オープンソース · 追跡なし',
    lead: '広告とトラッカーを、',
    accent: '端末の中で止めます。',
    body:
      'AdFree はスマートフォンでもパソコンでも動きます。DNS の問い合わせに応答し、証明書を入れた場合は HTTPS を復号して中身を検査し、ページに残った広告を取り除きます。アカウントもサーバーも不要で、どこにも何も送りません。',
    notes: ['Android・Windows・Linux', 'プライバシー'],
  },
  trust: [
    {
      icon: 'i-lucide-smartphone',
      title: '端末の中で動く',
      body: 'フィルタリングは端末上で行われます。ブロックされた通信が外に出ることはありません。',
    },
    {
      icon: 'i-lucide-eye-off',
      title: 'テレメトリなし',
      body: '解析もクラッシュ報告もアカウントもありません。通信ログは端末上の SQLite ファイルです。',
    },
    {
      icon: 'i-lucide-cpu',
      title: 'Brave の adblock を利用',
      body: 'Brave のフィルタエンジンを uniffi 経由で Kotlin から呼び出しています。スマートフォンとパソコンは同じエンジンです。',
    },
    {
      icon: 'i-simple-icons-github',
      title: 'オープンソース',
      body: 'フィルタ規則、テスト、リリースビルドはすべてリポジトリにあります。',
    },
  ],
  how: {
    kicker: '仕組み',
    title: '三つの層、どれも任意',
    body:
      'まず DNS で止めます。ここが最も安く済むからです。HTTPS とページ内のフィルタリングは、自分で有効にするまで動きません。',
    steps: [
      {
        step: '01',
        icon: 'i-lucide-globe',
        title: 'DNS',
        body:
          'ブロックした名前には端末のリゾルバが NXDOMAIN か 0.0.0.0 を返すため、接続自体が始まらず、通信量も使われません。',
      },
      {
        step: '02',
        icon: 'i-lucide-lock-keyhole',
        title: 'HTTPS',
        body:
          '初期状態では無効です。ローカル CA を入れると 443 番を終端し、HTML を書き換えてスクリプトを挿入します。CA がなければ中継するだけです。',
      },
      {
        step: '03',
        icon: 'i-lucide-wand-sparkles',
        title: 'ページ内',
        body:
          'コスメティック規則、スクリプトレット、ユーザースクリプトが、広告が残していった空白を取り除きます。',
      },
    ],
  },
  features: {
    kicker: '機能',
    title: 'できること',
    body: 'スイッチだけの DNS リゾルバではなく、リクエストとレスポンスとページを読むフィルタリングエンジンです。',
    items: [
      {
        icon: 'i-lucide-network',
        title: '全トンネル VPN',
        body:
          'すべてのポートの TCP を中継し、DNS 以外の UDP はユーザー空間の NAT を通します。QUIC と DoT は遮断するので、アプリは絞り込める TCP に戻ります。',
      },
      {
        icon: 'i-lucide-layers',
        title: 'AdGuard・EasyList・uBO の規則',
        body:
          '照合は adblock-rust が行い、クレートにない応答の書き換えはこちらで補います。$$ と ##^ による HTML フィルタリング、$jsonprune、$hls、$path、$url のマスクに対応します。',
      },
      {
        icon: 'i-lucide-layout-grid',
        title: 'アプリごとの規則',
        body:
          '$app を付けて規則を一つのアプリに絞るか、アプリのタブからそのアプリだけトンネルの外に出せます。',
      },
      {
        icon: 'i-lucide-eye-off',
        title: 'トラッキング対策',
        body:
          '十四の変更をまとめたスイッチです。ヘッダと Cookie、ブラウザ API、DPI 対策のハンドシェイク分割、IP の隠蔽が含まれます。三つの強度はそのうち十二をまとめて設定します。',
      },
      {
        icon: 'i-lucide-code-2',
        title: 'コスメティックフィルタとユーザースクリプト',
        body:
          '@require と GM API の安全な範囲に対応したページランタイムがあるので、壊れたサイトはアプリを再ビルドせずに直せます。',
      },
      {
        icon: 'i-lucide-zap',
        title: 'スマートフィルタリング',
        body:
          '任意の機能です。10 秒間に 7 回ブロックされたホストには 1 分間の猶予を与え、アプリの再試行を止めます。初期状態では無効です。',
      },
      {
        icon: 'i-lucide-building-2',
        title: '企業ごとの内訳',
        body:
          '統計ではブロックした通信をドメインごとにまとめ、AdGuard のトラッカー一覧と Ghostery TrackerDB から企業名・サービス名・分類を表示します。',
      },
      {
        icon: 'i-lucide-flask-conical',
        title: 'セキュリティラボ',
        body:
          'ネットワークを使わない検査です。セキュリティリストがドメインを遮断すると、通知からそのドメインだけに絞ったログを開けます。',
      },
      {
        icon: 'i-lucide-bot',
        title: '自動化',
        body:
          'Tasker はエクスポートしたレシーバー経由で保護を切り替えられます。自分で有効にするまで閉じており、そのインストールのトークンが必要です。',
      },
    ],
  },
  numbers: [
    { value: '0', label: '自前のサーバー' },
    { value: '14', label: 'プライバシー項目' },
    { value: '3', label: '保護レベル' },
    { value: '1', label: 'Rust コア' },
  ],
  proof: {
    kicker: '第三者による検証',
    title: '130 件中 123 件をブロック',
    link: 'adblock.turtlecute.org',
    bodyRest:
      'は、既知の広告・トラッカーのリクエストを 130 件送り、届かなかった数を数えます。AdFree はスマートフォンでもパソコンでも 123 件、95% をブロックしました。HTTPS フィルタリングは切ったままなので、証明書の書き換えではなく、名前の時点で拒否した結果です。',
    phoneAlt: 'Android 版 Chrome で adblock.turtlecute.org が 95% を示す画面',
    desktopAlt: 'パソコンのブラウザで adblock.turtlecute.org が 95% を示す画面',
    cards: [
      { value: '95%', label: 'スコア' },
      { value: '123', label: 'ブロックした通信' },
      { value: '0', label: '書き換えた証明書' },
    ],
    runTest: '自分で試す',
    getBuild: 'ダウンロード',
  },
  youtube: {
    kicker: 'YouTube',
    title: '動画は再生され、広告は届かない',
    body:
      'AdFree はプレイヤーの応答から広告枠を取り除いてからページに渡し、YouTube が広告の計測と配信に使うリクエストも遮断します。スキップの操作も、拡張機能の導入も要りません。',
    points: [
      '再生前・再生中・バンパー広告はプレイヤーに届きません',
      '検索結果とホームのスポンサー枠も除去します',
      '同じフィルタがネットワーク側の広告リクエストも止めます',
    ],
    alt: 'AdFree のフィルタで広告なしに再生される LiSA の「一番の宝物」',
    caption: 'AdFree 経由の YouTube：広告なしで一本の動画。',
  },
  extension: {
    kicker: 'ブラウザの中で',
    title: 'AdFree が受け取れないページ',
    body: 'ブラウザは自分のキャッシュからページを返すことがあります。Service Worker が渡す HTML は回線を通らないため、アプリには書き換えるものがありません。拡張機能はその穴を塞ぎます。しかも拡張機能はルールを一切持ちません。アプリに何を挿入するかを問い合わせ、そのとおりに適用するので、どちらの経路でも同じものがブロックされます。',
    points: [
      'Service Worker がキャッシュから返したページでも動く',
      '独自のルールなし：答えはすべてアプリから',
      'アプリが自動でインストール：デベロッパーモードもフォルダー選択も不要',
    ],
    download: '拡張機能をダウンロード',
    note: 'zip 版（20 KB）もどうぞ',
    cardName: 'AdFree page runtime',
    cardVersion: 'Manifest V3 · Chrome 111+ · Edge、Brave、Opera も可',
    steps: [
      'アプリ内：Extensions →「Install for this browser」',
      'アプリがこのマシン用に署名したビルドを作り、起動時にブラウザが読むポリシーを書き込みます',
      'chrome://extensions での操作は不要：ブラウザがアプリから自動で取得します',
    ],
    footnote: 'ポリシーを書き込めない環境では、展開済みフォルダーと、仕上げのための一行コマンドを表示します。',
  },
  shots: {
    kicker: 'スクリーンショット',
    title: '各環境での画面',
    body: 'モックアップではなく、公開中のビルドの画面です。スマートフォン版とパソコン版は、同じコアの上で同じ Compose の画面を動かしています。',
    platforms: [
      {
        id: 'android',
        label: 'Android',
        icon: 'i-simple-icons-android',
        note: 'uniffi のブリッジ越しに六つのタブ: ホーム、保護、アプリ、通信、統計、設定。',
      },
      {
        id: 'windows',
        label: 'Windows',
        icon: 'i-simple-icons-windows',
        note: '同じ画面をデスクトップのウィンドウで。DNS はアダプターごとに設定し、ウィンドウを閉じてもトレイに残ります。',
      },
      {
        id: 'linux',
        label: 'Linux',
        icon: 'i-simple-icons-linux',
        note: 'deb・rpm・Arch パッケージ。画面はホストの JVM で動き、許可すれば CA がディストリビューションの信頼ストアに入ります。',
      },
    ],
  },
  platforms: {
    kicker: '対応環境',
    title: 'どれを選ぶか',
    body: 'どのビルドも同じタグ、同じコアから作られます。Android はスマートフォン用アプリ、デスクトップ版は同じ画面をそのまま動かします。',
    items: [
      {
        icon: 'i-simple-icons-android',
        name: 'Android',
        body:
          '全トンネルの VpnService、六つの Compose タブ、再起動後の再接続、Tasker による自動化。',
        points: ['最新リリースの APK', 'minSdk 24 · arm64・armv7・x86_64', 'root 不要'],
      },
      {
        icon: 'i-simple-icons-windows',
        name: 'Windows',
        body:
          '同じコアをデスクトップのウィンドウで。DNS はアダプターごとに転送し、ウィンドウを閉じてもトレイで動き続けます。',
        points: ['x64 と arm64 の MSI', 'アダプターごとの DNS 転送', 'トレイと自動起動'],
      },
      {
        icon: 'i-simple-icons-linux',
        name: 'Linux',
        body:
          'deb・rpm・Arch パッケージ。画面はホストの JVM で動きます。許可すれば CA がディストリビューションの信頼ストアに入ります。',
        points: ['deb・rpm・pkg.tar.zst', 'Debian・Ubuntu・Fedora・Arch・CachyOS', 'pkexec は CA のときだけ'],
      },
    ],
    getBuild: 'ダウンロード',
  },
  download: {
    title: 'ダウンロード',
    body:
      '以下はタグから CI が公開した最新リリースのファイルです。環境を選んでください。どのパッケージにも実行環境が含まれています。',
    note: 'アカウントも登録も不要です。動かない場合はソースがすべて公開されています。',
    install: {
      label: 'Linux はコマンド一行で入ります',
      body:
        'スクリプトはディストリビューション名ではなくパッケージマネージャーに尋ねます。Debian・Ubuntu・Mint・Pop では deb、Fedora・openSUSE では rpm、Arch・CachyOS・EndeavourOS・Manjaro では pkg.tar.zst を入れ、/opt/adfree に展開します。',
      copy: 'コピー',
      copied: 'コピーしました',
    },
    release: {
      loading: 'GitHub から最新リリースを読み込んでいます…',
      error: 'リリース一覧を取得できませんでした。同じファイルはリリースページにあります。',
      retry: 'やり直す',
      all: 'すべてのリリース',
      latest: '最新リリース',
      size: 'サイズ',
    },
  },
  sponsor: {
    kicker: '支援',
    title: 'コーヒーを一杯おごる',
    body: 'AdFree は無料で、広告も有料版もありません。役に立ったら、次の三つのどれかで支援できます。',
    kofi: {
      title: 'Ko-fi',
      body: '一度だけでも毎月でも、カードまたは PayPal で。',
      action: 'Ko-fi を開く',
    },
    momo: {
      title: 'MoMo',
      body: 'ベトナム国内なら電子ウォレットが手軽です。',
      action: 'MoMo を開く',
    },
    bank: {
      title: '銀行振込',
      body: 'BVBank の口座へ、どの銀行アプリからでも送れます。海外からは SWIFT を使ってください。',
      account: '口座番号',
      holder: '口座名義',
      bankName: '銀行',
      swift: 'SWIFT',
      address: '支店',
      copy: 'コピー',
      copied: 'コピーしました',
      action: '口座番号をコピー',
    },
    note: 'ありがとうございます。支援しても機能が増えることはありません。リリースは誰にとっても同じです。',
  },
  faq: {
    kicker: 'よくある質問',
    title: '質問',
    body: '長い説明は DESIGN.md にあります。',
    design: '設計メモを読む',
    items: [
      {
        label: 'AdFree は VPN ですか',
        icon: 'i-lucide-shield-question',
        content:
          'トンネルには Android の VpnService を使いますが、出口のサーバーはありません。パケットは端末の中で絞り込まれ、そのまま流れます。',
      },
      {
        label: 'root は必要ですか',
        icon: 'i-lucide-key-round',
        content:
          'いいえ。Android は VpnService を使います。デスクトップ版の DNS 転送は、許可したときに追加され、待ち受けを閉じると削除されるので、AdFree を終了すれば規則も一緒に消えます。',
      },
      {
        label: 'HTTPS フィルタリングに証明書が要りますか',
        icon: 'i-lucide-badge-check',
        content:
          'はい。ローカル CA を入れるまで無効です。システムが CA を信頼していない場合は、フィルタリングせず中継し、どの信頼ストアを見つけたかを画面に表示します。',
      },
      {
        label: '端末の外に出るものはありますか',
        icon: 'i-lucide-cloud-off',
        content:
          'ありません。バックエンドも API キーもなく、アプリはどこにもデータを送りません。フィルタ一覧は自分で選んだ URL かファイルから更新し、通信ログは SQLite に残り、自動化のトークンはバックアップに含めません。',
      },
      {
        label: 'DNS ブロッカーと何が違いますか',
        icon: 'i-lucide-git-compare',
        content:
          'DNS は一つの層にすぎません。AdFree は TLS を終端し、HTML を書き換え、コスメティック規則とユーザースクリプトを実行し、アプリごとの規則を適用し、十四のプライバシー項目を設定します。',
      },
      {
        label: '無料ですか',
        icon: 'i-lucide-gift',
        content: 'はい。ソースは GitHub にあり、どのリリースもアカウントなしでダウンロードできます。',
      },
    ],
  },
  footer: {
    blurb: '端末の中で動く広告・トラッカーのブロッカーです。データは収集しません。',
    disclaimer:
      'AdFree は独立したプロジェクトで、AdGuard や他のブロッカー製品とは関係ありません。',
    product: '製品',
    project: 'プロジェクト',
    changelog: '変更履歴',
    design: '設計メモ',
    source: 'ソース',
    releases: 'リリース',
    issues: 'Issue',
    madeWith: 'オープンソースで作られています',
    rights: 'Tachibana Shin',
  },
  changelog: {
    title: '変更履歴',
    body: 'コミットから生成した各リリースの記録です。ファイルを読んでそのまま表示しており、生の URL を開くことはありません。',
    back: 'サイトに戻る',
    loading: '変更履歴を読み込んでいます…',
    error: '変更履歴を読み込めませんでした。',
    empty: 'まだリリースはありません。',
  },
}
