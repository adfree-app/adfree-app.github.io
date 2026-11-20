import type { Copy } from './types'

// 简体中文. Same facts as the English file, written the way a Chinese
// product page for a technical tool would put them: 完整句子, no 口号.
export const zh: Copy = {
  name: '简体中文',
  nav: {
    features: '功能',
    how: '工作方式',
    screenshots: '截图',
    inspector: '检查器',
    platforms: '平台',
    changelog: '更新日志',
    extension: '扩展',
    faq: '常见问题',
  },
  cta: {
    download: '下载',
    howItWorks: '看看它怎么工作',
    getBuild: '下载',
    latestRelease: '最新版本',
    source: '从源码构建',
  },
  hero: {
    badge: '开源 · 不追踪',
    lead: '广告和跟踪器，',
    accent: '在你自己的设备上拦下。',
    body:
      'AdFree 可以装在手机或电脑上。它应答 DNS 查询，在你安装证书后过滤 HTTPS，并清掉页面里残留的广告。不需要账号，没有服务器，不向外发送任何内容。',
    notes: ['Android、Windows、Linux', '隐私'],
  },
  trust: [
    {
      icon: 'i-lucide-smartphone',
      title: '在本机运行',
      body: '过滤在本机完成。被拦下的请求不会离开这台设备。',
    },
    {
      icon: 'i-lucide-eye-off',
      title: '没有遥测',
      body: '没有统计、没有崩溃上报、没有账号。请求日志就是本机的一个 SQLite 文件。',
    },
    {
      icon: 'i-lucide-cpu',
      title: '基于 Brave 的 adblock',
      body: '使用 Brave 的过滤引擎，从 Kotlin 通过 uniffi 调用。手机版和桌面版跑的是同一个引擎。',
    },
    {
      icon: 'i-simple-icons-github',
      title: '开源',
      body: '过滤规则、测试和发布包都在仓库里。',
    },
  ],
  how: {
    kicker: '工作方式',
    title: '三层，每一层都可以关掉',
    body: '先由 DNS 处理，因为这一步最省。HTTPS 和页面内过滤要你自己打开才会生效。',
    steps: [
      {
        step: '01',
        icon: 'i-lucide-globe',
        title: 'DNS',
        body:
          '被拦的域名由本机解析器返回 NXDOMAIN 或 0.0.0.0，连接根本不会建立，也就不花流量。',
      },
      {
        step: '02',
        icon: 'i-lucide-lock-keyhole',
        title: 'HTTPS',
        body:
          '默认关闭。装上本地 CA 后，443 端口会被终结，HTML 被改写、脚本被注入。没装 CA 时只做转发。',
      },
      {
        step: '03',
        icon: 'i-lucide-wand-sparkles',
        title: '页面内',
        body: '外观规则、脚本片段和用户脚本会清掉广告留下的空白块。',
      },
    ],
  },
  features: {
    kicker: '功能',
    title: '它能做什么',
    body: '一个会读请求、响应和页面的过滤引擎，而不是只有一个开关的 DNS 解析器。',
    items: [
      {
        icon: 'i-lucide-network',
        title: '全局隧道 VPN',
        body:
          '所有端口的 TCP 都会被转发，非 DNS 的 UDP 走用户态 NAT。QUIC 和 DoT 被丢弃，应用会退回可以过滤的 TCP。',
      },
      {
        icon: 'i-lucide-layers',
        title: 'AdGuard、EasyList 和 uBO 规则',
        body:
          '匹配交给 adblock-rust，它没有的响应改写由这里补上：$$ 与 ##^ 的 HTML 过滤，以及 $jsonprune、$hls、$path、$url 掩码。',
      },
      {
        icon: 'i-lucide-layout-grid',
        title: '按应用设置规则',
        body: '用 $app 把规则限制到某个应用，或在「应用」页让某个应用绕开隧道。',
      },
      {
        icon: 'i-lucide-eye-off',
        title: '跟踪保护',
        body:
          '一个开关管十四项改动：请求头和 Cookie、浏览器 API、针对 DPI 的握手拆分、IP 隐藏。三档强度会一次写入其中十二项。',
      },
      {
        icon: 'i-lucide-code-2',
        title: '外观过滤与用户脚本',
        body:
          '页面运行时支持 @require 和 GM API 的安全子集，站点坏了不用重新发版就能修。',
      },
      {
        icon: 'i-lucide-zap',
        title: '智能过滤',
        body:
          '可选功能。十秒内被封七次的域名会被放行一分钟，好让应用停止重试。默认关闭。',
      },
      {
        icon: 'i-lucide-building-2',
        title: '按公司归类',
        body:
          '统计页按域名整理被拦流量，并从 AdGuard 的跟踪器列表和 Ghostery TrackerDB 里给出公司、服务和类别。',
      },
      {
        icon: 'i-lucide-flask-conical',
        title: '安全实验室',
        body:
          '不联网的检查。安全列表拦下某个域名时，一条通知就能打开只看该域名的日志。',
      },
      {
        icon: 'i-lucide-bot',
        title: '自动化',
        body:
          'Tasker 可以通过导出的 receiver 切换保护。你没启用之前它是关的，而且需要这次安装的令牌。',
      },
    ],
  },
  numbers: [
    { value: '0', label: '自建服务器' },
    { value: '14', label: '隐私改动' },
    { value: '3', label: '保护级别' },
    { value: '1', label: 'Rust 内核' },
  ],
  proof: {
    kicker: '第三方测试',
    title: '130 个请求拦下 123 个',
    link: 'adblock.turtlecute.org',
    bodyRest:
      '会发出 130 个已知的广告和跟踪器请求，统计有多少没到达。AdFree 在手机和电脑上都拦下了 123 个，95%，而且 HTTPS 过滤是关着的——也就是说这些请求是按域名被拒绝的，不是靠改写证书。',
    phoneAlt: 'Android 版 Chrome 中 adblock.turtlecute.org 得分 95% 的画面',
    desktopAlt: '桌面浏览器中 adblock.turtlecute.org 得分 95% 的画面',
    cards: [
      { value: '95%', label: '得分' },
      { value: '123', label: '拦下的请求' },
      { value: '0', label: '改写的证书' },
    ],
    runTest: '自己测一次',
    getBuild: '下载',
  },
  youtube: {
    kicker: 'YouTube',
    title: '视频照常播放，广告无法送达',
    body:
      'AdFree 在页面读取播放器响应之前就移除广告位，并拦下 YouTube 用来统计和投放广告的请求。无需点击跳过，也无需安装扩展。',
    points: [
      '片头、片中与 bumper 广告不会进入播放器',
      '搜索和首页的赞助卡片一并移除',
      '同一份过滤规则在网络上拦下广告请求',
    ],
    alt: '经 AdFree 过滤后无广告播放的 LiSA《一番の宝物》',
    caption: '经 AdFree 打开的 YouTube：一个视频，没有广告时段。',
  },
  shots: {
    kicker: '截图',
    title: '各平台上的样子',
    body: '这些是发布版本的实际截图。手机版和桌面版在同一内核上跑同一套 Compose 界面。',
    platforms: [
      {
        id: 'android',
        label: 'Android',
        icon: 'i-simple-icons-android',
        note: '通过 uniffi 桥接的六个标签页：首页、保护、应用、活动、统计、设置。',
      },
      {
        id: 'windows',
        label: 'Windows',
        icon: 'i-simple-icons-windows',
        note: '同一套界面放进桌面窗口，DNS 按网卡重定向，关掉窗口后托盘里继续运行。',
      },
      {
        id: 'linux',
        label: 'Linux',
        icon: 'i-simple-icons-linux',
        note: 'deb、rpm 或 Arch 包，界面跑在宿主机的 JVM 上；允许后 CA 会加入发行版的信任库。',
      },
    ],
  },
  inspector: {
    kicker: '请求检查器',
    title: '应用处理的每个请求，以及返回的内容',
    body: '检查器是给永远不会到达浏览器的流量准备的网络面板: 熟悉的列、过滤框和详情面板 \u2014 加上浏览器无法展示的部分，比如一边到达一边读取的流、以及在中途被替换的应答。',
    points: [
      {
        icon: 'i-lucide-list-filter',
        title: '一个列表，毫无隐藏',
        body: '方法、主机、状态、类型、大小和时间，新的在前。可按文字或类型过滤: XHR、JS、CSS、文档、套接字、图片、字体。',
      },
      {
        icon: 'i-lucide-braces',
        title: '正文排版展示',
        body: 'JSON、XML、HTML、CSS、JavaScript 和 YAML 都带高亮显示，另有原始视图看线上字节，以及给非文本正文用的字节视图。',
      },
      {
        icon: 'i-lucide-radio',
        title: '边到达边读取的流',
        body: '连接还开着的时候，服务器推送事件就带着各自的到达时间和大小列出，不必等一个永不结束的响应。',
      },
      {
        icon: 'i-lucide-replace-all',
        title: '可以替换的应答',
        body: '把 URL 模式指向一个状态、一组头和一段正文 \u2014 文本或 base64 \u2014 客户端就会收到那个应答。窗口开着时生效，并保存下来供下次使用。',
      },
    ],
    how: '从托盘菜单，或首页开关下方的两个按钮打开。',
    caption: '截取自已发布的 Linux 构建: 过滤到一条请求的列表，以及逐事件读取的服务器推送流。',
    shots: [
      {
        src: '/shots/inspector-list.png',
        alt: 'AdFree 请求检查器: 列表中的一条请求，带 URL、状态和响应头',
      },
      {
        src: '/shots/inspector-stream.png',
        alt: 'AdFree 请求检查器: 服务器推送事件流，每个事件带到达时间和大小',
      },
    ],
  },

  platforms: {
    kicker: '平台',
    title: '该下哪个包',
    body: '所有包都来自同一个标签、同一个内核。Android 是手机应用，桌面包把整套界面放在你的机器上运行。',
    items: [
      {
        icon: 'i-simple-icons-android',
        name: 'Android',
        body: '全局隧道的 VpnService、六个 Compose 标签页、重启后自动重连，以及 Tasker 自动化。',
        points: ['最新版本里的 APK', 'minSdk 24 · arm64、armv7、x86_64', '不需要 root'],
      },
      {
        icon: 'i-simple-icons-windows',
        name: 'Windows',
        body: '同一个内核放进桌面窗口。DNS 按网卡重定向，关掉窗口后托盘让它继续运行。',
        points: ['x64 与 arm64 的 MSI', '按网卡重定向 DNS', '托盘与开机启动'],
      },
      {
        icon: 'i-simple-icons-linux',
        name: 'Linux',
        body: 'deb、rpm 或 Arch 包，整套界面跑在宿主机的 JVM 上。允许后 CA 会进发行版的信任库。',
        points: ['deb、rpm 和 pkg.tar.zst', 'Debian、Ubuntu、Fedora、Arch、CachyOS', '只有 CA 用 pkexec'],
      },
    ],
    getBuild: '下载',
  },
  download: {
    title: '下载',
    body:
      '下面的文件来自 CI 从标签发布的最新版本。选你的平台即可；每个包里都自带运行环境。',
    note: '不需要账号，也不用注册。',
    install: {
      label: 'Linux 一行命令安装',
      body:
        '脚本问的是包管理器，而不是发行版名字：Debian、Ubuntu、Mint、Pop 上装 deb，Fedora、openSUSE 上装 rpm，Arch、CachyOS、EndeavourOS、Manjaro 上装 pkg.tar.zst，最后展开到 /opt/adfree。',
      copy: '复制',
      copied: '已复制',
    },
    release: {
      loading: '正在从 GitHub 读取最新版本…',
      error: '读不到发布列表。同样的文件在发布页上。',
      retry: '重试',
      all: '全部版本',
      latest: '最新版本',
      size: '大小',
    },
  },
  sponsor: {
    kicker: '赞助',
    title: '请我喝杯咖啡',
    body: 'AdFree 免费，没有广告也没有付费版。如果它对你有点用，下面三种方式都可以。',
    kofi: {
      title: 'Ko-fi',
      body: '一次或每月，信用卡或 PayPal。',
      action: '打开 Ko-fi',
    },
    momo: {
      title: 'MoMo',
      body: '在越南境内用电子钱包更方便。',
      action: '打开 MoMo',
    },
    bank: {
      title: '银行转账',
      body: '转到 BVBank 的账户，任何银行 App 都能转。境外请用 SWIFT。',
      account: '账号',
      holder: '户名',
      bankName: '银行',
      swift: 'SWIFT',
      address: '支行',
      copy: '复制',
      copied: '已复制',
      action: '复制账号',
    },
    note: '赞助与否，每个人拿到的版本都一样。',
  },
  faq: {
    kicker: '常见问题',
    title: '问题',
    body: '较长的说明在 DESIGN.md 里。',
    design: '读设计说明',
    items: [
      {
        label: 'AdFree 是 VPN 吗',
        icon: 'i-lucide-shield-question',
        content:
          '它用 Android 的 VpnService 做隧道，但没有出口服务器：数据包在手机本地被过滤后照常发出。',
      },
      {
        label: '需要 root 吗',
        icon: 'i-lucide-key-round',
        content:
          '不需要。Android 用 VpnService。桌面版的 DNS 重定向在你允许时添加，监听关闭时删除，所以退出 AdFree 规则也跟着走。',
      },
      {
        label: 'HTTPS 过滤需要证书吗',
        icon: 'i-lucide-badge-check',
        content:
          '需要，而且在你装上本地 CA 之前它是关的。系统不信任这张证书时，引擎只转发不过滤，应用会告诉你它找到了哪个信任库。',
      },
      {
        label: '有什么会离开设备吗',
        icon: 'i-lucide-cloud-off',
        content:
          '没有。没有后端也没有 API key，应用不向任何地方发送数据。过滤列表从你选的网址或文件更新，请求日志留在 SQLite 里，自动化令牌不会写进备份。',
      },
      {
        label: '和 DNS 拦截器有什么不同',
        icon: 'i-lucide-git-compare',
        content:
          'DNS 只是一层。AdFree 还会终结 TLS、改写 HTML、执行外观规则和用户脚本、按应用下发规则，并做那十四项隐私改动。',
      },
      {
        label: '免费吗',
        icon: 'i-lucide-gift',
        content: '免费。源码在 GitHub 上，每个版本都能不注册直接下载。',
      },
    ],
  },
  footer: {
    blurb: '在你自己的设备上运行的广告与跟踪器拦截器。不收集数据。',
    disclaimer: 'AdFree 是独立项目，与 AdGuard 或其他拦截器厂商无关。',
    product: '产品',
    project: '项目',
    changelog: '更新日志',
    design: '设计说明',
    source: '源码',
    releases: '发布',
    issues: '问题',
    madeWith: '用开源软件做成',
    rights: 'Tachibana Shin',
  },
  changelog: {
    title: '更新日志',
    body: '每一次发布，就按提交本来的样子。直接从 GitHub 上的应用仓库读取。',
    back: '回到首页',
    loading: '正在读取更新日志…',
    onGithub: '在 GitHub 上打开',
    error: '读不到更新日志。',
    empty: '还没有发布。',
  },
  install: {
    kicker: '在浏览器里，只需一次',
    title: '安装扩展',
    body: '浏览器只在你要求时安装扩展。下面是四步的一次性操作，以后更新会自动到达。',
    steps: [
      { title: '下载最新的发布', body: '发布里有两个压缩包：一个给 chrome，一个给 firefox。每个都包含整个扩展：一份 manifest、一个后台脚本、四个图标。' },
      { title: '解压到一个你会保留的位置', body: '放在主目录下的文件夹即可。Chrome 每次启动都会读它，请保留。' },
      { title: '打开 chrome://extensions，开启开发者模式', body: '开关在右上角。' },
      { title: '点“加载已解压的扩展程序”，选中那个文件夹', body: '卡片出现时开关已经打开。想在工具栏看到它，就从拼图菜单里固定。' },
    ],
    shots: [
      { loadAlt: '英文、浅色主题的 chrome://extensions，开发者模式已开启', installedAlt: '', caption: '开发者模式已开启，可以加载了。' },
      { loadAlt: '', installedAlt: 'AdFree page runtime 0.2.0 的卡片，处于启用状态', caption: '加载之后出现的卡片，已启用。' },
    ],
    download: '下载最新发布',
    source: '阅读源码',
    note: 'Chrome、Edge、Brave、Opera 和 Vivaldi 用 chrome 包。Firefox 在 about:debugging 里加载 firefox 包中的 manifest.json，关闭 Firefox 后失效。截图来自 Chrome。',
    back: '回到首页',
  },
}
