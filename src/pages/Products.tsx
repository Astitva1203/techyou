import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, PlayCircle, Brain, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Products() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
            <span className="text-sm font-medium">Flagship Product</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Meet <span className="text-accent">Arithmo</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            The AI-powered math solving and learning platform that doesn't just give you the answer, but teaches you how to get there.
          </p>
        </motion.div>

        {/* Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">
              Master Math with AI
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Arithmo uses advanced natural language processing and symbolic computation to understand your math problems and generate step-by-step explanations tailored to your learning style.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Upload images of handwritten problems",
                "Interactive step-by-step guidance",
                "Identify knowledge gaps instantly",
                "Practice similar problems automatically"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <a
                href="https://arithmo-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors inline-flex items-center gap-2 glow-accent"
              >
                Try Arithmo Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <button className="px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/5 transition-colors inline-flex items-center gap-2 text-white">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
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
              <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col">
                <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-black/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-medium text-white/50">arithmo.techyou.com</div>
                  <div className="w-16" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/50 mb-1">Problem</p>
                      <p className="font-mono text-lg text-white">∫(2x + 3)e^x dx</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/20">
                      Calculus
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Brain className="w-4 h-4 text-accent" />
                      </div>
                      <div className="bg-black/40 rounded-2xl rounded-tl-sm p-4 border border-white/5 flex-1">
                        <p className="text-sm text-white/90 mb-2">Let's solve this using integration by parts. The formula is:</p>
                        <p className="font-mono text-xs text-accent mb-3">∫u dv = uv - ∫v du</p>
                        <p className="text-sm text-white/90 mb-2">First, let's choose our u and dv:</p>
                        <ul className="list-disc list-inside text-sm text-white/70 space-y-1 font-mono">
                          <li>u = 2x + 3</li>
                          <li>dv = e^x dx</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Brain className="w-4 h-4 text-accent" />
                      </div>
                      <div className="bg-black/40 rounded-2xl rounded-tl-sm p-4 border border-white/5 flex-1">
                        <p className="text-sm text-white/90">Now find du and v...</p>
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Adaptive Learning",
              desc: "Arithmo learns how you learn, adjusting its explanations to match your current understanding level."
            },
            {
              icon: Target,
              title: "Exam Prep",
              desc: "Generate custom practice tests based on the topics you struggle with the most."
            },
            {
              icon: Zap,
              title: "Instant Feedback",
              desc: "Don't wait for a tutor. Get immediate, accurate feedback on your steps, not just the final answer."
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
