import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Loader2, Youtube } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Contact() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultService = queryParams.get("service") || "";
  const defaultProduct = queryParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultService ? `Inquiry about ${defaultService}` : defaultProduct ? `Early Access: ${defaultProduct}` : "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-lg text-white/60 leading-relaxed">
            Ready to build something amazing? Have questions about Arithmo? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8">Let's Talk</h2>
            <p className="text-white/60 mb-12 leading-relaxed">
              Whether you need a custom AI solution, a full-stack web application, or just want to say hi, our team is ready to help you achieve your goals.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email Us", detail: "techyou2026@gmail.com" },
                { icon: Phone, title: "Call Us", detail: "+91 00000 00000" },
                { icon: MapPin, title: "Visit Us", detail: "Wazirabad, New Delhi, India" },
                { icon: Youtube, title: "YouTube Channel", detail: "@techyou2026", link: "https://youtube.com/@techyou2026?si=s7YSQENkDypGpdwd" },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white/60 hover:text-primary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-white/60">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-emerald-400 text-sm text-center mt-4"
                  >
                    Thanks for reaching out! We'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center mt-4"
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
