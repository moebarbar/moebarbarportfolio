import { motion } from "framer-motion";
import { 
  Bot,
  Cpu, 
  Database, 
  Layout, 
  Server,
  Workflow
} from "lucide-react";

const skills = [
  {
    category: "Frontend Excellence",
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "Responsive UI"]
  },
  {
    category: "AI & Automation",
    icon: <Bot className="w-6 h-6 text-accent" />,
    items: ["OpenAI API", "LangChain", "Chatbot UI", "Automation Workflows", "Prompt Engineering"]
  },
  {
    category: "Backend & Data",
    icon: <Database className="w-6 h-6 text-purple-400" />,
    items: ["Node.js", "Express", "PostgreSQL", "Prisma/Drizzle", "RESTful APIs", "Supabase"]
  },
  {
    category: "DevOps & Tools",
    icon: <Workflow className="w-6 h-6 text-pink-400" />,
    items: ["Git/GitHub", "Docker", "Vite", "CI/CD Pipelines", "Jest/Testing", "Agile/Scrum"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A modern, performance-driven stack focused on scalability and AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 group"
            >
              <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold font-syne mb-4">{group.category}</h3>
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
