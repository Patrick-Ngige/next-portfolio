"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Creative Lab", href: "#creative-lab" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const { theme, setTheme } = useTheme()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > (previous ?? 0) && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background-page/80 border-b border-border-subtle"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PN
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-sm font-medium rounded-lg hover:bg-background-surface"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 rounded-lg bg-background-surface flex items-center justify-center text-text-secondary hover:text-accent-cyan transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-lg bg-background-surface flex items-center justify-center text-text-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-lg bg-background-surface flex items-center justify-center text-text-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-text-secondary hover:text-accent-cyan hover:bg-background-surface transition-colors duration-300 rounded-lg font-medium"
                whileHover={{ x: 5 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
