import { motion } from "motion/react";
import { Users, Target, Zap } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">About <span className="text-gradient">Tech You</span></h1>
          <p className="text-lg text-white/60 leading-relaxed">
            We are a team of passionate technologists, designers, and problem solvers dedicated to building the future. Our mission is to empower students and businesses with powerful, scalable, and intelligent tech solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To democratize access to high-quality technology solutions, enabling anyone to build their ideas into reality.",
              color: "from-blue-500 to-cyan-400"
            },
            {
              icon: Zap,
              title: "Our Vision",
              desc: "A world where technology and AI seamlessly integrate to solve complex problems and enhance human potential.",
              color: "from-purple-500 to-pink-400"
            },
            {
              icon: Users,
              title: "Our Values",
              desc: "Innovation, integrity, and impact. We build products that matter, with a focus on quality and user experience.",
              color: "from-emerald-500 to-teal-400"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats or Timeline could go here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Join the Revolution</h2>
            <p className="text-white/70 mb-8">
              Whether you're a student looking for a standout college project or a business needing a custom AI solution, we're here to help you succeed.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
              Work With Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
