import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-syne text-white mb-1 sm:mb-2">MOE BARBAR</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} Moe Barbar. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors p-2">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/moe-barbar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/immoebar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            Built with ❤️ by{" "}
            <a 
              href="https://www.linkedin.com/in/moe-barbar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              Moe Barbar
            </a>
            {" "}•{" "}
            <a 
              href="https://www.linkedin.com/in/moe-barbar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            {" "}•{" "}
            <a 
              href="https://instagram.com/immoebar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
