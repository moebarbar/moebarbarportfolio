export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  category: string;
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
    description: "A creative agency delivering innovative digital solutions with a sleek, modern interface and seamless user experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    liveUrl: "https://creatifia.com",
    category: "business",
  },
  {
    title: "Postphoria",
    description: "A full-featured social media management platform with AI-powered content generation, bulk scheduling, RSS auto-posting, and smart analytics.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Drizzle"],
    liveUrl: "https://postphoria.com",
    category: "social",
  },
  {
    title: "Komorebi Coffee",
    description: "An artisanal coffee shop website with immersive storytelling, elegant typography, and a warm atmospheric design that mirrors the in-store experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
    liveUrl: "https://komorebi.creatifia.com",
    category: "food-drink",
  },
  {
    title: "Analyio",
    description: "A premium SaaS landing page with modern design, smooth animations, and conversion-focused UI elements.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Drizzle"],
    liveUrl: "https://analyio.com",
    category: "saas",
  },
  {
    title: "SocialProofly",
    description: "A social proof and trust-building platform designed to boost conversions with real-time notifications and engagement widgets.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    liveUrl: "https://socialproofly.com",
    category: "saas",
  },
];
