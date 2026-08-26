// Edit this file to customize the site's copy without touching component code.

export const site = {
  name: 'Jasmine',
  role: 'Frontend Developer',
  logo: 'J.',
  nav: [
    { label: 'About', href: '#' },
    // { label: 'What I Do', href: '#services' },
    // { label: 'Skills', href: '#skills' },
    { label: 'Career', href: '#career-route' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  contactCta: { label: 'Download CV', href: '/assets/resume.pdf' },
};

export const hero = {
  badge: 'Portfolio',
  heading: 'Jasmine.',
  subtitle: 'React · TypeScript · Next.js · Owning Products',
  subheading: [
    'Senior Frontend Developer with **10+ years** of experience building production web applications across fintech, e-commerce, admin dashboards, e-learning, and event ticketing',
    'Specialized in **React, TypeScript, and Next.js** — turning complex problems into simple, reliable, and maintainable experiences."',
  ],
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Shipped' },
  ],
  scrollLabel: 'Learn more',
};

export const stats = {
  items: [
    { value: '10+', label: 'Years of Experience' },
    { value: '30+', label: 'Projects Shipped' },
    { value: '5', label: 'Members Mentored' },
    { value: '∞', label: 'Passion for Coding' },
  ],
};

export const mission = {
  badge: 'Mission',
  heading: 'I build products that are simple, fast, and built to last',
  body: 'I’m now looking to bring this breadth of experience into a **product-focused team** where I can take **deeper ownership** of frontend architecture and **contribute to long-term** product growth.',
  imageAlt: 'Working on a project',
};

export const services = {
  badge: 'Focus',
  heading: 'What I enjoy working on',
  subheading:
    'The kind of problems, products, and work I enjoy spending my time on.',
  items: [
    {
      icon: 'code',
      title: 'Complex frontend problems',
      description:
        'I enjoy turning complicated requirements into interfaces that are easier to understand and use.',
      href: undefined,
      highlight: undefined,
    },
    {
      icon: 'rocket',
      title: 'Product ownership',
      description:
        'I like being involved beyond implementation — understanding the problem, figuring out the solution, and seeing the feature through to production.',
      href: undefined,
      highlight: undefined,
    },
    {
      icon: 'people',
      title: 'Learning & sharing',
      description:
        'I enjoy learning new things and sharing what I know with other developers.',
      href: undefined,
      highlight: undefined,
    },
  ],
};

export const skills = {
  badge: 'Skills',
  heading: 'Technical skills',
  items: [
    {
      icon: 'code',
      category: 'Core expertise',
      highlight: true,
      technologies: ['React', 'TypeScript', 'Next.js'],
    },
    {
      icon: 'database',
      category: 'State management',
      technologies: ['React Query', 'SWR', 'Redux', 'Jotai', 'REST APIs'],
    },
    {
      icon: 'palette',
      category: 'UI & Styling',
      technologies: [
        'Ant Design',
        'Material UI',
        'Tailwind CSS',
        'CSS Modules',
      ],
    },
    {
      icon: 'server',
      category: 'Additional',
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

export const projects = {
  badge: 'Selected Work',
  heading: 'Key projects',
  subheading: "A few things I've built and released recently.",
  items: [
    {
      id: 'nexstox-nxmarket',
      title: 'NexStox & NXMarket Trading Platforms',
      subtitle: 'Fintech Trading & Staking Platforms',
      category: 'Fintech',
      company: 'Nexstox',
      companyHref: 'https://nxmarket.com/',
      companyLogo: 'https://nxmarket.com/favicon.ico',
      description:
        'Sole frontend developer for two fintech platforms for the first 3 months, delivering staking, Launchpad, and a new platform build while stabilizing key trading workflows.',
      role: 'I was the sole frontend developer for both platforms during the first three months, independently reviewing product documentation, UI designs, and API documentation to scope and implement features, and clarifying requirements with the team when needed.',
      built: [
        'Developed and delivered **staking features** covering staking rules, single and compound staking rewards, staking, unstaking, stake-more, and penalty flows',
        'Built **Launchpad features** for displaying project information and handling Launchpad purchases',
        'Developed a **new platform based on the existing product**, adapting core functionality for it',
        'Implemented the new UI, **sign-up flow, and KYC flows**',
        'Implemented **multilingual interfaces** to support multiple languages across the platform',
        'Resolved critical issues in the new exchange interface and improved the stability of key trading workflows',
      ],
      tags: [
        'React',
        'TypeScript',
        'Material UI',
        'REST APIs',
        'Real-time Data',
      ],
      thumbnail: '/assets/images/thumb-trading.png',
    },
    {
      id: 'e-learning-platform',
      title: 'E-Learning Platform',
      subtitle: 'Learning Management Platform',
      category: 'Education',
      company: 'Lecle Vietnam',
      companyHref: 'https://www.lecle.vn/',
      companyLogo: 'https://www.lecle.vn/favicon.ico',
      description:
        'A learning platform where I set up the monorepo from scratch and built the student learning experience, including video playback, real-time notifications, and a live commenting system.',
      role: 'I was responsible for the platform’s frontend architecture from the ground up, including the monorepo setup, and for building the core student learning and real-time social features.',
      built: [
        'Set up the **entire monorepo architecture from scratch** for the platform',
        'Built the student learning experience with a **video player, book mode, subtitles, chapters, pages, and bookmarking**',
        'Developed **real-time notification features**, including notification interactions and comments',
        'Built a **real-time commenting system** supporting comments, likes, and one-level teacher replies',
        'Integrated **REST APIs and real-time data flows** to keep learning and social interactions synchronized',
      ],
      highlights: [
        {
          title: 'Monorepo Architecture',
          description:
            'Set up a **reusable monorepo structure from scratch**, sharing configuration and components across the platform.',
        },
        {
          title: 'Learning Experience',
          description:
            'Built the student learning experience around a **video player, book mode, subtitles, chapters, and bookmarking** so learners could pick up right where they left off.',
        },
        {
          title: 'Real-time Interactions',
          description:
            'Built **real-time notifications and a commenting system** with likes and one-level teacher replies, kept in sync via REST APIs and real-time data.',
        },
      ],
      tags: [
        'React',
        'TypeScript',
        'Next.js',
        'Ant Design',
        'Jotai',
        'REST APIs',
        'Real-time Data',
      ],
      thumbnail: '/assets/images/thumb-elearning.png',
    },
    {
      id: 'cleaning-services-dashboard',
      title: 'Cleaning Services Dashboard',
      subtitle: 'Operations Management Platform',
      company: 'Lecle Vietnam',
      companyHref: 'https://www.lecle.vn/',
      companyLogo: 'https://www.lecle.vn/favicon.ico',
      description:
        'An admin platform for managing cleaning service operations, including requests, maintenance, reports, and inventory.',
      screenshots: [
        '/assets/images/projects/cleaning/dashboard-workflow.jpg',
        '/assets/images/projects/cleaning/stock-details.jpg',
        '/assets/images/projects/cleaning/cleaning-calendar.jpg',
      ],
      contributions: [
        'Set up the **entire architecture from scratch**',
        'Developed **end-to-end CRUD workflows** for cleaning requests, maintenance, reports, and inventory',
        'Built complex data-driven interfaces combining **interactive calendars, tables, charts, drawers, and tree views**',
        'Developed **complex creation forms** for managing operational workflows and business data',
      ],
      tags: [
        'React',
        'TypeScript',
        'Ant Design',
        'Jotai',
        'Vite',
        'Turborepo',
        'REST APIs',
      ],
      thumbnail: '/assets/images/thumb-cleaning.png',
    },
  ],
};

export const careerRoute = {
  badge: 'Career',
  heading: 'A journey of growth and impact',
  subheading: 'From learning the fundamentals to owning complex products.',
  quote: [
    'Every station shaped the developer and person I am today.',
    "I'm excited for what's next on the journey.",
  ],
  footnote: 'Click each station to explore more details and selected projects.',
  stations: [
    {
      id: 'aris',
      number: '01',
      icon: 'graduationCap',
      stage: 'Foundation',
      category: 'Outsourcing',
      company: 'Aris Vietnam',
      website: 'https://aris-vn.com',
      period: 'Aug 2014 – May 2016',
      role: 'Junior Frontend Developer',
      team: '3 FE',
      description:
        'My first step into professional frontend development after graduation. I built a strong foundation in frontend development while learning how to work with real clients, production websites, and professional development workflows.',
      learned: [
        'Built a foundation in HTML, CSS, JavaScript, and jQuery',
        'Practiced converting designs into responsive web interfaces',
        'Learned Git, Photoshop, task management, and team communication tools',
        'Adapted from academic projects to real-world production work',
        'Learned professional workflows, including Git, Photoshop, task management, and team communication.',
      ],
      contributions: [
        'Maintained and updated features and content on customer websites.',
        'Fixed UI and functional bugs and supported responsive layouts.',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript (ES5)', 'jQuery', 'Bootstrap'],
    },
    {
      id: 'ticketbox',
      number: '02',
      icon: 'ticket',
      stage: 'Product Collaboration',
      category: 'Ticketing Platform',
      company: 'TicketBox',
      website: 'https://ticketbox.vn/',
      period: 'May 2016 – Dec 2017',
      role: 'Junior Frontend Developer',
      team: '3 FE · 8–14 members',
      description:
        'My first experience working in a cross-functional product team, coordinating with Design on UI details, Backend on API contracts, and Business on feature priorities within an Agile workflow.',
      learned: [
        'Built event pages using CSS3, Vanilla JavaScript, and jQuery',
        'Worked on event landing pages, event details, and ticket booking flows',
        'Learned Agile practices including estimation, stand-ups, sprint planning, and retrospectives',
        'Collaborated closely with Design, Backend, Mobile, and Business teams',
        'Worked with Design, Backend, Mobile, and Business teams in an Agile environment.',
      ],
      contributions: [
        'Collaborated with design and business teams to ship 6+ event landing pages.',
        'Built an event detail page with modern UI and scrolling animations.',
        'Developed event pages and ticket booking experiences using Angular, CSS3, Vanilla JavaScript, and jQuery.',
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
      number: '03',
      icon: 'code',
      stage: 'Independent Delivery',
      category: 'Construction Management Platform',
      company: 'Pure Projects',
      website: 'https://www.puregrp.au/',
      period: 'Jan 2018 – Oct 2018',
      role: 'Junior/Mid-level Frontend Developer',
      team: '3 FE',
      description:
        'A shorter but valuable station where I started taking more ownership of complete frontend features and working closely with QA throughout the development process.',
      learned: [
        'Practiced Vanilla JavaScript in a production environment',
        'Worked closely with QA to identify and resolve issues',
        'Learned to handle features involving API integration and data management',
      ],
      contributions: [
        'Built production features using HTML, CSS, and Vanilla JavaScript',
        'Implemented API-driven features with pagination, filtering, and editing forms',
        'Worked closely with QA throughout development and release to ensure quality.',
      ],
      tech: [
        'HTML5',
        'CSS3',
        'JavaScript (ES5 + ES6)',
        'Bootstrap',
        'REST APIs',
      ],
    },
    {
      id: 'lecle',
      number: '04',
      icon: 'people',
      stage: 'Scale & Leadership',
      category: 'Outsourcing',
      company: 'Lecle Vietnam',
      website: 'https://www.lecle.vn/',
      period: 'March 2019 – May 2025',
      role: 'Frontend Developer',
      team: '5–15 FE',
      description:
        'A fast-growing stage in my career where I moved from delivering individual features to independently owning projects. Working across different industries and product types gave me a broader perspective on frontend development.',
      learned: [
        'Trusted to own projects independently, from setup to delivery',
        'Learned to configure projects from scratch and choose the right technology stack',
        'Worked across different products, including ERP, e-commerce, admin dashboards, and Shopify themes',
        'Developed stronger problem-solving, communication, and project ownership skills',
      ],
      contributions: [
        'Delivered 30+ projects across e-commerce, e-learning, ERP, admin dashboards, and Shopify.',
        'Configured projects from scratch and made frontend technology and architecture decisions.',
        'Built complex data-driven interfaces, including interactive calendars, tables, charts, and create/edit forms, for an admin dashboard managing cleaning service operations.',
        'Built the core user-learning features, including a video player, slide/book mode, subtitles, chapters, page navigation, and bookmarking.',
        'Took ownership of the frontend for an Odoo-based e-learning platform, handling all frontend development.',
        'Mentored 5 fresher frontend developers and contributed to code reviews and onboarding.',
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
      number: '05',
      icon: 'rocket',
      stage: 'Product Ownership',
      category: 'Trading Platform',
      company: 'Nexstox',
      website: 'https://nxmarket.com/',
      period: 'May 2025 – May 2026',
      role: 'Frontend Developer',
      team: '1–3 FE',
      description:
        'My transition from outsourcing to product development, where I took deeper ownership of complex fintech products and frontend architecture.',
      learned: [
        'Worked on complex trading and financial workflows',
        'Took greater ownership of frontend architecture and technical decisions',
        'Worked with real-time data and data-intensive interfaces',
        'Collaborated closely with product and engineering teams in a long-term product environment',
      ],
      contributions: [
        'Built and maintained features across NexStox and NXMarket.',
        'Developed complex trading, staking, KYC, and admin workflows.',
        'Contributed to frontend architecture, reusable components, and API integrations.',
        'Handled FE deployment, ensuring smooth releases and updates.',
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
  ],
};

export const experience = {
  badge: 'Career',
  heading: 'Experience',
  items: [
    {
      id: 'nexstox',
      period: 'May 2025 – May 2026',
      title: 'Frontend Developer | Nexstox',
      description:
        'Sole frontend developer for two trading platforms, NexStox and NXMarket — maintaining exchange features and implementing staking and launchpad modules alongside admin functions, owning architecture and delivery end-to-end with minimal oversight while working closely with QA before releases.',
      href: 'https://nxmarket.com/',
    },
    {
      id: 'lecle',
      period: 'Mar 2019 – Aug 2025',
      note: 'Part-time from May 2025',
      title: 'Frontend Developer | Lecle VietNam Jsc.',
      description:
        "Delivered 20+ web applications for international clients, including admin dashboards, e-commerce platforms, real-time chat tools, Shopify themes, and mobile apps. Architected a video call and broadcasting platform's monorepo from scratch with Turborepo and Vite, built real-time broadcasting features for a Senior Community Center using Jitsi Meet, and created an internal Plop CLI boilerplate generator to standardize project scaffolding. Mentored junior developers and conducted code reviews across multiple projects.",
      href: 'https://www.lecle.vn/',
    },
    {
      id: 'pure-projects',
      period: 'Jan 2018 – Oct 2018',
      title: 'Frontend Developer | Pure Projects Co. Ltd.',
      description:
        'Developed new features for a construction project management application, enabling project tracking and resource management, and built responsive, cross-browser interfaces using HTML5, CSS3, JavaScript, and jQuery.',
      href: 'https://www.puregrp.au/',
    },
    {
      id: 'ticketbox',
      period: 'May 2016 – Dec 2017',
      title: 'Frontend Developer | TicketBox Co. Ltd.',
      description:
        "Developed event landing pages and the Event Detail page for ticketbox.com, one of Vietnam's leading event ticketing platforms, building reusable UI components and resolving production bugs with JavaScript, Bootstrap, jQuery, and Angular 2.",
      href: 'https://ticketbox.vn/',
    },
    {
      id: 'aris',
      period: 'Aug 2014 – May 2016',
      title: 'Frontend Developer | Aris Viet Nam Co. Ltd.',
      description:
        'Built responsive, pixel-perfect websites from Photoshop design mockups with consistent rendering across browsers and devices, implementing interactive UI elements and animations in JavaScript and managing collaborative workflows with Git.',
      href: 'https://aris-vn.com',
    },
  ],
};

export const education = {
  badge: 'Background',
  heading: 'Education',
  items: [
    {
      period: '2010 – 2013',
      school: 'Ho Chi Minh City University of Science',
      degree: 'Information Technology',
    },
  ],
};

export const languages = {
  badge: 'Languages',
  heading: 'Languages',
  items: [
    { name: 'English', level: 'Intermediate, B1-B2' },
    { name: 'Vietnamese', level: 'Native' },
  ],
};

export const contact = {
  badge: 'Contact',
  heading: 'Let’s Build Something Great',
  subheading:
    'I’m always open to discussing interesting products, challenging frontend problems, and opportunities to build better experiences together.',
  resumeCta: { label: 'Download Résumé', href: '/assets/resume.pdf' },
  links: [
    { label: 'GitHub', href: 'https://github.com/dungime' },
    { label: 'E-mail', href: 'mailto:dungntp.contact@gmail.com' },
    { label: '0398 060 569', href: 'tel:+84398060569' },
    { label: 'Ho Chi Minh', href: '' },
    // { label: "LinkedIn", href: "https://linkedin.com" },
    // { label: "Instagram", href: "https://instagram.com" },
    // { label: "E-mail", href: "mailto:dungntp.contact@gmail.com" },
  ],
};
