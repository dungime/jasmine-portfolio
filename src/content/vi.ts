// Vietnamese copy. Each section is typed against its English counterpart in
// en.ts, so a missing or misspelled field is a type error. Ids, hrefs, image
// paths and tech names stay the same across locales.

import type * as en from './en';

export const site: typeof en.site = {
  name: 'Jasmine',
  role: 'Frontend Developer',
  logo: 'J.',
  nav: [
    { label: 'Giới thiệu', href: '#' },
    // { label: 'Công việc', href: '#services' },
    // { label: 'Kỹ năng', href: '#skills' },
    { label: 'Dự án nổi bật', href: '#projects' },
    { label: 'Sự nghiệp', href: '#career-route' },
    { label: 'Liên hệ', href: '#contact' },
  ],
  contactCta: { label: 'Tải CV', href: '/assets/Dung Nguyen - Senior Frontend Developer Resume.pdf' },
};

export const hero: typeof en.hero = {
  badge: 'Portfolio',
  heading: 'Jasmine. - Senior Frontend Engineer',
  subtitle: 'React · TypeScript · Next.js · Làm chủ sản phẩm',
  greeting: 'Xin chào, tôi là Jasmine',
  role: 'Frontend Engineer',
  tagline: 'Xây dựng sản phẩm tốt hơn với frontend engineering hiện đại và phát triển có AI hỗ trợ.',
  description:
    'Tôi xây dựng **các ứng dụng web có khả năng mở rộng, dễ bảo trì** với React, TypeScript và Next.js — kết hợp hơn 10 năm kinh nghiệm frontend engineering với phát triển có AI hỗ trợ để tăng tốc triển khai, cải thiện quy trình và mang đến phần mềm ổn định.',
  tags: ['React', 'TypeScript', 'Next.js', 'Phát triển có AI hỗ trợ'],
  primaryCta: { label: 'Xem dự án', href: '#projects' },
  secondaryCta: { label: 'Liên hệ', href: '#contact' },
  stats: [
    { value: '10+', label: 'Năm kinh nghiệm' },
    { value: '30+', label: 'Dự án đã triển khai' },
  ],
  scrollLabel: 'Tìm hiểu thêm',
};

export const stats: typeof en.stats = {
  items: [
    { value: '10+', label: 'Năm kinh nghiệm', detail: 'Từ năm 2014' },
    { value: '4', label: 'Thực tập sinh đã hướng dẫn', detail: 'Hướng dẫn 4 thực tập sinh frontend.' },
    { value: '30+', label: 'Dự án đã triển khai', detail: 'E-commerce · E-learning · ERP · Fintech · Shopify' },
    { value: '∞', label: 'Đam mê xây dựng sản phẩm', detail: 'Vẫn tò mò. Vẫn tiếp tục xây dựng.' },
  ],
};

export const mission: typeof en.mission = {
  badge: 'Sứ mệnh',
  heading: 'Tôi xây dựng sản phẩm đơn giản, nhanh và bền vững',
  body: 'Giờ đây tôi mong muốn mang bề dày kinh nghiệm này vào một team nơi tôi có thể **làm chủ sâu hơn** kiến trúc frontend và đóng góp vào **sự phát triển lâu dài của sản phẩm** — lý tưởng nhất là ở một **công ty làm sản phẩm**, dù tôi cũng sẵn sàng với những cơ hội tốt ở môi trường khác.',
  imageAlt: 'Đang làm việc trên một dự án',
};

export const services: typeof en.services = {
  badge: 'Trọng tâm',
  heading: 'Những việc tôi thích làm',
  subheading: 'Những bài toán, sản phẩm và công việc tôi thích dành thời gian cho chúng.',
  items: [
    {
      icon: 'code',
      title: 'Bài toán frontend phức tạp',
      description:
        'Tôi thích biến những yêu cầu phức tạp thành giao diện dễ hiểu và dễ sử dụng hơn.',
      href: undefined,
      highlight: undefined,
    },
    {
      icon: 'rocket',
      title: 'Làm chủ sản phẩm',
      description:
        'Tôi muốn tham gia nhiều hơn việc chỉ viết code — hiểu vấn đề, tìm ra giải pháp và theo tính năng đến tận production.',
      href: undefined,
      highlight: undefined,
    },
    {
      icon: 'people',
      title: 'Học hỏi & chia sẻ',
      description:
        'Tôi thích học những điều mới và chia sẻ những gì mình biết với các developer khác.',
      href: undefined,
      highlight: undefined,
    },
  ],
};

