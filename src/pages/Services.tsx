import { motion } from "motion/react";
import { Code, Bot, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "college-projects",
    title: "College Projects",
    description: "Get high-quality, well-documented projects tailored for your academic needs. We cover a wide range of technologies and domains.",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    features: [
      "Java & Python Applications",
      "Web Development Projects",
      "Machine Learning Models",
      "Comprehensive Documentation",
      "Code Walkthroughs"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Leverage the power of Artificial Intelligence to automate tasks, gain insights, and build intelligent products.",
    icon: Bot,
    color: "from-purple-500 to-pink-400",
    features: [
      "Custom Chatbots (NLP)",
      "Process Automation",
      "Data Analysis & Prediction",
      "Computer Vision Systems",
      "AI Integration via APIs"
    ]
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Development",
    description: "Build scalable, performant, and beautiful web applications using modern tech stacks like React, Node.js, and Next.js.",
    icon: Cpu,
    color: "from-emerald-500 to-teal-400",
    features: [
      "Responsive UI/UX Design",
      "Frontend Development (React/Vue)",
      "Backend APIs (Node/Express)",
      "Database Design (SQL/NoSQL)",
      "Cloud Deployment & Hosting"
    ]
  }
];

export function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-lg text-white/60 leading-relaxed">
            We provide end-to-end technology solutions to help you build, scale, and succeed. From academic projects to enterprise AI systems.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium border border-white/10"
                >
                  Request Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-2xl glass-card border border-white/10 overflow-hidden relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
