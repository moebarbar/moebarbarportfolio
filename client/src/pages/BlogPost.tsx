import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { updateMetaTags, resetMetaTags } from "@/lib/seo";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-bash";
import "@/styles/prism-dark.css";
import type { BlogPost as BlogPostType } from "@shared/schema";

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(`([^`]+)`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={match.index} className="text-white font-semibold">{match[2]}</strong>);
    } else if (match[4]) {
      parts.push(<code key={match.index} className="bg-white/10 px-2 py-0.5 rounded text-sm text-primary font-mono">{match[4]}</code>);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

interface ContentBlock {
  type: "paragraph" | "heading" | "code" | "list" | "ordered-list";
  content: string;
  items?: string[];
  lang?: string;
}

function parseContent(raw: string): ContentBlock[] {
  const lines = raw.split("\n");
  const blocks: ContentBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", content: line.replace("## ", "") });
      i++;
      continue;
    }

    if (line.startsWith("```")) {
      const lang = line.replace("```", "").trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: "code", content: codeLines.join("\n"), lang });
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push({ type: "ordered-list", content: "", items });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("• ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("• "))) {
        items.push(lines[i].replace(/^[-•]\s/, ""));
        i++;
      }
      blocks.push({ type: "list", content: "", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("- ") &&
      !lines[i].startsWith("• ") &&
      !lines[i].match(/^\d+\.\s/)
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }
    if (paragraphLines.length > 0) {
      blocks.push({ type: "paragraph", content: paragraphLines.join(" ") });
    }
  }

  return blocks;
}

function HighlightedCode({ code, lang }: { code: string; lang?: string }) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, lang]);

  const prismLang = lang === "tsx" ? "tsx" : lang === "ts" ? "typescript" : lang === "jsx" ? "jsx" : lang === "js" ? "javascript" : lang === "css" ? "css" : lang === "bash" ? "bash" : "javascript";

  return (
    <code
      ref={codeRef}
      className={`language-${prismLang} text-sm leading-relaxed font-mono whitespace-pre`}
    >
      {code}
    </code>
  );
}

function ContentRenderer({ content }: { content: string }) {
  const blocks = useMemo(() => parseContent(content), [content]);

  return (
    <div className="space-y-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={idx} className="text-2xl sm:text-3xl font-bold font-syne text-white mt-14 mb-4 pt-2 border-t border-white/5">
                {parseInlineMarkdown(block.content)}
              </h2>
            );

          case "code":
            return (
              <div key={idx} className="my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] backdrop-blur-sm">
                {block.lang && (
                  <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-xs text-muted-foreground font-mono uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary/60" />
                    {block.lang}
                  </div>
                )}
                <pre className="p-5 overflow-x-auto !bg-transparent !m-0">
                  <HighlightedCode code={block.content} lang={block.lang} />
                </pre>
              </div>
            );

          case "list":
            return (
              <ul key={idx} className="space-y-3 my-6 pl-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{parseInlineMarkdown(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ordered-list":
            return (
              <ol key={idx} className="space-y-3 my-6 pl-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="mt-0.5 text-primary font-bold font-mono text-sm shrink-0 w-6">{j + 1}.</span>
                    <span>{parseInlineMarkdown(item)}</span>
                  </li>
                ))}
              </ol>
            );

          case "paragraph":
          default:
            return (
              <p key={idx} className="text-zinc-300 leading-[1.85] text-base sm:text-lg">
                {parseInlineMarkdown(block.content)}
              </p>
            );
        }
      })}
    </div>
  );
}

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data, isLoading } = useQuery<{ success: boolean; data: BlogPostType }>({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const res = await fetch(`/api/blog/${slug}`);
      return res.json();
    },
    enabled: !!slug,
  });

  const post = data?.data;

  useEffect(() => {
    if (post) {
      updateMetaTags({
        title: `${post.title} | Moe Barbar Blog`,
        description: post.excerpt,
        url: `${window.location.origin}/blog/${post.slug}`,
        image: post.coverImage,
        type: "article",
        article: {
          publishedTime: new Date(post.publishedAt).toISOString(),
          tags: post.tags,
          author: "Moe Barbar",
        },
      });
    }
    return () => resetMetaTags();
  }, [post]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container px-6 mx-auto max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mb-4" />
              <div className="h-12 bg-muted rounded w-3/4 mb-6" />
              <div className="aspect-video bg-muted rounded-2xl mb-8" />
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="container px-6 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold font-syne mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const readTime = estimateReadTime(post.content);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <article className="container px-6 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 block">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {readTime} min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-12 sm:mb-16">
              <img
                src={post.coverImage}
                alt={post.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <ContentRenderer content={post.content} />
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
