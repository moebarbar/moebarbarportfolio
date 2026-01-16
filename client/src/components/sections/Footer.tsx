import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-syne text-white mb-2">MOE BARBAR</h3>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Moe Barbar. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/moe-barbar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/immoebar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
