// Edit this file to customize the site's copy without touching component code.

export const site = {
  name: "Jasmine",
  role: "Frontend Developer",
  logo: "J.",
  nav: [
    { label: "About", href: "#about" },
    // { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  contactCta: { label: "Download CV", href: "/assets/resume.pdf" },
};

export const hero = {
  badge: "Portfolio",
  heading: "Jasmine.",
  subtitle: "Senior Frontend Developer specializing in React and TypeScript.",
  subheading:
    "I build reliable product interfaces, scalable frontend architecture, and complex data-driven applications for fintech, SaaS, and e-commerce products.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "30+", label: "Projects Shipped" },
  ],
  scrollLabel: "Learn more",
};

export const mission = {
  badge: "Mission",
  heading: "I build products that are simple, fast, and built to last",
  body: "Working across outsourcing projects gave me broad experience across industries, teams, and technical environments. I’m now looking to apply that breadth within a product team where I can take deeper ownership and contribute to long-term product growth.",
  imageAlt: "Working on a project",
};

export const services = {
  badge: "Services",
  heading: "What I can help you build",
  subheading:
    "From interface design to production deployment, I cover the full stack of building a digital product.",
  items: [
    {
      icon: "layout",
      title: "Product Design",
      description: "Wireframes to polished UI, backed by a consistent design system.",
      href: "#",
    },
    {
      icon: "code",
      title: "Frontend Engineering",
      description: "React, Next.js, and TypeScript — accessible, fast, and maintainable.",
      href: "#",
      highlight: true,
    },
    {
      icon: "server",
      title: "Backend & APIs",
      description: "Node.js services, databases, and integrations that scale.",
      href: "#",
    },
    {
      icon: "rocket",
      title: "Shipping & Deploy",
      description: "CI/CD, performance tuning, and monitoring after launch.",
      href: "#",
    },
  ],
};

export const skills = {
  badge: "Skills",
  heading: "Technical skills",
  items: [
    {
      icon: "code",
      category: "Languages",
      technologies: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
    },
    {
      icon: "layout",
      category: "Frameworks",
      technologies: ["ReactJS", "Next.js", "React Native", "Angular 2", "jQuery"],
    },
    {
      icon: "palette",
      category: "UI & Styling",
      technologies: [
        "Ant Design",
        "Tailwind CSS",
        "shadcn/ui",
        "Bootstrap",
        "Styled-components",
        "Storybook",
      ],
    },
    {
      icon: "database",
      category: "State & Data",
      technologies: ["React Query", "SWR", "Redux", "Redux-Saga", "Jotai", "Rematch"],
    },
    {
      icon: "rocket",
      category: "Build Tools",
      technologies: ["ViteJS", "Turborepo", "Git"],
    },
    {
      icon: "server",
      category: "APIs",
      technologies: ["REST APIs", "GraphQL"],
    },
  ],
};

export const projects = {
  badge: "Selected Work",
  heading: "Key projects",
  subheading: "A few things I've built and released recently.",
  items: [
    {
      id: "nexstox-nxmarket",
      title: "NexStox & NXMarket Trading Platforms",
      description:
        "Sole frontend developer for two fintech/Web3 trading platforms, delivering the trading interface, staking modules, and admin functions end-to-end with minimal oversight.",
      tags: ["React", "TypeScript", "REST APIs", "Real-time data", "Material UI"],
      thumbnail: "/assets/images/thumb-trading.png",
    },
    {
      id: "e-learning-platform",
      title: "E-Learning Platform",
      description:
        "Set up the entire monorepo architecture from scratch for an e-learning platform and built the instructor and student dashboards.",
      tags: ["React", "TypeScript", "Turborepo", "Vite", "React Query", "Jotai"],
      thumbnail: "/assets/images/thumb-elearning.png",
    },
    {
      id: "cleaning-services-dashboard",
      title: "24.7 Cleaning Services Dashboard",
      description:
        "Admin dashboard with role-based authentication across 4 roles, with end-to-end CRUD modules for cleaning requests, maintenance, reports, and inventory.",
      tags: ["Turborepo", "Vite", "React", "TypeScript", "Ant Design", "SWR"],
      thumbnail: "/assets/images/thumb-cleaning.png",
    },
    {
      id: "admin-boilerplate-generator",
      title: "Admin Boilerplate Generator",
      description:
        "Internal CLI tool to scaffold admin web applications, standardizing coding conventions and reducing project setup time across client teams.",
      tags: ["React", "Rematch", "Ant Design", "Styled-components", "Plop"],
      thumbnail: "/assets/images/thumb-admingen.png",
    },
  ],
};

