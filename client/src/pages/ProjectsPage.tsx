import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Loader2, AlertCircle, Filter, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { projects, categories, type Project } from "@/data/projects";
import { updateMetaTags, resetMetaTags } from "@/lib/seo";

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      if (status === "loading") setStatus("error");
    }, 10000);
    return () => clearTimeout(timer);
  }, [isInView, status]);

  const categoryLabel = categories.find(c => c.id === project.category)?.label || project.category;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative"
      data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.15)]">
        <div
          ref={containerRef}
          className="relative aspect-[16/10] overflow-hidden bg-black/40"
        >
          {isInView && (
            <>
              {status === "loading" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
                  <Loader2 className="w-6 h-6 text-primary animate-spin mb-2" />
                  <span className="text-xs text-muted-foreground">Loading...</span>
                </div>
              )}

              {status === "error" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 to-primary/10 z-10 p-4 text-center">
                  <AlertCircle className="w-8 h-8 text-amber-500/70 mb-2" />
                  <p className="text-white/80 text-sm font-medium mb-1">Preview Unavailable</p>
                  <p className="text-xs text-muted-foreground">Click below to view live</p>
                </div>
              )}

              <iframe
                src={project.liveUrl}
                title={`Preview of ${project.title}`}
                className={`w-full h-full border-0 transition-opacity duration-500 pointer-events-none ${
                  status === "loaded" ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
              />

              {status === "loaded" && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
              )}
            </>
          )}

          {!isInView && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}

          <div className="absolute top-3 left-3 z-20">
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
              {categoryLabel}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold font-syne mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 5).map(tech => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-zinc-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300"
            data-testid={`project-live-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ExternalLink size={15} />
            View Live Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    updateMetaTags({
      title: "Projects | Moe Barbar - Frontend Developer Portfolio",
      description: "Explore the full collection of web projects by Moe Barbar — from SaaS platforms to creative business sites, all built with modern frontend technologies.",
      url: `${window.location.origin}/projects`,
    });
    return () => resetMetaTags();
  }, []);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const activeCategoryCount = filteredProjects.length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              data-testid="back-to-home"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-4 sm:mb-6">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A curated collection of {projects.length} projects spanning web applications, 
              landing pages, and digital experiences — each crafted with precision and care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
          >
            {categories.map((cat) => {
              const count = cat.id === "all"
                ? projects.length
                : projects.filter(p => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive
                      ? "bg-primary text-white shadow-[0_0_20px_-4px_rgba(124,58,237,0.5)]"
                      : "bg-white/5 text-zinc-400 border border-white/10 hover:border-primary/30 hover:text-primary"
                    }
                  `}
                  data-testid={`filter-${cat.id}`}
                >
                  <span className="flex items-center gap-2">
                    {cat.id === "all" && <Filter size={14} />}
                    {cat.label}
                    <span className={`text-xs ${isActive ? "text-white/70" : "text-zinc-600"}`}>
                      ({count})
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-8 text-center"
          >
            Showing {activeCategoryCount} project{activeCategoryCount !== 1 ? "s" : ""}
            {activeCategory !== "all" && (
              <> in <span className="text-primary font-medium">{categories.find(c => c.id === activeCategory)?.label}</span></>
            )}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No projects in this category yet.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 sm:mt-28 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl px-8 sm:px-12 py-10 sm:py-14 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold font-syne mb-3">
                  Have a project in mind?
                </h2>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <Link
                  href="/#contact"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_-4px_rgba(124,58,237,0.4)]"
                  data-testid="projects-contact-cta"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
