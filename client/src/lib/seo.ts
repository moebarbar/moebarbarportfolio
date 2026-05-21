export function updateMetaTags(options: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    tags?: string[];
    author?: string;
  };
}) {
  const {
    title = "Moe Barbar | Full-Stack Web Developer",
    description = "US-based Full-Stack Web Developer building complete web applications end-to-end — React, Next.js, TypeScript, Node.js, PostgreSQL, Stripe, and deployment. Open to W2 & 1099, short-term and long-term.",
    url,
    image,
    type = "website",
    article,
  } = options;

  document.querySelectorAll('meta[data-dynamic="true"]').forEach((el) => el.remove());

  document.title = title;

  const setMeta = (attr: string, value: string, content: string, dynamic = false) => {
    let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
    if (dynamic) {
      el.setAttribute("data-dynamic", "true");
    }
  };

  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:type", type);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);

  if (url) {
    setMeta("property", "og:url", url);
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }

  if (image) {
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:image", image);
  }

  if (article) {
    if (article.publishedTime) {
      setMeta("property", "article:published_time", article.publishedTime, true);
    }
    if (article.author) {
      setMeta("property", "article:author", article.author, true);
    }
    if (article.tags) {
      article.tags.forEach((tag) => {
        const el = document.createElement("meta");
        el.setAttribute("property", "article:tag");
        el.setAttribute("content", tag);
        el.setAttribute("data-dynamic", "true");
        document.head.appendChild(el);
      });
    }
  }
}

export function resetMetaTags() {
  document.querySelectorAll('meta[data-dynamic="true"]').forEach((el) => el.remove());
  updateMetaTags({});
}
