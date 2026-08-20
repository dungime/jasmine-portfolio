// Edit this file to customize the site's copy without touching component code.

export const site = {
  name: 'Jasmine',
  role: 'Frontend Developer',
  logo: 'J.',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'What I Do', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Career', href: '#career-route' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  contactCta: { label: 'Download CV', href: '/assets/resume.pdf' },
};

export const hero = {
  badge: 'Portfolio',
  heading: 'Jasmine.',
  subtitle: 'React · TypeScript · Next.js · Frontend Architecture',
  subheading:
    'I build reliable product interfaces, scalable frontend architecture, and complex data-driven applications for fintech, SaaS, and e-commerce products.',
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
    { value: '15', label: 'Biggest Team Size Worked With' },
    { value: '∞', label: 'Passion for Building Value' },
  ],
};

export const mission = {
  badge: 'Mission',
  heading: 'I build products that are simple, fast, and built to last',
  body: 'Working across outsourcing projects gave me broad experience across industries, teams, and technical environments. I’m now looking to apply that breadth within a product team where I can take deeper ownership and contribute to long-term product growth.',
  imageAlt: 'Working on a project',
  whatIDo: {
    heading: 'What I Do',
    items: [
      {
        title: 'Frontend Architecture',
        description:
          'Design and evolve scalable frontend structures, reusable component systems, and project foundations for production applications.',
      },
      {
        title: 'Complex Product Interfaces',
        description:
          'Build data-heavy and workflow-driven interfaces including trading, staking, KYC, administration, dashboards, and learning platforms.',
      },
      {
        title: 'End-to-End Ownership',
        description:
          'Take frontend features from requirements and implementation through API integration, testing, QA, and production release.',
      },
      {
        title: 'Product Collaboration',
        description:
          'Work closely with Product, Design, Backend, and QA teams to turn product requirements into reliable and maintainable frontend experiences.',
      },
      {
        title: 'Developer Enablement',
        description:
          'Improve development workflows through reusable systems, internal tooling, coding standards, code reviews, and mentoring.',
      },
    ],
  },
};

