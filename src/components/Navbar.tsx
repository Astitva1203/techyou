import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass py-3 border-white/10" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center glow-primary transition-all duration-300 group-hover:scale-105 overflow-hidden">
            <img src="/logo.svg" alt="Tech You Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Tech<span className="text-primary">You</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                location.pathname === link.path ? "text-white" : "text-white/70"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full glow-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass border-b border-white/10 py-4 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium py-2",
                location.pathname === link.path ? "text-primary" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
