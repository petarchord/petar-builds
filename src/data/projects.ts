import type { ImageMetadata } from "astro";

type Localized = { en: string; sr: string };

export type ProjectVisualKind =
  | "paayed"
  | "fashion"
  | "booking"
  | "crm"
  | "fitcher"
  | "accounting"
  | "nulia";

export type Project = {
  slug: string;
  title: Localized;
  client: string;
  category: Localized;
  summary: Localized;
  role: string;
  year: string;
  stack: string[];
  highlight: { value: string; label: Localized };
  visual: ProjectVisualKind;
  // Optional real screenshot; replaces the illustrated visual when set
  image?: ImageMetadata;
  metrics: { value: string; label: string }[];
  problem: string[];
  solution: { intro: string; points: string[] };
  results: string[];
  testimonialIds?: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "paayed-fintech-platform",
    title: {
      en: "Paayed — All-in-one B2B Fintech Platform",
      sr: "Paayed — Sveobuhvatna B2B fintech platforma",
    },
    client: "Paayed (UK)",
    liveUrl: "https://www.paayed.com",
    category: { en: "Fintech · B2B SaaS", sr: "Fintech · B2B SaaS" },
    summary: {
      en: "Payments, accounting and CRM for UK SMEs. I owned UI standardization, built the design system and shipped core payment and security flows.",
      sr: "Plaćanja, računovodstvo i CRM za mala i srednja preduzeća u UK. Vodio sam standardizaciju UI-a, izgradio dizajn sistem i isporučio ključne tokove plaćanja i bezbednosti.",
    },
    role: "Product Engineer · Design System Owner",
    year: "2025–26",
    stack: [
      "TypeScript",
      "React",
      "Tailwind",
      "Radix UI",
      "Jest",
      "RTL",
      "GitHub CI/CD",
    ],
    highlight: {
      value: "90+",
      label: {
        en: "legacy components replaced",
        sr: "zamenjenih legacy komponenti",
      },
    },
    visual: "paayed",
    metrics: [
      {
        value: "90+",
        label: "legacy components replaced by the design system",
      },
      {
        value: "1",
        label: "shared UI language across payments, accounting & CRM",
      },
      {
        value: "3DS",
        label: "secure payment flows & Hosted Payment Page in production",
      },
    ],
    problem: [
      "Paayed brings payments, accounting and CRM together in one platform for UK SMEs. As the product scaled, the UI didn’t: components were duplicated, patterns drifted between modules, and every new feature re-solved the same interface problems.",
      "At the same time, the platform needed production-grade payment experiences and a more secure authentication model to meet fintech expectations.",
    ],
    solution: {
      intro:
        "I took ownership of standardizing the interface and delivered core product features end-to-end — from requirements and architectural decisions through implementation, testing and release.",
      points: [
        "Designed and built a shared React npm component library and design system, with development and release standards the whole team could follow.",
        "Drove adoption across the application, replacing 90+ legacy components.",
        "Built the Hosted Payment Page (HPP), 3D Secure (3DS) authentication flows, and payment analytics and reporting.",
        "Migrated authentication from token-based storage to secure cookie/session auth with Laravel Sanctum — CSRF protection, route guards, session handling and authorization flows.",
        "Delivered data-heavy CRM and accounting modules: clients, invoices, quotes, credit notes, expenses, reporting and exports.",
      ],
    },
    results: [
      "One consistent visual language across payments, accounting and CRM.",
      "New features built from shared, tested components instead of from scratch.",
      "A more secure session model with CSRF protection and proper route guards.",
      "Lower long-term maintenance cost as the platform keeps scaling.",
    ],
    testimonialIds: ["libby", "behrooz"],
  },
  {
    slug: "fortune-500-fashion-supplier-platform",
    title: {
      en: "Supplier & QA Platform for a Fortune Global 500 Fashion Company",
      sr: "Platforma za dobavljače i QA za Fortune Global 500 modnu kompaniju",
    },
    client: "Global fashion company (Fortune Global 500) · via Symphony",
    category: {
      en: "Enterprise · Micro-frontends",
      sr: "Enterprise · Micro-frontends",
    },
    summary: {
      en: "Replaced manual production and quality-assurance processes between internal QA teams and a global supplier network with a Domain-Driven micro-frontend platform.",
      sr: "Manuelne procese produkcije i kontrole kvaliteta između internih QA timova i globalne mreže dobavljača zamenili smo Domain-Driven micro-frontend platformom.",
    },
    role: "Frontend Engineer",
    year: "2022–24",
    stack: ["TypeScript", "React", "Jest", "Stryker.js", "Docker", "AWS"],
    highlight: {
      value: "5+",
      label: {
        en: "teams on my shared UI library",
        sr: "timova koristi moju UI biblioteku",
      },
    },
    visual: "fashion",
    metrics: [
      {
        value: "F500",
        label: "Fortune Global 500 client with a worldwide supplier network",
      },
      {
        value: "5+",
        label: "teams adopted the shared UI library I built and maintained",
      },
      { value: "MFE", label: "Domain-Driven micro-frontend architecture" },
    ],
    problem: [
      "Production and quality assurance between the company’s internal QA teams and its global network of external suppliers ran on manual processes.",
      "Knowing where a product stood, what was blocking it and which documents were missing meant chasing information across people and tools.",
    ],
    solution: {
      intro:
        "I was part of the team replacing those processes with a Domain-Driven, Micro-Frontend (MFE) platform.",
      points: [
        "Built the Product Timeline / Critical Path experience, visualizing each product’s journey through production, quality, shipping and handover milestones, together with pending and completed operational tasks.",
        "Developed an end-to-end document and media upload workflow for product articles — images, PDFs and other production assets — with polling-based processing and status updates.",
        "Built and maintained a shared UI npm library for managing article and production-asset dimensions, used across multiple micro-frontends.",
        "Evolved the library based on cross-team requirements while keeping it backward compatible and consistent.",
      ],
    },
    results: [
      "Suppliers and QA teams share one clear view of product progress and blockers.",
      "Manual hand-offs replaced with a structured, trackable workflow.",
      "Consistent behavior across micro-frontends through one shared library adopted by 5+ teams.",
      "Delivered on target deadlines on a fast-paced initiative.",
    ],
    testimonialIds: ["branislav"],
  },
  {
    slug: "nulia-ai-enablement-platform",
    title: {
      en: "AI-powered Microsoft 365 Enablement Platform",
      sr: "AI platforma za Microsoft 365 enablement",
    },
    client: "AI-powered Microsoft 365 Enablement Platform · via Devtech",
    category: { en: "AI · Analytics · SaaS", sr: "AI · Analitika · SaaS" },
    summary: {
      en: "Led frontend for the advanced analytics version, turning complex requirements and large datasets into clear, interactive D3.js visualizations.",
      sr: "Vodio frontend napredne analitičke verzije, pretvarajući kompleksne zahteve i velike skupove podataka u jasne, interaktivne D3.js vizualizacije.",
    },
    role: "Frontend Lead · Data Visualization",
    year: "2021–22",
    stack: ["TypeScript", "React", "D3.js", "Material UI", "ASP.NET"],
    highlight: {
      value: "1000s",
      label: {
        en: "of organizations served",
        sr: "organizacija koristi platformu",
      },
    },
    visual: "nulia",
    metrics: [
      { value: "1000s", label: "of organizations using the platform" },
      { value: "D3.js", label: "custom standalone visualization components" },
      {
        value: "Lead",
        label: "frontend ownership of the advanced analytics version",
      },
    ],
    problem: [
      "The platform helps thousands of organizations improve employee digital experience and get more value from Microsoft 365.",
      "Its advanced version had to present complex analytics and large-scale data in a way people could actually understand and explore — without the interface grinding to a halt.",
    ],
    solution: {
      intro:
        "I led frontend development for the advanced analytics version of the application.",
      points: [
        "Designed and built custom standalone visualization components with D3.js for complex datasets and user insights.",
        "Worked through the rendering, performance and interaction challenges of exploring large volumes of data.",
        "Collaborated with engineering and product to turn complex analytical requirements into understandable, interactive experiences.",
      ],
    },
    results: [
      "Complex analytics made understandable and explorable for end users.",
      "Reusable, standalone visualization components the team could build on.",
      "Smooth interaction on large datasets.",
    ],
    testimonialIds: ["nikola-mirkov"],
  },
  {
    slug: "enterprise-accounting-platform",
    title: {
      en: "Enterprise Accounting Platform Modernization",
      sr: "Modernizacija enterprise računovodstvene platforme",
    },
    client: "FinQuery (USA) · via Devtech",
    category: { en: "Fintech · Enterprise", sr: "Fintech · Enterprise" },
    summary: {
      en: "Helped move a legacy US accounting platform to a scalable modern web architecture — complex onboarding, lease accounting and data-heavy reporting.",
      sr: "Pomogao u prelasku legacy američke računovodstvene platforme na skalabilnu modernu arhitekturu — kompleksan onboarding, lizing računovodstvo i izveštavanje.",
    },
    role: "Frontend Engineer",
    year: "2021–22",
    stack: [
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Redux Saga",
      "ASP.NET",
      "PostgreSQL",
    ],
    highlight: {
      value: "Legacy → Modern",
      label: { en: "enterprise architecture", sr: "enterprise arhitektura" },
    },
    visual: "accounting",
    metrics: [
      {
        value: "Modern",
        label: "scalable, maintainable web architecture replacing legacy UI",
      },
      {
        value: "Multi-step",
        label: "onboarding with interconnected flows & async data",
      },
      {
        value: "Big data",
        label:
          "tables, filtering, exports & visualizations for financial datasets",
      },
    ],
    problem: [
      "A legacy enterprise accounting platform for the US market had to move to a more scalable, maintainable architecture — without slowing down users who work with large financial datasets every day.",
      "Onboarding was complex, spanning many interconnected steps with asynchronous data and shared form state.",
    ],
    solution: {
      intro:
        "I contributed to the modernization and owned several of the most complex product areas on the frontend.",
      points: [
        "Helped transition the platform toward a modern, scalable web architecture.",
        "Built a complex multi-step onboarding with interconnected user flows, using Redux Toolkit & Saga and structured state patterns for form state and asynchronous operations.",
        "Developed data-heavy interfaces with advanced tables, filtering, exports and interactive visualizations.",
        "Built financial product experiences including reporting dashboards and lease-accounting workflows.",
      ],
    },
    results: [
      "A more scalable and maintainable frontend foundation.",
      "Reliable onboarding across many interdependent steps.",
      "Efficient day-to-day work with large financial datasets.",
    ],
  },
  {
    slug: "us-booking-platform",
    title: {
      en: "Service Booking Platform for the US Market",
      sr: "Platforma za rezervaciju usluga za tržište SAD",
    },
    client: "US startup · via Symphony",
    category: { en: "Marketplace · MVP", sr: "Marketplace · MVP" },
    summary: {
      en: "Took end-to-end technical ownership of a two-sided booking platform — architecture from scratch, service discovery, scheduling and secure auth.",
      sr: "Preuzeo potpuno tehničko vlasništvo nad dvostranom booking platformom — arhitektura od nule, pretraga usluga, zakazivanje i sigurna autentifikacija.",
    },
    role: "Full-stack Engineer · Technical Owner",
    year: "2022–24",
    stack: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Auth0",
      "Material UI",
      "Docker",
      "AWS",
    ],
    highlight: {
      value: "0 → 1",
      label: { en: "architecture & MVP", sr: "arhitektura i MVP" },
    },
    visual: "booking",
    metrics: [
      {
        value: "0 → 1",
        label: "frontend & backend architecture built from scratch",
      },
      { value: "Calendly", label: "integrated appointment scheduling" },
      { value: "Auth0", label: "secure identity & user access flows" },
    ],
    problem: [
      "The client needed a platform connecting US consumers with service providers — starting with no existing codebase.",
      "The architecture had to support a fast MVP while leaving room for the product to grow.",
    ],
    solution: {
      intro: "I took end-to-end technical ownership of the application.",
      points: [
        "Established both frontend and backend architecture from scratch, defining the foundations for future product development.",
        "Built the core service discovery and booking experience: find providers, explore services and schedule appointments through Calendly integration.",
        "Implemented authentication and user access flows with Auth0.",
        "Worked across architecture, implementation, integration and delivery, shaping the technical direction as the MVP came together.",
      ],
    },
    results: [
      "A working MVP covering discovery, booking and scheduling.",
      "Secure identity management across the application.",
      "An architecture ready for the next phase of the product.",
    ],
  },
  {
    slug: "hr-people-placement-crm",
    title: { en: "HR & People Placement CRM", sr: "HR i People Placement CRM" },
    client: "Symphony (internal)",
    category: { en: "Internal tools · CRM", sr: "Interni alati · CRM" },
    summary: {
      en: "Clear visibility into employee skills, experience and engagements — so staffing decisions are made from data, not guesswork.",
      sr: "Jasan uvid u veštine, iskustvo i angažmane zaposlenih — kako bi se odluke o raspoređivanju donosile na osnovu podataka.",
    },
    role: "Full-stack Engineer",
    year: "2022–24",
    stack: [
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "Material UI",
      "GitHub CI/CD",
    ],
    highlight: {
      value: "1",
      label: {
        en: "source of truth for people data",
        sr: "izvor istine za podatke o ljudima",
      },
    },
    visual: "crm",
    metrics: [
      {
        value: "1",
        label: "place for skills, experience, projects & engagements",
      },
      {
        value: "Full-stack",
        label: "admin UI, data models, filtering, pagination & APIs",
      },
      {
        value: "Iterative",
        label: "continuous UX improvements from user feedback",
      },
    ],
    problem: [
      "Staffing decisions depended on knowing who had which skills, experience and availability.",
      "That information was scattered and hard to compare across the organization.",
    ],
    solution: {
      intro:
        "I built and continuously improved an internal HR & People Placement CRM.",
      points: [
        "Surfaced employee skills, experience, projects and engagements in one place.",
        "Developed the admin experience and contributed across frontend and backend: data models, filtering, pagination and supporting APIs.",
        "Iterated on UI/UX and workflows based on user feedback and changing organizational needs.",
      ],
    },
    results: [
      "Faster, better-informed staffing decisions.",
      "One source of truth for people data.",
      "A tool that kept evolving with the organization.",
    ],
  },
  {
    slug: "fitcher-social-subscription-platform",
    title: {
      en: "Fitcher — Social & Creator Subscription Platform",
      sr: "Fitcher — Društvena mreža i platforma za pretplate kreatora",
    },
    client: "Fitcher · via Lioneve Media",
    category: {
      en: "Social · Creator economy",
      sr: "Društvene mreže · Creator ekonomija",
    },
    summary: {
      en: "Built a social networking and content subscription platform from greenfield development through beta — Stories, creator subscriptions and dynamic profiles.",
      sr: "Izgradio društvenu mrežu i platformu za pretplate na sadržaj od nule do beta verzije — Stories, pretplate za kreatore i dinamični profili.",
    },
    role: "Software Developer",
    year: "2020–21",
    stack: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "GitHub CI/CD",
      "Vercel",
    ],
    highlight: {
      value: "0 → Beta",
      label: {
        en: "greenfield to beta release",
        sr: "od nule do beta verzije",
      },
    },
    visual: "fitcher",
    metrics: [
      {
        value: "0 → Beta",
        label: "from greenfield development to a working beta",
      },
      {
        value: "Stories",
        label: "Instagram-style time-limited visual content",
      },
      {
        value: "Paywall",
        label: "creator subscription workflows powering content monetization",
      },
    ],
    problem: [
      "Fitcher set out to combine social networking with content subscriptions — giving creators a place to share their content and get paid for it.",
      "Starting from greenfield, the product needed its core social and monetization features built from the ground up and taken to a working beta.",
    ],
    solution: {
      intro:
        "I joined in the early stages and built core functionality across the frontend product lifecycle, translating early-stage requirements into reusable, production-ready features.",
      points: [
        "Built an Instagram-style Stories experience for creating and consuming time-limited visual content.",
        "Developed subscription workflows for creators, supporting the platform’s content monetization model.",
        "Built dynamic user and creator profile experiences and other core social networking functionality.",
        "Helped take the platform from initial development to a working beta product.",
      ],
    },
    results: [
      "Platform taken from initial development to a working beta release.",
      "A core social experience: Stories, dynamic profiles and networking features.",
      "Creator subscription workflows supporting the monetization model.",
      "Reusable, production-ready features built from early-stage requirements.",
    ],
    testimonialIds: ["nikola-mladenovic"],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