export const experience = {
  badge: "Career",
  heading: "Experience",
  items: [
    {
      period: "May 2025 – May 2026",
      title: "Frontend Developer | Nexstox",
      description:
        "Sole frontend developer for two trading platforms, NexStox and NXMarket — maintaining exchange features and implementing staking and launchpad modules alongside admin functions, owning architecture and delivery end-to-end with minimal oversight while working closely with QA before releases.",
      href: "https://nxmarket.com/",
    },
    {
      period: "Mar 2019 – Aug 2025",
      note: "Part-time from May 2025",
      title: "Frontend Developer | Lecle VietNam Jsc.",
      description:
        "Delivered 20+ web applications for international clients, including admin dashboards, e-commerce platforms, real-time chat tools, Shopify themes, and mobile apps. Architected a video call and broadcasting platform's monorepo from scratch with Turborepo and Vite, built real-time broadcasting features for a Senior Community Center using Jitsi Meet, and created an internal Plop CLI boilerplate generator to standardize project scaffolding. Mentored junior developers and conducted code reviews across multiple projects.",
      href: "https://www.lecle.vn/",
    },
    {
      period: "Jan 2018 – Oct 2018",
      title: "Frontend Developer | Pure Projects Co. Ltd.",
      description:
        "Developed new features for a construction project management application, enabling project tracking and resource management, and built responsive, cross-browser interfaces using HTML5, CSS3, JavaScript, and jQuery.",
      href: "https://www.puregrp.au/",
    },
    {
      period: "May 2016 – Dec 2017",
      title: "Frontend Developer | TicketBox Co. Ltd.",
      description:
        "Developed event landing pages and the Event Detail page for ticketbox.com, one of Vietnam's leading event ticketing platforms, building reusable UI components and resolving production bugs with JavaScript, Bootstrap, jQuery, and Angular 2.",
      href: "https://ticketbox.vn/",
    },
    {
      period: "Aug 2014 – May 2016",
      title: "Frontend Developer | Aris Viet Nam Co. Ltd.",
      description:
        "Built responsive, pixel-perfect websites from Photoshop design mockups with consistent rendering across browsers and devices, implementing interactive UI elements and animations in JavaScript and managing collaborative workflows with Git.",
      href: "https://aris-vn.com",
    },
  ],
};

export const background = {
  badge: "Background",
};

export const education = {
  badge: "Education",
  heading: "Education",
  items: [
    {
      title: "2010 – 2013",
      content: "HCMc University of Science",
    },

     {
      title: "Major",
      content: "Information Technology",
    },
  ],
};

export const languages = {
  badge: "Languages",
  heading: "Languages",
  items: [
    { name: "English", level: "Intermediate, B1-B2" },
    { name: "Vietnamese", level: "Native" },
  ],
};

export const contact = {
  badge: "Information",
  heading: "Contact",
  subheading: "Contact me for freelance work, full-time opportunities, or just to say hi.",
  resumeCta: { label: "Download Résumé", href: "/assets/resume.pdf" },
  links: [
    { label: "GitHub", href: "https://github.com/dungime" },
    { label: "E-mail", href: "mailto:dungntp.contact@gmail.com" },
    // { label: "LinkedIn", href: "https://linkedin.com" },
    // { label: "Instagram", href: "https://instagram.com" },
    // { label: "E-mail", href: "mailto:dungntp.contact@gmail.com" },
  ],
};
