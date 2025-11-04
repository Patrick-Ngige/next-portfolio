'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUp } from 'lucide-react'

const footerLinks = {
  services: [
    { name: "Creative Technology Consulting", href: "#services" },
    { name: "Interactive Experience Design", href: "#services" },
    { name: "AI-Powered Solutions", href: "#services" },
    { name: "Growth Marketing Strategy", href: "#services" },
  ],
  projects: [
    { name: "Featured Projects", href: "#projects" },
    { name: "Creative Lab", href: "#creative-lab" },
    { name: "Case Studies", href: "#" },
    { name: "All Work", href: "#" },
  ],
  resources: [
    { name: "Blog & Insights", href: "#blog" },
    { name: "Creative Process", href: "#" },
    { name: "Technology Stack", href: "#" },
    { name: "Speaking & Workshops", href: "#" },
  ]
}

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/patrickngige",
    label: "GitHub",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/patrickngige",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
  {
    icon: Twitter,
    href: "https://twitter.com/patrickngige",
    label: "Twitter",
    color: "hover:text-blue-400"
  },
  {
    icon: Mail,
    href: "mailto:hello@patrickngige.com",
    label: "Email",
    color: "hover:text-accent-cyan"
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-page border-t border-border-subtle">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl mb-xl">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-md">
              <span className="gradient-text">Patrick Ngige</span>
            </h3>
            <p className="text-body text-text-secondary mb-lg">
              Creative Technologist crafting innovative digital experiences 
              at the intersection of art and technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-background-surface rounded-lg flex items-center justify-center text-text-secondary ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-md text-text-primary">Services</h4>
            <ul className="space-y-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-small"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-md text-text-primary">Projects</h4>
            <ul className="space-y-sm">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-small"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-md text-text-primary">Resources</h4>
            <ul className="space-y-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-small"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <motion.div 
          className="card-glass rounded-card p-lg mb-xl hover-glow relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-magenta/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
            <div>
              <h4 className="text-lg font-semibold mb-sm text-text-primary">
                Stay updated with new projects
              </h4>
              <p className="text-small text-text-secondary">
                Get notified about my latest creative technology experiments and insights
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-background-page border border-border-subtle rounded-lg text-text-primary placeholder-text-secondary focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
              />
              <motion.button
                className="button-primary px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
          </div>
        </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:justify-between pt-lg border-t border-border-subtle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center text-small text-text-secondary mb-sm md:mb-0">
            <span>© {currentYear} Patrick Ngige. Made with</span>
            <motion.span 
              className="mx-2 text-accent-cyan"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
            >
              <Heart className="w-4 h-4 fill-current" />
            </motion.span>
            <span>and lots of coffee.</span>
          </div>
          
          <div className="flex items-center gap-lg">
            <a 
              href="#" 
              className="text-small text-text-secondary hover:text-accent-cyan transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-small text-text-secondary hover:text-accent-cyan transition-colors duration-300"
            >
              Terms of Service
            </a>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 bg-accent-cyan/10 rounded-full flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      {/* </div> */}
    </footer>
  )
}