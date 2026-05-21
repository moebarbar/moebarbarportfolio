import { motion } from "framer-motion";
import { ArrowDown, Code, Linkedin, Palette, Smartphone } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_neon_fluid_glassmorphism_background.png";

export function Hero() {
  return (
    <section aria-label="Hero introduction" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground font-medium">US-Based • Full-Stack • Open to W2 & 1099</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-syne leading-tight tracking-tighter mb-4 sm:mb-6"
          >
            Full-Stack Developer.
            <br />
            <span className="text-gradient-primary">Pixel Perfectionist.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed px-2"
          >
            I design, build, and ship complete web applications end-to-end — from polished React interfaces
            and smooth animations to type-safe APIs, databases, auth, and deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-medium text-base sm:text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)] text-center"
            >
              View Work
            </a>
            <a
              href="https://www.linkedin.com/in/moe-barbar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#0077B5] text-white rounded-full font-medium text-base sm:text-lg hover:bg-[#006097] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,119,181,0.3)]"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements for Decoration */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block"
      >
        <Code className="text-primary w-8 h-8" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block"
      >
        <Palette className="text-accent w-8 h-8" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-10 md:left-32 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl hidden lg:block"
      >
        <Smartphone className="text-purple-400 w-6 h-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-foreground w-6 h-6" />
      </motion.div>
    </section>
  );
}
