import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Leading the frontend migration to Next.js, improving site performance by 40%. Mentoring junior developers and establishing a new design system."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Digital Agency",
    period: "2021 - 2023",
    description: "Built award-winning marketing sites for Fortune 500 clients. Implemented complex WebGL animations and headless CMS integrations."
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "StartUp Inc",
    period: "2019 - 2021",
    description: "Core member of the product team. Developed the MVP using React and Redux. Collaborated closely with designers to implement pixel-perfect UI."
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
          <h2 className="text-4xl font-bold font-syne mb-4">My Journey</h2>
          <p className="text-muted-foreground">The path that led me here.</p>
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
