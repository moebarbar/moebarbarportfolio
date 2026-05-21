import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Loader2, AlertCircle, Filter, ArrowLeft, Sparkles, Code2, Briefcase, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { projects, categories, type Project } from "@/data/projects";
import { updateMetaTags, resetMetaTags } from "@/lib/seo";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const [isInView, setIsInView] = useState(false);
  const [expanded, setExpanded] = useState(false);
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
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
      onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(project.liveUrl, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <div className="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-cyan-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? "" : ""}`}>
          <div
            ref={containerRef}
            className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px] overflow-hidden bg-black/40 ${isReversed ? "lg:order-2" : ""}`}
          >
            {isInView && (
              <>
                {status === "loading" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
                    <Loader2 className="w-7 h-7 text-primary animate-spin mb-2" />
                    <span className="text-xs text-muted-foreground">Loading preview...</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-primary/10 z-10 p-6 text-center">
                    <AlertCircle className="w-10 h-10 text-amber-500/70 mb-3" />
                    <p className="text-white/80 font-medium mb-1">Preview Unavailable</p>
                    <p className="text-xs text-muted-foreground mb-4">This site doesn't allow embedding</p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Open Live
                    </a>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                )}
              </>
            )}

            {!isInView && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
            )}

            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                {categoryLabel}
              </span>
            </div>
          </div>

          <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}>
            <div className="mb-1">
              <span className="text-xs font-medium text-primary/70 uppercase tracking-widest">
                {project.tagline}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-syne mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="mt-0.5 shrink-0">
                  <Lightbulb size={16} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">The Concept</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {expanded ? project.concept : project.concept.slice(0, 150) + (project.concept.length > 150 ? "..." : "")}
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-3 mb-4">
                      <div className="mt-0.5 shrink-0">
                        <Briefcase size={16} className="text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">My Role</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{project.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-0.5 shrink-0">
                        <Sparkles size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">Key Highlights</h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(!expanded);
                }}
                className="text-xs font-medium text-primary hover:text-white transition-colors"
                data-testid={`toggle-details-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {expanded ? "Show Less" : "Read More About This Project"}
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={14} className="text-white/40" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">Tech Stack</h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-[11px] font-medium rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                data-testid={`project-live-link-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <ExternalLink size={16} />
                View Live Site
                <span className="text-xs opacity-60 ml-1 hidden sm:inline">{new URL(project.liveUrl).hostname}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    updateMetaTags({
      title: "Projects | Moe Barbar - Full-Stack Developer Portfolio",
      description: "Explore the full collection of web projects by Moe Barbar — from full-stack SaaS platforms to creative business sites, all built end-to-end with modern web technologies.",
      url: `${window.location.origin}/projects`,
    });
    window.scrollTo(0, 0);
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
            className="mb-8"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-syne mb-4 sm:mb-6">
              All <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of {projects.length} projects spanning web applications,
              landing pages, and digital experiences — each crafted with precision and care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex justify-center mb-10 sm:mb-14"
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-2xl">
              {categories.map((cat) => {
                const count = cat.id === "all"
                  ? projects.length
                  : projects.filter(p => p.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative flex flex-col items-center gap-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary/15 text-primary border border-primary/40 shadow-[0_0_24px_-6px_rgba(124,58,237,0.3)]"
                        : "bg-white/[0.03] text-zinc-500 border border-white/[0.06] hover:border-white/15 hover:text-zinc-300"
                    }`}
                    data-testid={`filter-${cat.id}`}
                  >
                    {cat.id === "all" && <Filter size={16} className={isActive ? "text-primary" : "text-zinc-600"} />}
                    <span className="text-xs sm:text-sm">{cat.label}</span>
                    <span className={`text-[10px] font-mono ${isActive ? "text-primary/60" : "text-zinc-700"}`}>
                      {count} {count === 1 ? "project" : "projects"}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-8 sm:space-y-10"
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
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-cyan-500/15 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl px-8 sm:px-14 py-10 sm:py-14 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold font-syne mb-3">
                  Have a project in mind?
                </h2>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                  I'm always open to discussing new opportunities and exciting projects.
                  Let's build something exceptional together.
                </p>
                <Link
                  href="/"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.querySelector("#contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 200);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-[0_0_24px_-6px_rgba(124,58,237,0.4)]"
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
