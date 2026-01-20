import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Sparkles } from "lucide-react";

const codeSnippets = [
  {
    title: "Smooth Animations",
    language: "tsx",
    code: `<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  <Button>Click Me</Button>
</motion.div>`,
  },
  {
    title: "Responsive Design",
    language: "css",
    code: `.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    padding: 4rem;
  }
}`,
  },
  {
    title: "React Hooks",
    language: "tsx",
    code: `const useMousePosition = () => {
  const [position, setPosition] = 
    useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return position;
};`,
  },
];

function TypeWriter({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const charsPerFrame = 3;
      const timeout = setTimeout(() => {
        const nextIndex = Math.min(currentIndex + charsPerFrame, text.length);
        setDisplayText(text.slice(0, nextIndex));
        setCurrentIndex(nextIndex);
      }, 25);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
      )}
    </span>
  );
}

function SyntaxHighlight({ code, isTyping }: { code: string; isTyping: boolean }) {
  if (isTyping) {
    return <TypeWriter text={code} />;
  }

  const highlightCode = (text: string) => {
    return text.split("\n").map((line, lineIndex) => {
      const parts = line.split(/(\s+)/);
      return (
        <div key={lineIndex}>
          {parts.map((part, partIndex) => {
            if (/^(const|let|var|function|return|import|export|from|if|else|useState|useEffect)$/.test(part)) {
              return <span key={partIndex} className="text-purple-400">{part}</span>;
            }
            if (/^(string|number|boolean|void|any)$/.test(part)) {
              return <span key={partIndex} className="text-cyan-400">{part}</span>;
            }
            if (/^<[a-zA-Z]/.test(part) || /^<\//.test(part) || />$/.test(part)) {
              return <span key={partIndex} className="text-pink-400">{part}</span>;
            }
            if (/^[a-zA-Z]+="/.test(part) || /^[a-zA-Z]+={/.test(part)) {
              return <span key={partIndex} className="text-green-400">{part}</span>;
            }
            if (/^".*"$/.test(part) || /^'.*'$/.test(part)) {
              return <span key={partIndex} className="text-amber-400">{part}</span>;
            }
            if (/^@media|^\./.test(part)) {
              return <span key={partIndex} className="text-cyan-400">{part}</span>;
            }
            if (/^\{|\}|\(|\)|=>|:/.test(part)) {
              return <span key={partIndex} className="text-zinc-400">{part}</span>;
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return <>{highlightCode(code)}</>;
}

export function CodeShowcase() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setIsTyping(true);
    setKey((prev) => prev + 1);
  };

  const handleTabChange = (index: number) => {
    setActiveSnippet(index);
    setIsTyping(true);
    setKey((prev) => prev + 1);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-4">
            <Sparkles size={14} />
            Live Code Demo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-syne mb-4">
            Code That <span className="text-gradient-primary">Speaks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clean, readable, and maintainable code is at the heart of everything I build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl shadow-primary/5">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono">
                  {codeSnippets[activeSnippet].language}
                </span>
                <button
                  onClick={handleReplay}
                  className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                  title="Replay animation"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-4 pt-3 bg-black/40 overflow-x-auto">
              {codeSnippets.map((snippet, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                    activeSnippet === index
                      ? "bg-white/10 text-white border-t border-l border-r border-white/10"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                >
                  {snippet.title}
                </button>
              ))}
            </div>

            {/* Code Area */}
            <div className="p-4 sm:p-6 min-h-[280px] sm:min-h-[320px] font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              <pre className="text-zinc-300">
                <code key={key}>
                  <SyntaxHighlight
                    code={codeSnippets[activeSnippet].code}
                    isTyping={isTyping}
                  />
                </code>
              </pre>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Play size={12} className="text-green-500" />
                <span>Ready</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>Spaces: 2</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

          {/* Stats Below */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: "Lines of Code", value: "50K+", desc: "Written & Maintained" },
              { label: "Components", value: "200+", desc: "Built & Shipped" },
              { label: "Performance", value: "95+", desc: "Lighthouse Score" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="text-2xl sm:text-3xl font-bold font-syne text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white font-medium">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
