import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend-Focused Full-Stack Developer",
    company: "Freelance / Contract",
    period: "2023 - Present",
    description: "Building custom SaaS solutions and AI-powered web applications. Specializing in RAG chatbots, automation dashboards, and high-performance React frontends connected to Node.js backends."
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "TechAgency Studio",
    period: "2021 - 2023",
    description: "Led the frontend development of multiple client projects using React and Next.js. Implemented responsive designs, complex state management, and optimized API integrations."
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "Digital Innovations",
    period: "2020 - 2021",
    description: "Collaborated on full-stack web projects. Assisted in backend API development with Node.js and maintained legacy frontend codebases."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold font-syne mb-4">Experience</h2>
          <p className="text-muted-foreground">My professional journey in web development and AI.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-1/2 z-10 hidden md:block" />
                
                <div className="flex-1 md:w-1/2">
                   {/* Mobile Dot */}
                   <div className="w-3 h-3 rounded-full bg-primary mb-2 md:hidden" />
                   
                   <div className={`bg-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors ${
                     index % 2 === 0 ? "md:text-left" : "md:text-right"
                   }`}>
                     <span className="text-sm text-primary font-mono mb-2 block">{exp.period}</span>
                     <h3 className="text-xl font-bold font-syne text-white">{exp.role}</h3>
                     <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                     <p className="text-sm text-zinc-400 leading-relaxed">
                       {exp.description}
                     </p>
                   </div>
                </div>
                
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
