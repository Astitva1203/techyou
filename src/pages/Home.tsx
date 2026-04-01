import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Cpu, Sparkles, CheckCircle2, Bot } from "lucide-react";
import { cn } from "../lib/utils";

const services = [
  {
    title: "College Projects",
    description: "High-quality, well-documented projects in Java, Python, Web, and AI to help you ace your academics.",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "AI Solutions",
    description: "Custom chatbots, automation tools, and intelligent systems to scale your business operations.",
    icon: Bot,
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Full-Stack Web Dev",
    description: "Modern, responsive, and scalable web applications built with the latest technologies.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-400",
  },
];

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">We believe in Technology & AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight"
          >
            Build the Future with <br className="hidden md:block" />
            <span className="text-gradient">Tech You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            Empowering students and businesses with powerful tech solutions. From cutting-edge AI tools to full-stack web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://arithmo-sepia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center text-white"
            >
              Explore Arithmo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br", service.color)}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-sm font-medium text-white/80 group-hover:text-white flex items-center gap-1 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight: Arithmo */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
                <span className="text-sm font-medium">Featured Product</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Meet <span className="text-accent">Arithmo</span>
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                The ultimate AI-powered math solving and learning platform. Arithmo doesn't just give you the answer; it guides you through the process step-by-step, helping you truly understand the concepts.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Step-by-step AI explanations",
                  "Interactive learning modules",
                  "Instant problem solving",
                  "Progress tracking & analytics"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://arithmo-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2 glow-accent"
              >
                Discover Arithmo
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl glass-card border border-white/10 overflow-hidden shadow-2xl relative">
                {/* Mock UI for Arithmo */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black p-6 flex flex-col">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm font-display font-medium text-white/50">Arithmo Workspace</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <p className="text-sm text-white/70 mb-2">Solve for x:</p>
                      <p className="font-mono text-lg text-accent">2x² + 5x - 3 = 0</p>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg p-4 border border-white/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Bot className="w-3 h-3 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm text-white/90">Let's use the quadratic formula:</p>
                            <p className="font-mono text-xs text-white/60 mt-1">x = [-b ± √(b² - 4ac)] / 2a</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 opacity-50">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Bot className="w-3 h-3 text-accent" />
                          </div>
                          <div>
                            <p className="text-sm text-white/90">Substitute the values:</p>
                            <p className="font-mono text-xs text-white/60 mt-1">a = 2, b = 5, c = -3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
