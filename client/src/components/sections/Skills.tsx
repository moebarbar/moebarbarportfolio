import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Cloud,
  Wrench,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    items: [
      "TypeScript / JavaScript",
      "React • Next.js",
      "Tailwind CSS • shadcn/ui",
      "Framer Motion • GSAP",
      "TanStack Query • Zustand",
      "Vite • Turbopack",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-accent" />,
    items: [
      "Node.js • Bun",
      "Express • Fastify • Hono",
      "Next.js API Routes / Server Actions",
      "REST • GraphQL • tRPC",
      "Zod Validation",
      "WebSockets • SSE",
    ],
  },
  {
    category: "Database & ORM",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    items: [
      "PostgreSQL • MySQL • SQLite",
      "MongoDB • Mongoose",
      "Drizzle ORM • Prisma",
      "Redis (cache / queue)",
      "Supabase • Neon",
      "Schema design & migrations",
    ],
  },
  {
    category: "Auth & Payments",
    icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
    items: [
      "Auth.js (NextAuth)",
      "Clerk • Supabase Auth • Lucia",
      "JWT • Sessions • OAuth",
      "Stripe Checkout & Subscriptions",
      "Webhooks & secure delivery",
      "Role-based access control",
    ],
  },
  {
    category: "Infra & DevOps",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    items: [
      "Vercel • Railway • Render",
      "Netlify • Fly.io • AWS / GCP",
      "S3 • Cloudflare R2 • Supabase Storage",
      "BullMQ • Inngest • Trigger.dev",
      "Resend • Postmark • SendGrid",
      "GitHub Actions CI/CD",
    ],
  },
  {
    category: "Tooling & Testing",
    icon: <Wrench className="w-6 h-6 text-amber-400" />,
    items: [
      "pnpm • npm • Bun",
      "Git • GitHub workflows",
      "Vitest • Jest (unit)",
      "Playwright (E2E)",
      "ESLint • Prettier",
      "Figma • Accessibility (a11y)",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-label="Full-stack technical capabilities" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-4 sm:mb-6">The Full Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the first pixel to production deploy — here's everything I use to design, build, and ship complete web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 group"
            >
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                {group.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-syne mb-3 sm:mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
