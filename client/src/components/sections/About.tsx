import { motion } from "framer-motion";
import { Layers, Palette, Zap } from "lucide-react";
import portrait1 from "@assets/IMG_8295_copy_1769822586012.jpg";
import portraitWorking from "@assets/IMG_8230_1768523511496.JPG";

export function About() {
  return (
    <section id="about" aria-label="About Moe Barbar" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Creative Portrait Composition */}
            <div className="relative group">
               {/* Back glowing shape */}
               <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl rounded-[30px] group-hover:opacity-50 transition-opacity duration-500" />
               
               {/* Main Frame */}
               <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-[20px] sm:rounded-[30px] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none" />

                  {/* Primary Image (Masked) */}
                  <img 
                    src={portrait1}
                    alt="Moe Barbar"
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

                  {/* Secondary Image (Reveal on Hover) */}
                  <img 
                    src={portraitWorking}
                    alt="Moe Barbar working"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none group-hover:bg-primary/20 group-hover:mix-blend-overlay" />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                     <div className="inline-block px-2 sm:px-3 py-1 mb-2 sm:mb-3 text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full">
                        System.Identity
                     </div>
                     <h3 className="text-xl sm:text-2xl md:text-3xl font-syne font-bold text-white mb-1 sm:mb-2">Moe Barbar</h3>
                     <p className="text-zinc-400 text-sm sm:text-base">Frontend Engineer</p>
                  </div>
               </div>

               {/* Decorative Elements */}
               <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl sm:rounded-tr-3xl" />
               <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl sm:rounded-bl-3xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-6 sm:mb-8 leading-[1.2]">
              Elevating the <br />
              <span className="text-gradient-primary">User Experience.</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
               I am a Frontend-focused Full-Stack Web Developer with a passion for building beautiful, responsive, and high-performance web applications. My main strength is crafting polished user interfaces that delight users.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-primary/20">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-syne">UI/UX Obsessed</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">I don't just implement designs; I enhance them. I focus on spacing, typography, and visual hierarchy to create premium experiences.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-accent/20">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-syne">Performance First</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Smooth 60fps animations and instant load times. I optimize bundles, assets, and rendering for peak performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1 transition-colors group-hover:bg-purple-500/20">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 font-syne">Full-Stack Context</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">I understand the backend, which makes me a better frontend developer. I can connect APIs and handle data efficiently.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
