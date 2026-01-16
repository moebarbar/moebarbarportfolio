import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend-Focused Full-Stack Developer",
    company: "Freelance / Contract",
    period: "2023 - Present",
    description: "Designing and developing premium user interfaces for web applications. Focused on component library creation, performance optimization, and implementing complex animations using Framer Motion."
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Creative Studio",
    period: "2021 - 2023",
    description: "Spearheaded the frontend modernization of client websites using React and Next.js. Improved Core Web Vitals scores by 35% and introduced a new accessibility-first design system."
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Digital Solutions Agency",
    period: "2019 - 2021",
    description: "Built responsive layouts from Figma designs with pixel-perfect accuracy. Collaborated with backend teams to integrate RESTful APIs into dynamic front-end applications."
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
          <h2 className="text-3xl sm:text-4xl font-bold font-syne mb-3 sm:mb-4">Professional Journey</h2>
          <p className="text-muted-foreground">My path to becoming a UI/UX specialist.</p>
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
                   
                   <div className={`bg-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-primary/20 transition-colors ${
                     index % 2 === 0 ? "md:text-left" : "md:text-right"
                   }`}>
                     <span className="text-xs sm:text-sm text-primary font-mono mb-1 sm:mb-2 block">{exp.period}</span>
                     <h3 className="text-lg sm:text-xl font-bold font-syne text-white">{exp.role}</h3>
                     <h4 className="text-muted-foreground font-medium mb-3 sm:mb-4 text-sm sm:text-base">{exp.company}</h4>
                     <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
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
