import { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { updateMetaTags, resetMetaTags } from "@/lib/seo";
import type { BlogPost as BlogPostType } from "@shared/schema";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24">
        <article className="container px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 block">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
                5 min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-4 sm:mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12">
              <img
                src={post.coverImage}
                alt={post.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-syne prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-zinc-300 prose-p:leading-relaxed
              prose-strong:text-white
              prose-code:bg-white/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
              prose-ul:text-zinc-300 prose-ol:text-zinc-300
              prose-li:marker:text-primary
            ">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('```')) {
                  return null;
                }
                if (paragraph.trim() === '') {
                  return null;
                }
                if (paragraph.startsWith('- ')) {
                  return null;
                }
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                  return null;
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
