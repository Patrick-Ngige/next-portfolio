'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: "Phoina Beauty",
    category: "E-Commerce Platform",
    role: "Full-Stack Developer & Creative Technologist",
    challenge: "Create a luxury e-commerce experience that stands out in the crowded beauty market while maintaining professional credibility.",
    roleDescription: "Led the complete development process, from creative concept to technical implementation, ensuring the platform reflected the brand's premium positioning.",
    solution: "Developed a custom WordPress WooCommerce solution with bespoke design elements, advanced filtering, and seamless user experience optimized for conversions.",
    impact: "Delivered a visually striking platform that not only showcases products but creates an immersive shopping experience, resulting in increased user engagement.",
    technologies: ["WordPress", "WooCommerce", "Custom PHP", "SCSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Eat'N'GO Kenya",
    category: "Brand Website",
    role: "Creative Technologist & Front-End Developer",
    challenge: "Build a comprehensive brand website that effectively communicates the company's history, leadership, and diverse restaurant portfolio to the Kenyan market.",
    roleDescription: "Orchestrated the creative vision and technical execution, blending storytelling with interactive design elements to create an engaging user journey.",
    solution: "Created a responsive multi-section website with interactive timelines, brand showcases, and optimized performance for local internet conditions.",
    impact: "Established a strong digital presence that successfully represents the brand's evolution and comprehensive restaurant portfolio.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Jackpot Lottery International",
    category: "Gaming Platform",
    role: "Senior Developer & Performance Optimizer",
    challenge: "Develop a multi-language international lottery platform supporting over 20 translations with complex gaming mechanics and real-time functionality.",
    roleDescription: "Architected the frontend architecture, implemented internationalization, and optimized performance for global users across different devices and connections.",
    solution: "Built a robust React-based platform with advanced state management, real-time updates, and comprehensive localization systems.",
    impact: "Created a scalable platform that serves international users with optimized performance and seamless user experience across all supported regions.",
    technologies: ["React", "Redux", "WebSocket", "i18next", "Node.js"],
    image: "https://images.unsplash.com/photo-1617957796781-7b4f34d3b4a1?w=800&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "KCB Group Website",
    category: "Corporate Website",
    role: "Creative Technologist & Performance Engineer",
    challenge: "Rebuild the corporate website for Kenya's largest bank, requiring sophisticated content management and high-performance delivery.",
    roleDescription: "Led the technical architecture and creative direction, ensuring the platform meets enterprise-grade requirements while maintaining optimal performance.",
    solution: "Developed a headless CMS solution with Next.js, implementing advanced caching, CDN integration, and comprehensive security measures.",
    impact: "Delivered a robust corporate platform that serves as the digital face of one of East Africa's leading financial institutions.",
    technologies: ["Next.js", "Headless CMS", "CDN", "Security", "Performance"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Define container variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="projects" className="section-padding bg-background-surface">
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
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              A showcase of creative technology solutions that bridge innovation with business impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-2xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-xl items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-page/60 via-transparent to-transparent" />
                    
                    {/* Project Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-3">
                        {project.liveUrl !== "#" && (
                          <motion.a
                            href={project.liveUrl}
                            className="button-primary text-small px-4 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubUrl !== "#" && (
                          <motion.a
                            href={project.githubUrl}
                            className="button-secondary text-small px-4 py-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={`card-glass rounded-card p-lg hover-glow space-y-md transition-all duration-300 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {/* Category Badge */}
                  <motion.div variants={itemVariants}>
                    <span className="inline-block px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-small font-medium rounded-full border border-accent-cyan/20 mb-sm">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemVariants} className="text-2xl font-bold text-text-primary">
                    {project.title}
                  </motion.h3>

                  {/* Role */}
                  <motion.p variants={itemVariants} className="text-accent-magenta font-medium">
                    {project.role}
                  </motion.p>

                  {/* Challenge */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-lg font-semibold text-text-primary mb-sm">Challenge</h4>
                    <p className="text-body text-text-secondary">{project.challenge}</p>
                  </motion.div>

                  {/* Solution */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-lg font-semibold text-text-primary mb-sm">Solution</h4>
                    <p className="text-body text-text-secondary">{project.solution}</p>
                  </motion.div>

                  {/* Impact */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-lg font-semibold text-text-primary mb-sm">Impact</h4>
                    <p className="text-body text-text-secondary">{project.impact}</p>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={itemVariants}>
                    <h4 className="text-lg font-semibold text-text-primary mb-sm">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background-page border border-border-subtle text-text-secondary text-small rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <motion.div variants={itemVariants} className="pt-sm">
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center text-accent-cyan font-medium hover:text-accent-magenta transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Discuss this project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-2xl card-glass rounded-card p-xl hover-glow"
          >
            <h3 className="text-2xl font-semibold mb-sm gradient-text">
              Have a project in mind?
            </h3>
            <p className="text-body text-text-secondary mb-md">
              Let&apos;s discuss how we can bring your creative technology vision to life
            </p>
            <motion.a
              href="#contact"
              className="button-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}