export const services = {
  badge: 'Services',
  heading: 'What I can help you build',
  subheading:
    'From interface design to production deployment, I cover the full stack of building a digital product.',
  items: [
    {
      icon: 'layout',
      title: 'Product Design',
      description:
        'Wireframes to polished UI, backed by a consistent design system.',
      href: '#',
    },
    {
      icon: 'code',
      title: 'Frontend Engineering',
      description:
        'React, Next.js, and TypeScript — accessible, fast, and maintainable.',
      href: '#',
      highlight: true,
    },
    {
      icon: 'server',
      title: 'Backend & APIs',
      description: 'Node.js services, databases, and integrations that scale.',
      href: '#',
    },
    {
      icon: 'rocket',
      title: 'Shipping & Deploy',
      description: 'CI/CD, performance tuning, and monitoring after launch.',
      href: '#',
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
      technologies: [
        'React',
        'TypeScript',
        'Next.js',
        'frontend architecture',
        'reusable component systems',
        'REST APIs integration',
        'complex form workflows',
      ],
    },
    {
      icon: 'rocket',
      category: 'Production experience',
      technologies: [
        'React Query',
        'SWR',
        'Redux',
        'Jotai',
        'Material UI',
        'Ant Design',
        'Turborepo',
        'Vite',
        'Git',
      ],
    },
    {
      icon: 'clock',
      category: 'Previous experience',
      technologies: [
        'Tailwind CSS',
        'Storybook',
        'Angular',
        'jQuery',
        'Bootstrap',
        'Redux-Saga',
        'Rematch',
        'Styled-components',
        'Plop',
        'Jitsi Meet',
        'WebRTC',
        'Socket.IO',
        'Shopify',
        'Odoo',
      ],
    },
    // {
    //   icon: 'code',
    //   category: 'Languages',
    //   technologies: [
    //     'JavaScript (ES6+)',
    //     'TypeScript',
    //     'HTML5',
    //     'CSS3',
    //     'SCSS',
    //   ],
    // },
    // {
    //   icon: 'layout',
    //   category: 'Frameworks',
    //   technologies: [
    //     'ReactJS',
    //     'Next.js',
    //     'React Native',
    //     'Angular 2',
    //     'jQuery',
    //   ],
    // },
    // {
    //   icon: 'palette',
    //   category: 'UI & Styling',
    //   technologies: [
    //     'Ant Design',
    //     'Tailwind CSS',
    //     'shadcn/ui',
    //     'Bootstrap',
    //     'Styled-components',
    //     'Storybook',
    //   ],
    // },
    // {
    //   icon: 'database',
    //   category: 'State & Data',
    //   technologies: [
    //     'React Query',
    //     'SWR',
    //     'Redux',
    //     'Redux-Saga',
    //     'Jotai',
    //     'Rematch',
    //   ],
    // },
    // {
    //   icon: 'rocket',
    //   category: 'Build Tools',
    //   technologies: ['ViteJS', 'Turborepo', 'Git'],
    // },
    // {
    //   icon: 'server',
    //   category: 'APIs',
    //   technologies: ['REST APIs', 'GraphQL'],
    // },
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
      description:
        'Sole frontend developer for two fintech/Web3 trading platforms, delivering the trading interface, staking modules, and admin functions end-to-end with minimal oversight.',
      tags: [
        'React',
        'TypeScript',
        'REST APIs',
        'Real-time data',
        'Material UI',
      ],
      thumbnail: '/assets/images/thumb-trading.png',
    },
    {
      id: 'e-learning-platform',
      title: 'E-Learning Platform',
      subtitle: 'Learning Management Platform',
      category: 'Education / SaaS',
      description:
        'A learning platform providing separate experiences for instructors and students, including course management, video learning, learning history, and payment workflows.',
      role: 'I was responsible for the frontend architecture and implementation of the platform, including setting up the project structure and developing key instructor and student workflows.',
      built: [
        'Set up the **monorepo architecture from scratch**',
        'Built student dashboards and learning interfaces',
        'Developed instructor interfaces for course creation and content management',
        'Implemented video-based learning experiences',
        'Built learning history and progress-related workflows',
        'Integrated frontend features with REST APIs',
        'Implemented payment-related workflows',
      ],
      highlights: [
        {
          title: 'Monorepo Architecture',
          description:
            'Established a reusable project structure using **Vite and Turborepo**, allowing shared configuration and components across applications.',
        },
        {
          title: 'Component Architecture',
          description:
            'Created reusable UI components and shared patterns between instructor and student experiences.',
        },
        {
          title: 'Data Management',
          description: 'Used React Query and Jotai to manage server data and client-side application state.',
        },
        {
          title: 'Complex Forms',
          description:
            'Built course creation and content management workflows involving multiple forms, validation, and API states.',
        },
      ],
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Turborepo',
        'React Query',
        'Jotai',
        'REST APIs',
      ],
      thumbnail: '/assets/images/thumb-elearning.png',
    },
    {
      id: 'cleaning-services-dashboard',
      title: 'Cleaning Services Dashboard',
      subtitle: 'Role-Based Operations Platform',
      description:
        'An admin platform for managing cleaning service operations, including requests, maintenance, reports, and inventory.',
      screenshots: [
        '/assets/images/projects/cleaning/dashboard-workflow.png',
        '/assets/images/projects/cleaning/stock-details.png',
        '/assets/images/projects/cleaning/cleaning-calendar.png',
      ],
      contributions: [
        'Implemented authentication and authorization for **4 user roles**',
        'Built end-to-end CRUD workflows',
        'Developed cleaning request and maintenance management',
        'Built reporting and inventory modules',
        'Integrated frontend features with REST APIs',
        'Created responsive interfaces for different operational workflows',
      ],
      highlights: [
        {
          title: undefined,
          description:
            'The main challenge was managing different permissions and workflows within the same application.',
        },
        {
          title: undefined,
          description:
            'I implemented role-based interfaces so each user type could access the appropriate functionality while sharing common components and application infrastructure.',
        },
      ],
      tags: ['React', 'TypeScript', 'Vite', 'Turborepo', 'Ant Design', 'SWR', 'Jotai'],
      userRoles: [
        { icon: 'shield', name: 'Admin', description: 'Full system access & configuration' },
        { icon: 'chart', name: 'Manager', description: 'Oversee operations & reports' },
        { icon: 'people', name: 'Supervisor', description: 'Manage teams & cleaning tasks' },
        { icon: 'clipboard', name: 'Worker', description: 'View & complete assigned tasks' },
      ],
      thumbnail: '/assets/images/thumb-cleaning.png',
    },
    {
      id: 'admin-boilerplate-generator',
      title: 'Admin Boilerplate Generator',
      description:
        'Internal CLI tool to scaffold admin web applications, standardizing coding conventions and reducing project setup time across client teams.',
      tags: ['React', 'Rematch', 'Ant Design', 'Styled-components', 'Plop'],
      thumbnail: '/assets/images/thumb-admingen.png',
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
      period: '2014 – 2015',
      role: 'Junior Frontend Developer',
      team: '3 FE',
      description:
        'My first step into professional frontend development after graduation. I built a strong foundation in frontend development while learning how to work with real clients, production websites, and professional development workflows.',
      learned: [
        'Built a foundation in HTML, CSS, JavaScript, and jQuery',
        'Practiced converting designs into responsive web interfaces',
        'Learned Git, Photoshop, task management, and team communication tools',
        'Adapted from academic projects to real-world production work',
      ],
      contributions: [
        'Maintained and updated customer websites',
        'Built new sections such as galleries and content pages',
        'Fixed UI and functional bugs',
        'Updated content based on client requirements',
        'Supported responsive design across different screen sizes',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Git', 'Photoshop'],
    },
    {
      id: 'ticketbox',
      number: '02',
      icon: 'ticket',
      stage: 'Product Collaboration',
      category: 'Ticketing Platform',
      company: 'TicketBox',
      website: 'https://ticketbox.vn/',
      period: '2015 – 2017',
      role: 'Junior Frontend Developer',
      team: '3 FE · 8–14 members',
      description:
        'My first experience working in a professional product team. I learned how frontend development connects with Design, Backend, Mobile, and Business teams while working in an Agile environment.',
      learned: [
        'Built event pages using CSS3, Vanilla JavaScript, and jQuery',
        'Worked on event landing pages, event details, and ticket booking flows',
        'Learned Agile practices including estimation, stand-ups, sprint planning, and retrospectives',
        'Collaborated closely with Design, Backend, Mobile, and Business teams',
      ],
      contributions: [
        'Shipped 6+ event landing pages under tight 2–3 day deadlines',
        'Built an event detail page with modern UI and scrolling animations',
        'Contributed to customer-facing ticket booking experiences',
      ],
      tech: ['HTML', 'CSS3', 'JavaScript', 'jQuery', 'Git', 'Agile'],
    },
    {
      id: 'pure-projects',
      number: '03',
      icon: 'code',
      stage: 'Independent Delivery',
      category: 'Construction Management Platform',
      company: 'Pure Projects',
      website: 'https://www.puregrp.au/',
      period: '2017 – 2019',
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
        'Delivered a milestone feature with API integration',
        'Built pagination and filtering',
        'Developed an editing form for managing project data',
        'Worked with QA to ensure feature quality before release',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    },
    {
      id: 'lecle',
      number: '04',
      icon: 'people',
      stage: 'Scale & Leadership',
      category: 'Outsourcing',
      company: 'Lecle Vietnam',
      website: 'https://www.lecle.vn/',
      period: 'Mar 2019 – May 2025',
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
        'Shipped 30+ outsourced projects',
        'Mentored and supported 5 fresh frontend developers',
        'Took ownership of projects from initial setup through production delivery',
        'Continued supporting the team through a challenging period of company transition',
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'Angular', 'Shopify', 'REST APIs', 'Git', 'Turborepo'],
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
        'Contributed to NexStox and NXMarket trading platforms',
        'Built and maintained complex trading, staking, KYC, and admin workflows',
        'Developed reusable frontend components and application architecture',
        'Worked with real-time data and complex API integrations',
        'Took ownership of frontend features from development through production',
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'React Query', 'Real-time Data', 'REST APIs'],
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

export const background = {
  badge: 'Background',
};

export const education = {
  badge: 'Education',
  heading: 'Education',
  items: [
    {
      title: '2010 – 2013',
      content: 'HCMc University of Science',
    },

    {
      title: 'Major',
      content: 'Information Technology',
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
  badge: 'Information',
  heading: 'Contact',
  subheading:
    'Contact me for freelance work, full-time opportunities, or just to say hi.',
  resumeCta: { label: 'Download Résumé', href: '/assets/resume.pdf' },
  links: [
    { label: 'GitHub', href: 'https://github.com/dungime' },
    { label: 'E-mail', href: 'mailto:dungntp.contact@gmail.com' },
    { label: '0398 060 569', href: 'tel:+84398060569' },
    // { label: "LinkedIn", href: "https://linkedin.com" },
    // { label: "Instagram", href: "https://instagram.com" },
    // { label: "E-mail", href: "mailto:dungntp.contact@gmail.com" },
  ],
};
