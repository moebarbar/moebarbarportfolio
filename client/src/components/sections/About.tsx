import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-syne font-bold mb-4 text-white">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Frontend-Focused Full-Stack Engineer who bridges the gap between design and engineering. With a strong foundation in modern frontend architectures and backend systems, I build scalable web applications that look beautiful and perform flawlessly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I don't just write code; I craft digital experiences. My approach combines technical precision with creative flair, ensuring every pixel serves a purpose and every interaction feels natural.
              </p>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-primary/20 rounded-3xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-4xl md:text-5xl font-bold font-syne mb-8">
              Engineering with <br />
              <span className="text-gradient-primary">Design Soul.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">Creative Developer</h4>
                  <p className="text-muted-foreground">I bring designs to life with smooth animations, interactive elements, and responsive layouts.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">Performance Obsessed</h4>
                  <p className="text-muted-foreground">Slow sites lose users. I optimize every line of code for maximum speed and accessibility.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">Full-Stack Architect</h4>
                  <p className="text-muted-foreground">While I love frontend, I'm fully capable of building robust backends with Node, SQL, and APIs.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
