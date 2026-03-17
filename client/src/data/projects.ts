export interface Project {
  title: string;
  tagline: string;
  description: string;
  concept: string;
  role: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  category: string;
  year: string;
}

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "SaaS" },
  { id: "business", label: "Business" },
  { id: "food-drink", label: "Food & Drink" },
  { id: "social", label: "Social Media" },
];

export const projects: Project[] = [
  {
    title: "Créatifia",
    tagline: "Where creativity meets technology",
    description: "A creative digital agency website delivering innovative solutions with a sleek, modern interface and seamless user experience.",
    concept: "Créatifia is a full-service creative agency that bridges the gap between bold design thinking and cutting-edge web development. The brand identity revolves around innovation, artistry, and digital craftsmanship — reflected in every pixel of the site.",
    role: "Lead Frontend Developer — Designed and built the entire frontend from concept to deployment, including interactive animations, responsive layouts, and performance optimization.",
    highlights: [
      "Immersive scroll-driven animations with Framer Motion",
      "Custom dark-mode-first design system",
      "Fully responsive across all breakpoints",
      "Sub-2s load time with optimized asset delivery",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    liveUrl: "https://creatifia.com",
    category: "business",
    year: "2025",
  },
  {
    title: "Postphoria",
    tagline: "Social media management, reimagined",
    description: "A full-featured social media management platform with AI-powered content generation, bulk scheduling, RSS auto-posting, and smart analytics.",
    concept: "Postphoria was born from the need for an all-in-one social media tool that doesn't sacrifice user experience for functionality. It empowers marketers and creators to plan, create, and publish content across platforms — with AI doing the heavy lifting on copywriting and scheduling.",
    role: "Full-Stack Developer — Architected the frontend dashboard, built the REST API, integrated AI content generation, and implemented the real-time scheduling engine.",
    highlights: [
      "AI-powered caption and hashtag generator",
      "Drag-and-drop content calendar with bulk scheduling",
      "RSS feed auto-posting with smart formatting",
      "Real-time analytics dashboard with interactive charts",
      "Multi-platform publishing (Instagram, Twitter, LinkedIn, Facebook)",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Express", "PostgreSQL", "Drizzle ORM", "OpenAI API"],
    liveUrl: "https://postphoria.com",
    category: "social",
    year: "2025",
  },
  {
    title: "Komorebi Coffee",
    tagline: "A warm digital experience for artisanal coffee",
    description: "An artisanal coffee shop website with immersive storytelling, elegant typography, and a warm atmospheric design that mirrors the in-store experience.",
    concept: "Komorebi — a Japanese word meaning 'sunlight filtering through leaves' — is a specialty coffee brand that values craftsmanship and the ritual of slow coffee. The website was designed to evoke that same sense of warmth and mindfulness, using rich earth tones, cinematic imagery, and smooth page transitions.",
    role: "Frontend Developer & Designer — Crafted the visual identity for the web, built custom scroll animations, and created an immersive browsing experience that tells the brand story.",
    highlights: [
      "Cinematic hero section with parallax scrolling",
      "Custom warm color palette inspired by coffee tones",
      "Story-driven layout with narrative scroll flow",
      "Menu showcase with elegant card-based design",
      "Mobile-first responsive design for on-the-go browsing",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://komorebi.creatifia.com",
    category: "food-drink",
    year: "2025",
  },
  {
    title: "Analyio",
    tagline: "Analytics that drive decisions",
    description: "A premium SaaS analytics platform landing page with modern design, smooth animations, and conversion-focused UI elements.",
    concept: "Analyio is a data analytics SaaS product designed for growth-stage startups that need actionable insights without the complexity of enterprise tools. The landing page was built to communicate value instantly — clean data visualizations, clear pricing tiers, and trust-building social proof that converts visitors into trial users.",
    role: "Full-Stack Developer — Built the high-conversion landing page with interactive demo sections, pricing calculator, and integrated the waitlist/signup API with database persistence.",
    highlights: [
      "Animated data visualization demos on scroll",
      "Interactive pricing calculator with plan comparison",
      "Conversion-optimized CTA placement and A/B tested layout",
      "Glassmorphism UI with subtle depth and gradient effects",
      "SEO-optimized with structured data and meta tags",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Express", "PostgreSQL", "Drizzle ORM"],
    liveUrl: "https://analyio.com",
    category: "saas",
    year: "2025",
  },
  {
    title: "SocialProofly",
    tagline: "Build trust, boost conversions",
    description: "A social proof and trust-building platform designed to boost conversions with real-time notifications and engagement widgets.",
    concept: "SocialProofly helps e-commerce brands and SaaS companies leverage the psychology of social proof. The platform provides embeddable widgets — recent purchase notifications, live visitor counts, review popups — that create urgency and trust. The marketing site itself demonstrates the product in action, with live widget previews throughout the page.",
    role: "Frontend Developer — Designed and developed the product marketing site, built interactive widget preview demos, and created the onboarding flow UI.",
    highlights: [
      "Live widget preview demos embedded throughout the page",
      "Interactive customization playground for widgets",
      "Smooth micro-interactions and hover effects",
      "Dark/light mode toggle with seamless transitions",
      "Conversion-focused design with clear value propositions",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    liveUrl: "https://socialproofly.com",
    category: "saas",
    year: "2025",
  },
];