export const skills: typeof en.skills = {
  badge: 'Kỹ năng',
  heading: 'Kỹ năng chuyên môn',
  items: [
    {
      icon: 'code',
      category: 'Chuyên môn chính',
      highlight: true,
      technologies: ['React', 'TypeScript', 'Next.js'],
    },
    {
      icon: 'database',
      category: 'Quản lý state',
      technologies: ['React Query', 'SWR', 'Redux', 'Jotai', 'REST APIs'],
    },
    {
      icon: 'palette',
      category: 'UI & Styling',
      technologies: ['Ant Design', 'Material UI', 'Tailwind CSS', 'CSS Modules'],
    },
    {
      icon: 'server',
      category: 'Khác',
      technologies: [
        'ViteJS',
        'Turborepo',
        'React Native',
        'jQuery',
        'Shopify Liquid',
        'Odoo ERP',
        'Bootstrap',
      ],
    },
  ],
};

export const projects: typeof en.projects = {
  badge: 'Dự án tiêu biểu',
  heading: 'Dự án nổi bật',
  subheading: 'Một vài sản phẩm tôi đã xây dựng và phát hành gần đây.',
  items: [
    {
      id: 'nexstox-nxmarket',
      title: 'Nền tảng giao dịch NexStox & NXMarket',
      subtitle: 'Nền tảng giao dịch & staking fintech',
      category: 'Fintech',
      description:
        'Frontend developer duy nhất cho hai nền tảng fintech trong 3 tháng đầu, triển khai staking, Launchpad và một nền tảng mới, đồng thời ổn định các luồng giao dịch quan trọng.',
      role: 'Tôi là frontend developer duy nhất của cả hai nền tảng trong ba tháng đầu, tự đọc tài liệu sản phẩm, thiết kế UI và tài liệu API để xác định phạm vi và triển khai tính năng, đồng thời làm rõ yêu cầu với team khi cần.',
      built: [
        'Phát triển và bàn giao **tính năng staking** gồm quy tắc staking, phần thưởng staking đơn và kép, stake, unstake, stake thêm và luồng phạt',
        'Xây dựng **tính năng Launchpad** hiển thị thông tin dự án và xử lý giao dịch mua Launchpad',
        'Phát triển **một nền tảng mới dựa trên sản phẩm hiện có**, điều chỉnh các chức năng cốt lõi cho phù hợp',
        'Triển khai UI mới, **luồng đăng ký và KYC**',
        'Triển khai **giao diện đa ngôn ngữ** hỗ trợ nhiều ngôn ngữ trên toàn nền tảng',
        'Xử lý các lỗi nghiêm trọng trên giao diện sàn giao dịch mới và cải thiện độ ổn định của các luồng giao dịch chính',
      ],
      tags: ['React', 'TypeScript', 'Material UI', 'REST APIs', 'Real-time Data'],
      thumbnail: '/assets/images/thumb-trading.webp',
    },
    {
      id: 'e-learning-platform',
      title: 'Nền tảng E-Learning',
      subtitle: 'Nền tảng quản lý học tập',
      category: 'Giáo dục',
      description:
        'Nền tảng học tập mà tôi dựng monorepo từ đầu và xây dựng trải nghiệm học của học viên, bao gồm phát video, thông báo real-time và hệ thống bình luận trực tiếp.',
      role: 'Tôi chịu trách nhiệm kiến trúc frontend của nền tảng từ con số không, bao gồm thiết lập monorepo, và xây dựng các tính năng học tập cốt lõi cũng như tính năng tương tác real-time.',
      built: [
        'Thiết lập **toàn bộ kiến trúc monorepo từ đầu** cho nền tảng',
        'Xây dựng trải nghiệm học của học viên với **trình phát video, chế độ sách, phụ đề, chương, trang và đánh dấu trang**',
        'Phát triển **tính năng thông báo real-time**, bao gồm tương tác với thông báo và bình luận',
        'Xây dựng **hệ thống bình luận real-time** hỗ trợ bình luận, thích và phản hồi một cấp từ giáo viên',
        'Tích hợp **REST API và luồng dữ liệu real-time** để đồng bộ hoạt động học tập và tương tác',
      ],
      tags: ['React', 'TypeScript', 'Next.js', 'Ant Design', 'Jotai', 'REST APIs', 'Real-time Data'],
      thumbnail: '/assets/images/thumb-elearning.png',
    },
    {
      id: 'cleaning-services-dashboard',
      title: 'Dashboard dịch vụ vệ sinh',
      subtitle: 'Nền tảng quản lý vận hành',
      description:
        'Nền tảng quản trị cho hoạt động dịch vụ vệ sinh, bao gồm yêu cầu dịch vụ, bảo trì, báo cáo và kho hàng.',
      screenshots: [
        '/assets/images/projects/cleaning/dashboard-workflow.jpg',
        '/assets/images/projects/cleaning/stock-details.jpg',
        '/assets/images/projects/cleaning/cleaning-calendar.jpg',
      ],
      contributions: [
        'Thiết lập **toàn bộ kiến trúc từ đầu**',
        'Phát triển **luồng CRUD end-to-end** cho yêu cầu vệ sinh, bảo trì, báo cáo và kho hàng',
        'Xây dựng giao diện dữ liệu phức tạp kết hợp **lịch tương tác, bảng, biểu đồ, drawer và tree view**',
        'Phát triển **form tạo mới phức tạp** để quản lý quy trình vận hành và dữ liệu nghiệp vụ',
      ],
      tags: ['React', 'TypeScript', 'Ant Design', 'Jotai', 'Vite', 'Turborepo', 'REST APIs'],
      thumbnail: '/assets/images/thumb-cleaning.png',
    },
    {
      id: 'aimee-by-j',
      title: 'Aimee by J — Nền tảng Ecommerce Headless',
      subtitle: 'Thời trang Việt Nam · Đang phát triển',
      category: 'Ecommerce',
      description:
        'Dự án độc lập xây lại từ đầu một storefront ecommerce headless cho thương hiệu thời trang Việt Nam, kết hợp backend Medusa v2 với storefront Next.js 16 — đang trong quá trình phát triển.',
      role: 'Tôi là developer và người kiến trúc duy nhất của dự án độc lập này, chịu trách nhiệm toàn bộ các tầng: kiến trúc backend/storefront, tầng data API có type, chiến lược render, và lộ trình triển khai, bao gồm nghiên cứu tích hợp thanh toán đặc thù thị trường Việt Nam.',
      built: [
        'Thiết kế kiến trúc headless commerce tách biệt hoàn toàn — storefront Next.js 16 gọi backend Medusa v2 thuần qua REST API, cho phép hai phía phát triển độc lập',
        'Xây dựng tầng data HTTP có type, generic, dựa trên **kiểu Result dạng discriminated union** thay cho exception — đảm bảo response lỗi hoặc rỗng không bao giờ làm hỏng render trang một cách âm thầm',
        'Chẩn đoán và sửa lỗi build production bằng cách xác định đúng **ranh giới static-vs-dynamic rendering** của Next.js, chuyển một route phụ thuộc backend từ prerender tĩnh lúc build sang render theo request',
        'Lên kế hoạch thanh toán đặc thù thị trường Việt Nam, gồm **thanh toán khi nhận hàng (COD) và payment provider tuỳ chỉnh PayOS/VNPay** trên kiến trúc payment mở rộng của Medusa',
        'Vạch lộ trình triển khai đầy đủ — tầng data, design system, catalog, giỏ hàng, checkout, tài khoản, thanh toán nội địa — với **mốc rõ ràng theo từng giai đoạn và ước lượng thời gian thực tế**',
        'Xác định chiến lược test xuyên suốt dự án: **Vitest** cho tầng data, **React Testing Library** cho component tương tác, **Playwright** dành cho luồng end-to-end quan trọng',
      ],
      tags: ['Next.js', 'TypeScript', 'Medusa', 'PostgreSQL', 'Tailwind CSS', 'Turborepo', 'REST APIs'],
    },
  ],
};

