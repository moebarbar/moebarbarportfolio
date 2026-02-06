import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Figma, 
  Layout, 
  MonitorSmartphone,
  Server
} from "lucide-react";

const skills = [
  {
    category: "Frontend Core",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Next.js"]
  },
  {
    category: "UI & Styling",
    icon: <Layout className="w-6 h-6 text-accent" />,
    items: ["Tailwind CSS", "Framer Motion", "GSAP", "Responsive Design", "Shadcn UI"]
  },
  {
    category: "Design & UX",
    icon: <Figma className="w-6 h-6 text-purple-400" />,
    items: ["Figma", "Accessibility (a11y)", "User Flows", "Wireframing", "Prototyping"]
  },
  {
    category: "Supporting Skills",
    icon: <Server className="w-6 h-6 text-pink-400" />,
    items: ["Node.js", "Git/GitHub", "API Integration", "Basic AI Integration", "Vite"]
  }
];

export function Skills() {
  return (
    <section id="skills" aria-label="Technical skills and capabilities" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-4 sm:mb-6">Technical Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise is centered on the frontend ecosystem, supported by solid full-stack knowledge.
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
