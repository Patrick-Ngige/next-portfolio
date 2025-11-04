"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { MessageCircle, Send, Mail, Zap, Calendar } from "lucide-react"

const projectTypes = ["Web Development", "App Design", "Graphic Design"]
const contactInfo = [
  { label: "Phone", value: "+1234567890", icon: Calendar, href: "tel:+1234567890" },
  { label: "Email", value: "hello@patrickngige.com", icon: Mail, href: "mailto:hello@patrickngige.com" },
]
const socialLinks = [
  { label: "LinkedIn", username: "patrickngige", icon: Zap, href: "https://linkedin.com/in/patrickngige" },
  { label: "GitHub", username: "patrickngige", icon: Zap, href: "https://github.com/patrickngige" },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      setFormData({ name: "", email: "", project: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  return (
    <section id="contact" className="section-padding bg-background-page section-bg section-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-2xl">
            <h2 className="text-section font-bold mb-lg gradient-text">Let&apos;s Create Something Amazing</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Ready to bring your creative technology vision to life? Let&apos;s discuss your project and explore the
              possibilities together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-glass rounded-card p-xl hover-glow h-full">
                <h3 className="text-2xl font-semibold mb-lg text-text-primary flex items-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-6 h-6 mr-3 text-accent-cyan relative"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute inset-0 bg-accent-cyan blur-md rounded-full"
                    />
                  </motion.div>
                  <span className="gradient-text-subtle">Send me a message</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background-page/50 border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 backdrop-blur-sm transition-all duration-300 hover:bg-background-page/70"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background-page/50 border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 backdrop-blur-sm transition-all duration-300 hover:bg-background-page/70"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-text-primary mb-2">
                      Project Type *
                    </label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-page border border-border-subtle rounded-lg text-text-primary focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background-page border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: [0, 0, 1, 1] }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-lg">
              {/* Contact Details */}
              <div className="card-glass rounded-card p-lg hover-glow">
                <h3 className="text-xl font-semibold mb-lg text-text-primary">
                  <span className="gradient-text-subtle">Get in touch</span>
                </h3>
                <div className="space-y-md">
                  {contactInfo.map((contact) => {
                    const IconComponent = contact.icon
                    return (
                      <motion.a
                        key={contact.label}
                        href={contact.href}
                        className="flex items-center p-3 rounded-lg hover:bg-background-page transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-cyan/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">{contact.label}</p>
                          <p className="text-text-primary font-medium">{contact.value}</p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glass rounded-card p-lg hover-glow">
                <h3 className="text-xl font-semibold mb-lg text-text-primary">
                  <span className="gradient-text-subtle">Connect online</span>
                </h3>
                <div className="space-y-sm">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg hover:bg-background-page transition-colors duration-300 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 bg-accent-magenta/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent-magenta/20 transition-colors duration-300">
                          <IconComponent className="w-5 h-5 text-accent-magenta" />
                        </div>
                        <div>
                          <p className="text-sm text-text-secondary">{social.label}</p>
                          <p className="text-text-primary font-medium">{social.username}</p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card-glass rounded-card p-lg hover-glow">
                <h3 className="text-xl font-semibold mb-lg text-text-primary">
                  <span className="gradient-text-subtle">Quick actions</span>
                </h3>
                <div className="space-y-sm">
                  <motion.a
                    href="mailto:hello@patrickngige.com"
                    className="flex items-center p-3 rounded-lg hover:bg-background-page transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5 text-accent-cyan mr-4" />
                    <span className="text-text-primary">Send direct email</span>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="flex items-center p-3 rounded-lg hover:bg-background-page transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Calendar className="w-5 h-5 text-accent-magenta mr-4" />
                    <span className="text-text-primary">Schedule a call</span>
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="flex items-center p-3 rounded-lg hover:bg-background-page transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Zap className="w-5 h-5 text-semantic-success mr-4" />
                    <span className="text-text-primary">View my work</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