export const careerRoute: typeof en.careerRoute = {
  badge: 'Sự nghiệp',
  heading: 'Hành trình phát triển và tạo giá trị',
  subheading: 'Từ học những điều cơ bản đến làm chủ các sản phẩm phức tạp.',
  quote: [
    'Mỗi chặng đường đã định hình con người và developer tôi của hôm nay.',
    'Tôi háo hức với chặng tiếp theo của hành trình.',
  ],
  footnote: 'Nhấn vào từng chặng để xem thêm chi tiết và các dự án tiêu biểu.',
  stations: [
    {
      id: 'ticketbox',
      number: '01',
      icon: 'ticket',
      stage: 'Làm việc trong team sản phẩm',
      category: 'Nền tảng bán vé',
      company: 'TicketBox',
      website: 'https://ticketbox.vn/',
      period: '05/2016 – 12/2017',
      role: 'Junior Frontend Developer',
      team: '3 FE · 8–14 thành viên',
      description:
        'Lần đầu làm việc trong một team sản phẩm đa chức năng, phối hợp với Design về chi tiết UI, với Backend về API contract và với Business về độ ưu tiên tính năng theo quy trình Agile.',
      learned: [
        'Xây dựng trang sự kiện bằng CSS3, Vanilla JavaScript và jQuery',
        'Làm landing page sự kiện, trang chi tiết sự kiện và luồng đặt vé',
        'Học các thực hành Agile gồm ước lượng, stand-up, sprint planning và retrospective',
        'Phối hợp chặt chẽ với các team Design, Backend, Mobile và Business',
        'Làm việc với các team Design, Backend, Mobile và Business trong môi trường Agile.',
      ],
      contributions: [
        'Phối hợp với team design và business để ra mắt 6+ landing page sự kiện.',
        'Xây dựng trang chi tiết sự kiện với UI hiện đại và hiệu ứng khi cuộn.',
        'Phát triển trang sự kiện và trải nghiệm đặt vé bằng Angular, CSS3, Vanilla JavaScript và jQuery.',
      ],
      tech: [
        'HTML5',
        'CSS3',
        'JavaScript (ES5)',
        'jQuery',
        'AngularJS 2',
        'Bootstrap',
        'REST APIs',
      ],
    },
    {
      id: 'pure-projects',
      number: '02',
      icon: 'code',
      stage: 'Tự chủ triển khai',
      category: 'Nền tảng quản lý xây dựng',
      company: 'Pure Projects',
      website: 'https://www.puregrp.au/',
      period: '01/2018 – 10/2018',
      role: 'Junior/Mid-level Frontend Developer',
      team: '3 FE',
      description:
        'Một chặng ngắn nhưng giá trị, nơi tôi bắt đầu làm chủ trọn vẹn các tính năng frontend và làm việc sát với QA trong suốt quá trình phát triển.',
      learned: [
        'Thực hành Vanilla JavaScript trong môi trường production',
        'Làm việc sát với QA để phát hiện và xử lý lỗi',
        'Học cách xử lý các tính năng liên quan đến tích hợp API và quản lý dữ liệu',
      ],
      contributions: [
        'Xây dựng tính năng production bằng HTML, CSS và Vanilla JavaScript',
        'Triển khai các tính năng dùng API với phân trang, lọc và form chỉnh sửa',
        'Làm việc sát với QA trong suốt quá trình phát triển và phát hành để đảm bảo chất lượng.',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript (ES5 + ES6)', 'Bootstrap', 'REST APIs'],
    },
    {
      id: 'lecle',
      number: '03',
      icon: 'people',
      stage: 'Mở rộng & dẫn dắt',
      category: 'Outsourcing',
      company: 'Lecle Vietnam',
      website: 'https://www.lecle.vn/',
      period: '03/2019 – 05/2025',
      role: 'Frontend Developer',
      team: '5–15 FE',
      description:
        'Giai đoạn phát triển nhanh trong sự nghiệp, khi tôi chuyển từ bàn giao từng tính năng sang tự làm chủ cả dự án. Làm việc với nhiều ngành và loại sản phẩm khác nhau cho tôi góc nhìn rộng hơn về phát triển frontend.',
      learned: [
        'Được tin tưởng tự làm chủ dự án, từ khởi tạo đến bàn giao',
        'Học cách cấu hình dự án từ đầu và chọn technology stack phù hợp',
        'Làm việc với nhiều loại sản phẩm, gồm ERP, thương mại điện tử, admin dashboard và Shopify theme',
        'Nâng cao kỹ năng giải quyết vấn đề, giao tiếp và làm chủ dự án',
      ],
      contributions: [
        'Triển khai 30+ dự án trong các lĩnh vực e-commerce, e-learning, ERP, admin dashboard và Shopify.',
        'Cấu hình dự án từ đầu và đưa ra quyết định về công nghệ, kiến trúc frontend.',
        'Xây dựng giao diện dữ liệu phức tạp, gồm lịch tương tác, bảng, biểu đồ và form tạo/sửa, cho admin dashboard quản lý vận hành dịch vụ vệ sinh.',
        'Xây dựng các tính năng học tập cốt lõi, gồm trình phát video, chế độ slide/sách, phụ đề, chương, điều hướng trang và đánh dấu trang.',
        'Làm chủ phần frontend của một nền tảng e-learning dựa trên Odoo, đảm nhận toàn bộ việc phát triển frontend.',
        'Hướng dẫn 5 frontend developer fresher, tham gia code review và onboarding.',
      ],
      tech: [
        'React',
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'CSS Modules',
        'Styled-components',
        'React Query',
        'SWR',
        'Jotai',
        'Redux',
        'Rematch',
        'Vite',
        'Turborepo',
        'REST APIs',
        'Shopify Liquid',
        'React Native',
      ],
    },
    {
      id: 'nexstox',
      number: '04',
      icon: 'rocket',
      stage: 'Làm chủ sản phẩm',
      category: 'Nền tảng giao dịch',
      company: 'Nexstox',
      website: 'https://nxmarket.com/',
      period: '05/2025 – 05/2026',
      role: 'Frontend Developer',
      team: '1–3 FE',
      description:
        'Bước chuyển từ outsourcing sang làm sản phẩm, nơi tôi làm chủ sâu hơn các sản phẩm fintech phức tạp và kiến trúc frontend.',
      learned: [
        'Làm việc với các luồng giao dịch và tài chính phức tạp',
        'Làm chủ nhiều hơn kiến trúc frontend và các quyết định kỹ thuật',
        'Làm việc với dữ liệu real-time và giao diện nặng dữ liệu',
        'Phối hợp chặt chẽ với team product và engineering trong môi trường sản phẩm dài hạn',
      ],
      contributions: [
        'Xây dựng và bảo trì tính năng trên NexStox và NXMarket.',
        'Phát triển các luồng giao dịch, staking, KYC và quản trị phức tạp.',
        'Đóng góp vào kiến trúc frontend, component tái sử dụng và tích hợp API.',
        'Phụ trách deploy FE, đảm bảo phát hành và cập nhật suôn sẻ.',
      ],
      tech: [
        'React',
        'TypeScript',
        'Next.js',
        'Redux Toolkit',
        'Material UI',
        'REST APIs',
        'Real-time Data',
      ],
    },
    {
      id: 'own-product',
      number: '05',
      icon: 'lightbulb',
      stage: 'Xây sản phẩm riêng',
      category: 'Gap Year',
      company: 'Xây dựng sản phẩm của riêng tôi',
      period: '05/2026 – nay',
      role: 'Founder & Developer',
      team: 'Solo',
      description:
        'Một năm gap year có chủ đích để tạm rời công việc cho khách hàng và công ty, tập trung xây dựng sản phẩm của riêng mình — làm chủ mọi tầng, từ kiến trúc backend và storefront đến lộ trình triển khai, chứ không chỉ riêng frontend.',
      learned: [
        'Làm chủ sản phẩm end-to-end, vượt ra ngoài phạm vi frontend',
        'Thiết kế đồng thời kiến trúc backend và storefront',
        'Tự lên phạm vi và lộ trình với vai trò người ra quyết định duy nhất',
      ],
      contributions: [
        'Xây dựng Aimee by J, storefront ecommerce headless cho một thương hiệu thời trang Việt Nam, với storefront Next.js 16 chạy trên backend Medusa v2.',
        'Thiết kế tầng data API có type và chiến lược render cho storefront.',
        'Lên kế hoạch checkout đặc thù thị trường Việt Nam, gồm thanh toán khi nhận hàng (COD) và các cổng thanh toán nội địa.',
        'Tận dụng thời gian để đào sâu kỹ năng backend, kiến trúc và testing song song với frontend.',
      ],
      tech: [
        'Next.js',
        'TypeScript',
        'Medusa',
        'PostgreSQL',
        'Tailwind CSS',
        'Turborepo',
        'REST APIs',
      ],
    },
  ],
};

export const recommendation: typeof en.recommendation = {
  heading: 'Thư giới thiệu từ NexStox',
  // The quote stays in the letter's original English.
  quote:
    'For one person to run an entire department entirely on her own is beyond impressive … when she is given the responsibility she rises to the occasion.',
  author: 'Cathal Donnellan',
  authorTitle: 'President, NexStox Inc.',
  letter: {
    label: 'Toàn văn thư giới thiệu',
    description: 'Xem thư giới thiệu đầy đủ có chữ ký (PDF).',
    href: '/assets/Jasmine Nguyen - Letter of Reference NexStox.pdf',
  },
};

export const experience: typeof en.experience = {
  badge: 'Sự nghiệp',
  heading: 'Kinh nghiệm',
  items: [
    {
      id: 'nexstox',
      period: '05/2025 – 05/2026',
      title: 'Frontend Developer | Nexstox',
      description:
        'Frontend developer duy nhất cho hai nền tảng giao dịch NexStox và NXMarket — bảo trì tính năng sàn giao dịch, triển khai module staking và launchpad cùng các chức năng quản trị, làm chủ kiến trúc và bàn giao end-to-end với rất ít giám sát, đồng thời phối hợp sát với QA trước mỗi lần phát hành.',
      href: 'https://nxmarket.com/',
    },
    {
      id: 'lecle',
      period: '03/2019 – 08/2025',
      note: 'Bán thời gian từ 05/2025',
      title: 'Frontend Developer | Lecle VietNam Jsc.',
      description:
        'Bàn giao 20+ ứng dụng web cho khách hàng quốc tế, gồm admin dashboard, nền tảng thương mại điện tử, công cụ chat real-time, Shopify theme và ứng dụng mobile. Dựng kiến trúc monorepo từ đầu cho một nền tảng gọi video và livestream bằng Turborepo và Vite, xây dựng tính năng phát trực tiếp real-time cho một Trung tâm cộng đồng người cao tuổi bằng Jitsi Meet, và tạo công cụ CLI nội bộ bằng Plop để chuẩn hoá việc khởi tạo dự án. Hướng dẫn developer junior và code review trên nhiều dự án.',
      href: 'https://www.lecle.vn/',
    },
    {
      id: 'pure-projects',
      period: '01/2018 – 10/2018',
      title: 'Frontend Developer | Pure Projects Co. Ltd.',
      description:
        'Phát triển tính năng mới cho ứng dụng quản lý dự án xây dựng, hỗ trợ theo dõi dự án và quản lý nguồn lực, đồng thời xây dựng giao diện responsive, tương thích nhiều trình duyệt bằng HTML5, CSS3, JavaScript và jQuery.',
      href: 'https://www.puregrp.au/',
    },
    {
      id: 'ticketbox',
      period: '05/2016 – 12/2017',
      title: 'Frontend Developer | TicketBox Co. Ltd.',
      description:
        'Phát triển landing page sự kiện và trang Chi tiết sự kiện cho ticketbox.com, một trong những nền tảng bán vé sự kiện hàng đầu Việt Nam, xây dựng component UI tái sử dụng và xử lý lỗi production bằng JavaScript, Bootstrap, jQuery và Angular 2.',
      href: 'https://ticketbox.vn/',
    },
  ],
};

export const education: typeof en.education = {
  badge: 'Nền tảng',
  heading: 'Học vấn',
  items: [
    {
      period: '2010 – 2013',
      school: 'Trường Đại học Khoa học Tự nhiên TP.HCM',
      degree: 'Công nghệ Thông tin',
    },
  ],
};

export const languages: typeof en.languages = {
  badge: 'Ngôn ngữ',
  heading: 'Ngôn ngữ',
  items: [
    { name: 'Tiếng Anh', level: 'Trung cấp, B1-B2' },
    { name: 'Tiếng Việt', level: 'Bản ngữ' },
  ],
};

export const contact: typeof en.contact = {
  badge: 'Liên hệ',
  heading: 'Cùng xây dựng điều tuyệt vời',
  subheading:
    'Tôi luôn sẵn sàng trao đổi về những sản phẩm thú vị, những bài toán frontend thử thách và cơ hội cùng nhau tạo ra trải nghiệm tốt hơn.',
  resumeCta: { label: 'Tải CV', href: '/assets/Dung Nguyen - Senior Frontend Developer Resume.pdf' },
  links: [
    // Rendered in a 2-column grid: phone · email, then GitHub · address.
    { icon: 'phone', label: '0398 060 569', href: 'tel:+84398060569' },
    { icon: 'mail', label: 'dungntp.contact@gmail.com', href: 'mailto:dungntp.contact@gmail.com' },
    { icon: 'github', label: 'GitHub', href: 'https://github.com/dungime' },
    { icon: 'mapPin', label: 'Hồ Chí Minh', href: '' },
  ],
};
