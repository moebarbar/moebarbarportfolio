import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Support Agent SaaS",
    description: "A customer support automation platform featuring a custom-trained AI chatbot. Reduces ticket volume by 40% using RAG (Retrieval Augmented Generation) to answer queries from documentation.",
    tags: ["React", "OpenAI API", "Node.js", "Vector DB", "Tailwind"],
    image: "linear-gradient(to bottom right, #4c1d95, #0f172a)", 
    link: "#",
    github: "#",
    badge: "AI Powered"
  },
  {
    id: 2,
    title: "Analytics Dashboard Pro",
    description: "High-performance SaaS dashboard for real-time data visualization. Features drag-and-drop widget customization, dark mode, and seamless API integration for live metrics.",
    tags: ["Next.js", "TypeScript", "Recharts", "Drizzle ORM", "Auth.js"],
    image: "linear-gradient(to bottom right, #042f2e, #020617)",
    link: "#",
    github: "#",
    badge: "SaaS Product"
  },
  {
    id: 3,
    title: "Workflow Automator",
    description: "Visual automation tool allowing users to connect different apps and trigger AI actions. Similar to Zapier but focused on generative AI content creation workflows.",
    tags: ["React Flow", "Express", "PostgreSQL", "Webhooks", "Redis"],
    image: "linear-gradient(to bottom right, #831843, #2a0a18)",
    link: "#",
    github: "#",
    badge: "Automation"
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
            <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Real-world applications showcasing AI integration, SaaS architecture, and complex frontend logic.
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
                        <Sparkles className="w-3 h-3 text-accent" />
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
