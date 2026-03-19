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
  { id: "travel", label: "Travel" },
  { id: "local-business", label: "Local Business" },
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
    title: "Brew & Bloom",
    tagline: "Where coffee culture meets floral artistry",
    description: "A charming cafe and flower shop website blending two passions into one seamless digital experience — fresh brews and fresh blooms under one roof.",
    concept: "Brew & Bloom is a unique hybrid concept that combines a specialty coffee bar with a curated flower studio. The website captures that dual identity with a warm, organic aesthetic — earthy tones meet soft florals, creating a browsing experience as inviting as walking through the shop's front door. Every section tells the story of how coffee and flowers complement each other.",
    role: "Frontend Developer — Built the full website from design to deployment, crafting a cohesive visual language that blends the cafe and florist worlds into one unified brand experience.",
    highlights: [
      "Dual-concept design bridging cafe and flower shop identities",
      "Warm organic color palette with botanical accents",
      "Elegant menu and floral arrangement showcases",
      "Smooth page transitions and scroll-driven reveals",
      "Fully responsive with mobile-first approach",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://brew-and-bloom-production.up.railway.app",
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
  {
    title: "Jordan",
    tagline: "Discover the Wonders of the Hashemite Kingdom",
    description: "An immersive travel website dedicated to Jordan — showcasing its ancient history, breathtaking landscapes, and rich culture to inspire and guide modern travelers.",
    concept: "Jordan is one of the world's most captivating destinations, home to Petra, Wadi Rum, the Dead Sea, and millennia of civilization. This travel website was built to capture that magic digitally — drawing visitors in with stunning visuals and storytelling, then guiding them through destinations, itineraries, and experiences that make Jordan unforgettable.",
    role: "Frontend Developer — Designed and built the full travel website, focusing on visual impact, immersive scroll experiences, and a content structure that makes trip planning feel exciting rather than overwhelming.",
    highlights: [
      "Cinematic full-screen hero with landmark photography",
      "Destination cards showcasing Petra, Wadi Rum, Dead Sea & more",
      "Itinerary sections with day-by-day travel guides",
      "Immersive parallax scroll effects throughout",
      "Fully responsive for mobile travelers on the go",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://jordan-production.up.railway.app",
    category: "travel",
    year: "2025",
  },
  {
    title: "Co-Working Space",
    tagline: "Where great work happens together",
    description: "A modern co-working space website designed to attract freelancers, remote teams, and entrepreneurs with a clean, professional, and welcoming digital presence.",
    concept: "The co-working industry thrives on community and flexibility — this website was built to communicate exactly that. It presents the space's amenities, membership plans, and community culture in a way that makes visitors feel at home before they even walk through the door. Every section is designed to reduce friction and convert visitors into members.",
    role: "Frontend Developer — Built the full marketing site including the membership plan comparison, amenities showcase, booking inquiry flow, and responsive layout optimized for local search traffic.",
    highlights: [
      "Membership plan comparison with clear pricing tiers",
      "Amenities and space showcase with interactive highlights",
      "Community-focused design that conveys warmth and productivity",
      "Booking/inquiry CTA prominently integrated throughout",
      "SEO-optimized for local search visibility",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://co-working-w-production.up.railway.app",
    category: "local-business",
    year: "2025",
  },
];
