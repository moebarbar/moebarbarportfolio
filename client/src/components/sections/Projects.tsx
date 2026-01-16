import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, LayoutTemplate } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neon Analytics Dashboard",
    description: "A visually stunning, high-performance analytics dashboard. Focused on complex data visualization using Recharts, dark mode aesthetics, and a responsive grid layout that adapts perfectly to any device.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    image: "linear-gradient(to bottom right, #2E1065, #000000)", 
    link: "#",
    github: "#",
    badge: "UI / UX Focused"
  },
  {
    id: 2,
    title: "Visual Workflow Builder",
    description: "An interactive drag-and-drop interface for building automation flows. Demonstrates complex state management, custom node rendering, and smooth canvas interactions using React Flow.",
    tags: ["React", "React Flow", "Zustand", "Dnd-Kit", "Tailwind"],
    image: "linear-gradient(to bottom right, #831843, #2a0a18)",
    link: "#",
    github: "#",
    badge: "Interactive UI"
  },
  {
    id: 3,
    title: "Lumina Landing Page",
    description: "A premium landing page for a SaaS product featuring scroll-driven animations, parallax effects, and glassmorphism UI elements. Optimized for Core Web Vitals and accessibility.",
    tags: ["Next.js", "GSAP", "Tailwind", "Radix UI"],
    image: "linear-gradient(to bottom right, #042f2e, #020617)",
    link: "#",
    github: "#",
    badge: "Motion Design"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-xl">
              Showcasing my ability to solve complex UI challenges and deliver polished, user-centric experiences.
            </p>
          </motion.div>
          
          <motion.a 
            href="https://github.com" 
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group"
          >
            View GitHub Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card/30 rounded-3xl p-6 md:p-10 border border-white/5 hover:border-primary/20 transition-colors"
            >
              {/* Image Side */}
              <div 
                className="h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-2xl relative"
                style={{ background: project.image }}
              >
                 <div className="absolute top-4 right-4 z-20">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10 text-white">
                        <LayoutTemplate className="w-3 h-3 text-accent" />
                        {project.badge}
                    </span>
                </div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 bg-black/40 backdrop-blur-sm">
                  <a href={project.link} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform border border-white/20">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content Side */}
              <div>
                <h3 className="text-3xl font-bold font-syne mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 md:hidden">
                   <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
