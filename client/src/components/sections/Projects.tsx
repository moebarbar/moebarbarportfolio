import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, AlertCircle, Loader2 } from "lucide-react";

/**
 * ============================================================================
 * PROJECT DATA - ADD YOUR PROJECTS HERE
 * ============================================================================
 * 
 * To add a new project, simply add a new object to the array below with:
 * - title: Project name
 * - description: Short description (1-2 lines)
 * - techStack: Array of technologies used
 * - liveUrl: URL to the live site (will be embedded in iframe)
 * 
 * Example:
 * {
 *   title: "My New Project",
 *   description: "A brief description of what this project does.",
 *   techStack: ["React", "TypeScript", "Tailwind"],
 *   liveUrl: "https://my-project.com"
 * }
 */
const projects = [
  {
    title: "Créatifia",
    description: "A creative agency delivering innovative digital solutions with a sleek, modern interface and seamless user experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    liveUrl: "https://creatifia.com"
  },
  {
    title: "Postphoria",
    description: "A full-featured social media management platform with AI-powered content generation, bulk scheduling, RSS auto-posting, and smart analytics.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Drizzle"],
    liveUrl: "https://postphoria.com"
  },
  {
    title: "Komorebi Coffee",
    description: "An artisanal coffee shop website with immersive storytelling, elegant typography, and a warm atmospheric design that mirrors the in-store experience.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
    liveUrl: "https://komorebi.creatifia.com"
  },
  {
    title: "Analyio",
    description: "A premium SaaS landing page with modern design, smooth animations, and conversion-focused UI elements.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Express", "PostgreSQL", "Drizzle"],
    liveUrl: "https://saa-s-landing-page--moebarbar.replit.app"
  },
  {
    title: "SocialProofly",
    description: "A social proof and trust-building platform designed to boost conversions with real-time notifications and engagement widgets.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    liveUrl: "https://socialproofly.com"
  }
];
// ============================================================================

interface ProjectPreviewProps {
  url: string;
  title: string;
}

function ProjectPreview({ url, title }: ProjectPreviewProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      if (status === "loading") {
        setStatus("error");
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isInView, status]);

  const handleLoad = () => {
    setStatus("loaded");
  };

  const handleError = () => {
    setStatus("error");
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 border border-white/10"
    >
      {isInView && (
        <>
          {status === "loading" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
              <Loader2 className="w-8 h-8 text-primary animate-spin mb-3" />
              <span className="text-sm text-muted-foreground">Loading preview...</span>
            </div>
          )}

          {status === "error" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-10 p-6 text-center">
              <AlertCircle className="w-10 h-10 text-amber-500 mb-3" />
              <p className="text-white font-medium mb-2">Preview Unavailable</p>
              <p className="text-sm text-muted-foreground mb-4">
                This site doesn't allow embedding. Click below to view it directly.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={16} />
                Open Live Site
              </a>
            </div>
          )}

          <iframe
            src={url}
            title={`Preview of ${title}`}
            className={`w-full h-full border-0 transition-opacity duration-500 ${
              status === "loaded" ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleLoad}
            onError={handleError}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            loading="lazy"
          />

          {status === "loaded" && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}
        </>
      )}

      {!isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-label="Featured projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-3 sm:mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-xl">
              Showcasing my ability to solve complex UI challenges and deliver polished, user-centric experiences.
            </p>
          </motion.div>
          
          <motion.a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors group"
          >
            View GitHub Profile <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group"
              data-testid={`project-${index}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Preview Side */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ProjectPreview url={project.liveUrl} title={project.title} />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-syne mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
                      data-testid={`project-link-${index}`}
                    >
                      <ExternalLink size={18} />
                      Open Live Site
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-16 border-t border-white/5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
