import { Link } from "react-router-dom";
import { Cpu, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.svg" alt="Tech You Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Tech<span className="text-primary">You</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-6">
              We believe in Technology & AI. Helping students and businesses build powerful tech solutions for a better tomorrow.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">College Projects</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-primary transition-colors">Web Development</Link></li>
              <li><a href="https://arithmo-sepia.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">Arithmo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tech You. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
