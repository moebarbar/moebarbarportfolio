import { motion } from "framer-motion";
import { Layers, Palette, Zap } from "lucide-react";

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
              
              <h3 className="text-2xl font-syne font-bold mb-4 text-white">The Frontend Craftsman</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a Frontend-focused Full-Stack Web Developer with a passion for building beautiful, responsive, and high-performance web applications. My main strength is crafting polished user interfaces that delight users.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While I have practical experience with Node.js backends and AI integrations, my heart lies in the frontend. I obsess over micro-interactions, accessibility, and pixel-perfect design implementation.
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
              Elevating the <br />
              <span className="text-gradient-primary">User Experience.</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">UI/UX Obsessed</h4>
                  <p className="text-muted-foreground">I don't just implement designs; I enhance them. I focus on spacing, typography, and visual hierarchy to create premium experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">Performance First</h4>
                  <p className="text-muted-foreground">Smooth 60fps animations and instant load times. I optimize bundles, assets, and rendering for peak performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-syne">Full-Stack Context</h4>
                  <p className="text-muted-foreground">I understand the backend, which makes me a better frontend developer. I can connect APIs and handle data efficiently.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
