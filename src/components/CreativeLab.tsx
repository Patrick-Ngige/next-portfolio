'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Code, Zap, Brain, Eye } from 'lucide-react'

const experiments = [
  {
    id: 1,
    title: "Interactive 3D Portfolio",
    description: "A fully immersive 3D portfolio experience built with Three.js and WebGL shaders",
    category: "3D Web",
    tags: ["Three.js", "WebGL", "Shaders", "Interactive"],
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Code Review",
    description: "Machine learning system that analyzes code quality and provides intelligent suggestions",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "NLP", "GitHub"],
    status: "In Progress",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AR Product Viewer",
    description: "Augmented reality experience for e-commerce product visualization",
    category: "AR/VR",
    tags: ["AR.js", "WebXR", "E-commerce", "3D Models"],
    status: "Concept",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Realtime Collaborative Canvas",
    description: "Multi-user drawing application with real-time synchronization",
    category: "Real-time",
    tags: ["WebSocket", "Canvas", "Real-time", "Collaboration"],
    status: "Completed",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 5,
    title: "Voice-Controlled Web Interface",
    description: "Accessibility-focused voice navigation system for web applications",
    category: "Accessibility",
    tags: ["Web Speech API", "Accessibility", "Voice UI", "UX"],
    status: "In Progress",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Generative Art Engine",
    description: "Algorithmic art creation tool using procedural generation techniques",
    category: "Creative Tech",
    tags: ["Processing", "Generative Art", "Algorithms", "Creative"],
    status: "Concept",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

const categories = ["All", "3D Web", "AI/ML", "AR/VR", "Real-time", "Accessibility", "Creative Tech"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "3D Web": return Code
    case "AI/ML": return Brain
    case "AR/VR": return Eye
    default: return Code
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "text-semantic-success"
    case "In Progress": return "text-semantic-warning"
    case "Concept": return "text-text-secondary"
    default: return "text-text-secondary"
  }
}

export default function CreativeLab() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")

  // Define container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Define item variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1]
      }
    }
  }

  const filteredExperiments = activeCategory === "All" 
    ? experiments 
    : experiments.filter(exp => exp.category === activeCategory)

  return (
    <section id="creative-lab" className="section-padding bg-background-page section-bg">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-2xl">
            <h2 className="text-section font-bold mb-lg gradient-text">
              Creative Lab
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-lg">
              Experimental projects exploring the boundaries of creative technology, 
              where innovation meets imagination
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category)
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-small font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-accent-cyan text-black'
                        : 'bg-background-surface text-text-secondary border border-border-subtle hover:border-accent-cyan hover:text-accent-cyan'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-xl">
            <h3 className="text-xl font-semibold mb-lg text-text-primary">Featured Experiments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {filteredExperiments.filter(exp => exp.featured).map((experiment) => {
                const IconComponent = getCategoryIcon(experiment.category)
                return (
                  <motion.div
                    key={experiment.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="card-glass rounded-card p-lg h-full relative overflow-hidden hover-glow transition-all duration-300"
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-2 py-1 bg-accent-magenta/10 text-accent-magenta text-xs font-medium rounded-full border border-accent-magenta/20">
                          Featured
                        </span>
                      </div>

                      {/* Category Icon */}
                      <motion.div
                        className="relative z-10 mb-md"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-sm">
                          <span className="text-small text-text-secondary">{experiment.category}</span>
                          <span className={`text-small font-medium ${getStatusColor(experiment.status)}`}>
                            {experiment.status}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold mb-sm group-hover:text-accent-cyan transition-colors duration-300">
                          {experiment.title}
                        </h3>
                        
                        <p className="text-body text-text-secondary mb-md">
                          {experiment.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-md">
                          {experiment.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-background-page border border-border-subtle text-text-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                          {experiment.tags.length > 3 && (
                            <span className="px-2 py-1 text-text-secondary text-xs">
                              +{experiment.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex gap-3">
                          {experiment.demoUrl !== "#" && (
                            <motion.a
                              href={experiment.demoUrl}
                              className="text-accent-cyan hover:text-accent-magenta transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                          {experiment.githubUrl !== "#" && (
                            <motion.a
                              href={experiment.githubUrl}
                              className="text-text-secondary hover:text-accent-cyan transition-colors duration-300"
                              whileHover={{ scale: 1.1 }}
                            >
                              <Code className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>



          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-2xl card-glass rounded-card p-xl hover-glow"
          >
            <h3 className="text-2xl font-semibold mb-sm gradient-text">
              Collaborate on something innovative?
            </h3>
            <p className="text-body text-text-secondary mb-md">
              Let&apos;s explore the possibilities of creative technology together
            </p>
            <motion.a
              href="#contact"
              className="button-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Collaboration
              <Zap className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}