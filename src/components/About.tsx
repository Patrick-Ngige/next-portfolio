'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Define container variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Define item variants with proper typing
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-background-surface section-bg section-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"
        >
          {/* Content */}
          <div className="space-y-lg">
            <motion.div variants={itemVariants}>
              <div className="mb-lg">
                <h2 className="text-section font-bold gradient-text-subtle">
                  About Me
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta mt-4"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-md text-accent-cyan relative">
                From Developer to Creative Technologist
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -inset-2 bg-accent-cyan/5 blur-xl rounded-full"
                />
              </h3>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-body text-text-secondary mb-md">
                With over 5 years of experience in web development, I have evolved from a traditional 
                developer into a Creative Technologist who bridges the gap between technical innovation 
                and creative storytelling.
              </p>
              <p className="text-body text-text-secondary mb-md">
                My journey began with pure development, but I discovered my passion lies in creating 
                digital experiences that not only function flawlessly but also tell compelling stories 
                and engage users on an emotional level.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-sm text-text-primary flex items-center">
                <span className="gradient-text-subtle">Core Expertise</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="ml-3 h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex-1 origin-left"
                />
              </h4>
              <p className="text-body text-text-secondary mb-lg">
                Front-end development, 3D web experiences, AI integration, performance optimization, 
                and creative technology strategy.
              </p>
            </motion.div>

            {/* Enhanced Skills Progress Bars */}
            <motion.div variants={itemVariants}>
              <div className="card-glass rounded-card p-lg hover-glow">
                <h4 className="text-xl font-semibold mb-lg text-text-primary flex items-center">
                  <span className="gradient-text-subtle">Skills & Proficiency</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    className="ml-3 h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex-1 origin-left"
                  />
                </h4>
                <div className="space-y-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-medium">React/Next.js</span>
                    <span className="text-accent-cyan font-medium">95%</span>
                  </div>
                  <div className="w-full bg-background-page rounded-full h-4 relative overflow-hidden border border-border-subtle">
                    <motion.div
                      className="progress-fill h-4 rounded-full relative bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan bg-[length:200%_auto] shadow-glow-sm"
                      initial={{ width: 0 }}
                      animate={isInView ? { 
                        width: '95%',
                        backgroundPosition: ['0% 0%', '100% 0%']
                      } : { width: 0 }}
                      transition={{ 
                        duration: 1.8, 
                        delay: 0.3,
                        backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-medium">Three.js/3D Web</span>
                    <span className="text-accent-cyan font-medium">85%</span>
                  </div>
                  <div className="w-full bg-background-page rounded-full h-4 relative overflow-hidden border border-border-subtle">
                    <motion.div
                      className="progress-fill h-4 rounded-full relative bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan bg-[length:200%_auto] shadow-glow-sm"
                      initial={{ width: 0 }}
                      animate={isInView ? { 
                        width: '85%',
                        backgroundPosition: ['0% 0%', '100% 0%']
                      } : { width: 0 }}
                      transition={{ 
                        duration: 1.8, 
                        delay: 0.5,
                        backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-medium">AI Integration</span>
                    <span className="text-accent-cyan font-medium">80%</span>
                  </div>
                  <div className="w-full bg-background-page rounded-full h-4 relative overflow-hidden border border-border-subtle">
                    <motion.div
                      className="progress-fill h-4 rounded-full relative bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan bg-[length:200%_auto] shadow-glow-sm"
                      initial={{ width: 0 }}
                      animate={isInView ? { 
                        width: '80%',
                        backgroundPosition: ['0% 0%', '100% 0%']
                      } : { width: 0 }}
                      transition={{ 
                        duration: 1.8, 
                        delay: 0.7,
                        backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-medium">Performance Optimization</span>
                    <span className="text-accent-cyan font-medium">90%</span>
                  </div>
                  <div className="w-full bg-background-page rounded-full h-4 relative overflow-hidden border border-border-subtle">
                    <motion.div
                      className="progress-fill h-4 rounded-full relative bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan bg-[length:200%_auto] shadow-glow-sm"
                      initial={{ width: 0 }}
                      animate={isInView ? { 
                        width: '90%',
                        backgroundPosition: ['0% 0%', '100% 0%']
                      } : { width: 0 }}
                      transition={{ 
                        duration: 1.8, 
                        delay: 0.9,
                        backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
                </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="card-glass rounded-card p-lg hover-glow">
                <h4 className="text-xl font-semibold mb-md text-text-primary flex items-center">
                  <span className="gradient-text-subtle">Professional Tags</span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="ml-3 h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex-1 origin-left"
                  />
                </h4>
                <div className="flex flex-wrap gap-3">
                  <motion.span 
                    className="px-4 py-2 bg-gradient-to-r from-accent-cyan/10 to-accent-cyan/5 text-accent-cyan rounded-full text-small font-medium border border-accent-cyan/20 hover-lift hover-glow transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    Creative Technologist
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-gradient-to-r from-accent-magenta/10 to-accent-magenta/5 text-accent-magenta rounded-full text-small font-medium border border-accent-magenta/20 hover-lift hover-glow transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    3D Web Developer
                  </motion.span>
                  <motion.span 
                    className="px-4 py-2 bg-background-page border border-border-subtle text-text-secondary rounded-full text-small font-medium hover:border-accent-cyan hover:text-accent-cyan hover-lift transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    AI Enthusiast
                  </motion.span>
              </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Elements */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Profile Image Placeholder */}
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 border border-border-subtle overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-background-page flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">PN</span>
                    </div>
                    <p className="text-text-secondary">Patrick Ngige</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-cyan/20 rounded-full blur-xl"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1]
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-magenta/20 rounded-full blur-xl"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: [0.42, 0, 0.58, 1],
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}