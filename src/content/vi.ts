import type { Copy } from './types'

// Câu ngắn, nói việc nó làm. Trang này để người ta quyết định có cài hay không,
// không phải bài ra mắt: nói nó chặn gì, cần gì, không gửi gì đi, hết.
export const vi: Copy = {
  name: 'Tiếng Việt',
  nav: {
    features: 'Tính năng',
    how: 'Cách chặn',
    screenshots: 'Ảnh chụp',
    platforms: 'Nền tảng',
    changelog: 'Nhật ký',
    faq: 'Hỏi đáp',
  },
  cta: {
    download: 'Tải về',
    howItWorks: 'Xem cách chặn',
    getBuild: 'Tải về',
    latestRelease: 'Bản mới nhất',
    source: 'Tự dựng từ mã nguồn',
  },
  hero: {
    badge: 'Mã nguồn mở · Không theo dõi',
    lead: 'Chặn quảng cáo và theo dõi',
    accent: 'ngay trên máy bạn.',
    body:
      'AdFree chạy trên điện thoại hoặc máy tính của bạn. Ứng dụng xử lý truy vấn DNS, lọc HTTPS khi bạn cài chứng chỉ, và xóa phần quảng cáo còn sót trên trang. Không tài khoản, không máy chủ, không gửi gì đi.',
    notes: ['Android, Windows, Linux', 'Quyền riêng tư'],
  },
  trust: [
    {
      icon: 'i-lucide-smartphone',
      title: 'Chạy trên máy',
      body: 'Việc lọc diễn ra tại máy. Một yêu cầu bị chặn không đi ra ngoài.',
    },
    {
      icon: 'i-lucide-eye-off',
      title: 'Không telemetry',
      body: 'Không phân tích, không báo lỗi, không tài khoản. Nhật ký yêu cầu là một tệp SQLite trên máy.',
    },
    {
      icon: 'i-lucide-cpu',
      title: 'Dựa trên adblock của Brave',
      body: 'Bộ lọc của Brave, gọi từ Kotlin qua uniffi. Điện thoại và máy tính chạy cùng một bộ máy.',
    },
    {
      icon: 'i-simple-icons-github',
      title: 'Mã nguồn mở',
      body: 'Luật lọc, bài kiểm thử và bản dựng phát hành đều nằm trong kho mã.',
    },
  ],
  how: {
    kicker: 'Cách chặn',
    title: 'Ba lớp, lớp nào cũng tùy chọn',
    body:
      'DNS được trả lời trước vì đó là cách chặn rẻ nhất. HTTPS và lọc trong trang còn tắt cho tới khi bạn bật.',
    steps: [
      {
        step: '01',
        icon: 'i-lucide-globe',
        title: 'DNS',
        body:
          'Tên miền bị chặn nhận NXDOMAIN hoặc 0.0.0.0 từ bộ trả lời cục bộ, nên kết nối không bao giờ được mở và không tốn dữ liệu.',
      },
      {
        step: '02',
        icon: 'i-lucide-lock-keyhole',
        title: 'HTTPS',
        body:
          'Mặc định tắt. Khi đã cài CA cục bộ, cổng 443 được kết thúc, HTML được viết lại và chèn script. Không có CA thì nó chỉ chuyển tiếp.',
      },
      {
        step: '03',
        icon: 'i-lucide-wand-sparkles',
        title: 'Trong trang',
        body: 'Luật giao diện, scriptlet và userscript xóa cái khung trống mà quảng cáo để lại.',
      },
    ],
  },
  features: {
    kicker: 'Tính năng',
    title: 'Nó làm được gì',
    body:
      'Một bộ máy lọc đọc cả yêu cầu, phản hồi và trang web, không phải trình chặn DNS có thêm công tắc.',
    items: [
      {
        icon: 'i-lucide-network',
        title: 'VPN toàn luồng',
        body:
          'TCP trên mọi cổng được chuyển tiếp, UDP không phải DNS đi qua NAT trong không gian người dùng. QUIC và DoT bị bỏ để ứng dụng quay về TCP, loại lọc được.',
      },
      {
        icon: 'i-lucide-layers',
        title: 'Luật AdGuard, EasyList và uBO',
        body:
          'adblock-rust lo phần so khớp, cộng các bổ nghĩa nội dung mà crate thiếu: $$ và ##^ lọc HTML, $jsonprune, $hls, mặt nạ $path và $url.',
      },
      {
        icon: 'i-lucide-layout-grid',
        title: 'Luật theo ứng dụng',
        body: 'Thu hẹp một luật cho một ứng dụng bằng $app, hoặc cho ứng dụng đi vòng đường hầm ở tab Apps.',
      },
      {
        icon: 'i-lucide-eye-off',
        title: 'Chống theo dõi',
        body:
          'Một công tắc cho mười bốn thay đổi: header và cookie, API trình duyệt, chia nhỏ bắt tay chống DPI, và che IP. Ba mức ghi mười hai thay đổi cùng lúc.',
      },
      {
        icon: 'i-lucide-code-2',
        title: 'Lọc giao diện và userscript',
        body:
          'Môi trường chạy trong trang với @require và một tập con an toàn của GM API, để sửa một trang hỏng mà không phải dựng lại ứng dụng.',
      },
      {
        icon: 'i-lucide-zap',
        title: 'Lọc thông minh',
        body:
          'Tùy chọn. Một máy chủ bị chặn bảy lần trong mười giây sẽ được cho qua một phút để ứng dụng thôi thử lại. Mặc định tắt.',
      },
      {
        icon: 'i-lucide-building-2',
        title: 'Phân tích theo công ty',
        body:
          'Thống kê nhóm lưu lượng bị chặn theo tên miền, kèm công ty, dịch vụ và hạng mục lấy từ danh sách tracker của AdGuard và Ghostery TrackerDB.',
      },
      {
        icon: 'i-lucide-flask-conical',
        title: 'Security Lab',
        body:
          'Kiểm tra ngoại tuyến, không gọi mạng. Khi danh sách bảo mật chặn một tên miền, một thông báo mở nhật ký đã lọc sẵn theo tên đó.',
      },
      {
        icon: 'i-lucide-bot',
        title: 'Tự động hóa',
        body:
          'Tasker bật/tắt bảo vệ qua receiver được xuất ra. Cổng này đóng cho tới khi bạn mở, và cần token của máy đó.',
      },
    ],
  },
  numbers: [
    { value: '0', label: 'máy chủ của chúng tôi' },
    { value: '14', label: 'thay đổi riêng tư' },
    { value: '3', label: 'mức bảo vệ' },
    { value: '1', label: 'lõi Rust' },
  ],
  proof: {
    kicker: 'Bài kiểm tra bên thứ ba',
    title: 'Chặn 123 trong 130 yêu cầu',
    link: 'adblock.turtlecute.org',
    bodyRest:
      'gửi 130 yêu cầu quảng cáo và theo dõi đã biết rồi đếm xem bao nhiêu không tới. AdFree chặn 123 yêu cầu, 95%, trên cả điện thoại và máy tính, khi tắt lọc HTTPS — nên từng yêu cầu bị từ chối theo tên miền chứ không nhờ chứng chỉ bị viết lại.',
    phoneAlt: 'AdFree đạt 95% trên adblock.turtlecute.org trong Chrome trên Android',
    desktopAlt: 'AdFree đạt 95% trên adblock.turtlecute.org trong trình duyệt máy tính',
    cards: [
      { value: '95%', label: 'điểm' },
      { value: '123', label: 'yêu cầu bị chặn' },
      { value: '0', label: 'chứng chỉ bị viết lại' },
    ],
    runTest: 'Tự chạy bài kiểm tra',
    getBuild: 'Tải về',
  },
  youtube: {
    kicker: 'YouTube',
    title: 'Video chạy, quảng cáo không tới',
    body:
      'AdFree bỏ các vị trí quảng cáo khỏi phản hồi của trình phát trước khi trang kịp đọc, và chặn luôn những request YouTube dùng để đếm với bán quảng cáo. Không phải bấm bỏ qua, không cần cài extension.',
    points: [
      'Quảng cáo trước, giữa video và bumper không vào được trình phát',
      'Thẻ được tài trợ trong tìm kiếm và ở trang chủ bị loại bỏ',
      'Vẫn bộ lọc đó, chặn luôn các request quảng cáo ở tầng mạng',
    ],
    alt: 'YouTube phát bài 一番の宝物 của LiSA không có quảng cáo, qua bộ lọc AdFree',
    caption: 'YouTube qua AdFree: một video, không có đoạn quảng cáo nào.',
  },
  extension: {
    kicker: 'Trong trình duyệt',
    title: 'Những trang AdFree không nhìn thấy',
    body: 'Trình duyệt có thể tự trả lời một trang từ cache của nó: service worker đưa ra HTML chưa từng đi qua dây mạng, nên app không có gì để sửa. Tiện ích bịt đúng chỗ đó — và nó không mang luật nào cả: không danh sách, không quy tắc riêng. Nó hỏi app xem cần chèn gì rồi chèn y như vậy, nên cả hai đường đều chặn cùng một thứ.',
    points: [
      'Chạy được trên trang mà service worker trả từ cache',
      'Không có luật riêng: mọi câu trả lời đến từ app',
      'App tự cài, không cần bật developer mode, không cần chọn thư mục',
    ],
    download: 'Tải tiện ích',
    note: 'Hoặc tải file zip, 20 KB',
    cardName: 'AdFree page runtime',
    cardVersion: 'Manifest V3 · Chrome 111+ · cả Edge, Brave, Opera',
    steps: [
      'Trong app: Extensions → Install for this browser',
      'App ký một bản dựng riêng cho máy này và ghi policy để trình duyệt đọc lúc khởi động',
      'Không phải bấm gì trong chrome://extensions: trình duyệt tự lấy tiện ích từ app',
    ],
    footnote: 'Ở máy không ghi được policy, app vẫn ghi thư mục chưa đóng gói và hiện đường dẫn kèm đúng một câu lệnh để hoàn tất.',
  },
  shots: {
    kicker: 'Ảnh chụp',
    title: 'Ứng dụng trên từng nền tảng',
    body:
      'Ảnh chụp từ bản dựng phát hành, không phải ảnh mô phỏng. Ứng dụng điện thoại và bản máy tính dựng cùng những màn hình Compose trên cùng một lõi.',
    platforms: [
      {
        id: 'android',
        label: 'Android',
        icon: 'i-simple-icons-android',
        note: 'Sáu tab qua cầu uniffi: Home, Protection, Apps, Activity, Statistics, Settings.',
      },
      {
        id: 'windows',
        label: 'Windows',
        icon: 'i-simple-icons-windows',
        note:
          'Cùng giao diện đó trong cửa sổ máy tính, DNS chuyển hướng theo từng card mạng, và tray vẫn chạy tiếp.',
      },
      {
        id: 'linux',
        label: 'Linux',
        icon: 'i-simple-icons-linux',
        note:
          'Gói deb, rpm hoặc Arch, giao diện chạy trên JVM của máy, CA được thêm vào kho tin cậy của bản phân phối khi bạn đồng ý.',
      },
    ],
  },
  platforms: {
    kicker: 'Nền tảng',
    title: 'Chọn bản nào',
    body:
      'Mọi bản dựng đều từ cùng một tag và cùng một lõi. Android là ứng dụng điện thoại; gói máy tính chạy toàn bộ giao diện trên máy bạn.',
    items: [
      {
        icon: 'i-simple-icons-android',
        name: 'Android',
        body: 'VpnService toàn luồng, sáu tab Compose, tự kết nối lại sau khi khởi động lại, và tự động hóa bằng Tasker.',
        points: ['APK từ bản mới nhất', 'minSdk 24 · arm64, armv7, x86_64', 'Không cần root'],
      },
      {
        icon: 'i-simple-icons-windows',
        name: 'Windows',
        body:
          'Cùng lõi đó trong một cửa sổ máy tính. DNS chuyển hướng theo từng card mạng, tray giữ nó chạy khi đóng cửa sổ.',
        points: ['MSI cho x64 và arm64', 'Chuyển hướng DNS theo card', 'Tray và tự khởi động'],
      },
      {
        icon: 'i-simple-icons-linux',
        name: 'Linux',
        body:
          'Gói deb, rpm hoặc Arch với toàn bộ giao diện trên JVM của máy. CA vào kho tin cậy của bản phân phối khi bạn đồng ý.',
        points: ['deb, rpm và pkg.tar.zst', 'Debian, Ubuntu, Fedora, Arch, CachyOS', 'pkexec chỉ cho CA'],
      },
    ],
    getBuild: 'Tải về',
  },
  download: {
    title: 'Tải về',
    body:
      'Các tệp dưới đây lấy từ bản phát hành mới nhất, do CI dựng từ tag. Chọn nền tảng của bạn; gói nào cũng kèm sẵn runtime.',
    note: 'Không tài khoản, không đăng ký. Nếu bản dựng không hợp, mã nguồn vẫn ở đó.',
    install: {
      label: 'Cài trên Linux bằng một câu lệnh',
      body:
        'Script hỏi trình quản lý gói cần gì — deb trên Debian, Ubuntu, Mint và Pop, rpm trên Fedora và openSUSE, pkg.tar.zst trên Arch, CachyOS, EndeavourOS và Manjaro — rồi cài vào /opt/adfree.',
      copy: 'Sao chép',
      copied: 'Đã chép',
    },
    release: {
      loading: 'Đang đọc bản phát hành mới nhất từ GitHub…',
      error: 'Không đọc được danh sách phát hành. Trang releases có đúng những tệp đó.',
      retry: 'Thử lại',
      all: 'Tất cả bản phát hành',
      latest: 'Bản mới nhất',
      size: 'dung lượng',
    },
  },
  sponsor: {
    kicker: 'Ủng hộ',
    title: 'Mời mình một ly cà phê',
    body:
      'AdFree miễn phí, không quảng cáo, không có bản trả phí. Nếu bạn thấy nó hữu ích thì ủng hộ mình bằng một trong ba cách dưới đây.',
    kofi: {
      title: 'Ko-fi',
      body: 'Ủng hộ một lần hoặc hàng tháng, bằng thẻ hoặc PayPal.',
      action: 'Mở Ko-fi',
    },
    momo: {
      title: 'MoMo',
      body: 'Dùng ví MoMo, tiện nếu bạn ở Việt Nam.',
      action: 'Mở MoMo',
    },
    bank: {
      title: 'Chuyển khoản',
      body: 'Chuyển vào tài khoản BVBank, ứng dụng ngân hàng nào cũng chuyển được. Từ nước ngoài thì dùng SWIFT.',
      account: 'Số tài khoản',
      holder: 'Chủ tài khoản',
      bankName: 'Ngân hàng',
      swift: 'SWIFT',
      address: 'Chi nhánh',
      copy: 'Sao chép',
      copied: 'Đã chép',
      action: 'Sao chép số tài khoản',
    },
    note: 'Cảm ơn bạn. Ủng hộ không mua được tính năng riêng: bản phát hành vẫn giống nhau cho mọi người.',
  },
  faq: {
    kicker: 'Hỏi đáp',
    title: 'Câu hỏi',
    body: 'Bản trả lời dài nằm trong DESIGN.md.',
    design: 'Đọc ghi chú thiết kế',
    items: [
      {
        label: 'AdFree có phải VPN không?',
        icon: 'i-lucide-shield-question',
        content:
          'Nó dùng VpnService của Android làm đường hầm, nhưng không có máy chủ đầu ra: gói tin được lọc và định tuyến ngay trên máy.',
      },
      {
        label: 'Có cần root không?',
        icon: 'i-lucide-key-round',
        content:
          'Không. Android dùng VpnService. Trên máy tính, DNS chuyển hướng được thêm khi bạn đồng ý và gỡ khi listener đóng, nên thoát AdFree là luật đi theo.',
      },
      {
        label: 'Lọc HTTPS có cần chứng chỉ không?',
        icon: 'i-lucide-badge-check',
        content:
          'Có, và nó tắt cho tới khi bạn cài CA cục bộ. Khi hệ thống không tin cậy CA, bộ máy chuyển tiếp thay vì lọc, và ứng dụng nói rõ nó tìm thấy kho tin cậy nào.',
      },
      {
        label: 'Có gì rời khỏi máy không?',
        icon: 'i-lucide-cloud-off',
        content:
          'Không. Ứng dụng không có backend, không cần API key và không gửi dữ liệu đi đâu. Danh sách lọc cập nhật từ URL hoặc tệp bạn chọn, nhật ký yêu cầu nằm trong SQLite, token tự động hóa không vào bản sao lưu.',
      },
      {
        label: 'Khác gì một trình chặn DNS?',
        icon: 'i-lucide-git-compare',
        content:
          'DNS chỉ là một lớp. AdFree còn kết thúc TLS, viết lại HTML, chạy luật giao diện và userscript, áp luật theo ứng dụng, và thực hiện mười bốn thay đổi riêng tư.',
      },
      {
        label: 'Có miễn phí không?',
        icon: 'i-lucide-gift',
        content: 'Có. Mã nguồn trên GitHub và mọi bản phát hành đều tải được, không cần tài khoản.',
      },
    ],
  },
  footer: {
    blurb:
      'Trình chặn quảng cáo và theo dõi chạy trên máy của bạn. Không thu thập dữ liệu.',
    disclaimer: 'AdFree là dự án độc lập, không liên quan tới AdGuard hay nhà cung cấp trình chặn nào khác.',
    product: 'Sản phẩm',
    project: 'Dự án',
    changelog: 'Nhật ký thay đổi',
    design: 'Ghi chú thiết kế',
    source: 'Mã nguồn',
    releases: 'Bản phát hành',
    issues: 'Vấn đề',
    madeWith: 'Làm bằng mã nguồn mở',
    rights: 'Tachibana Shin',
  },
  changelog: {
    title: 'Nhật ký thay đổi',
    body: 'Từng bản phát hành, do chính các commit viết nên. Tệp được đọc và hiển thị tại đây, không mở URL thô.',
    back: 'Về trang chính',
    loading: 'Đang tải nhật ký…',
    error: 'Không tải được nhật ký thay đổi.',
    empty: 'Chưa có bản phát hành nào.',
  },
}