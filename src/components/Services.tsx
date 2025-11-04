'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ChevronDown, 
  Brain, 
  TrendingUp, 
  Code, 
  Palette, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'PREDICTIVE AI/ML & DATA',
    subtitle: 'Intelligent Business Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions. From predictive analytics to automated workflows, I develop custom AI systems that drive efficiency and growth.',
    features: [
      'Predictive Analytics & Forecasting',
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Automated Decision Systems',
      'Data Science Consulting'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API']
  },
  {
    id: 'growth-strategy',
    icon: TrendingUp,
    title: 'BUSINESS GROWTH STRATEGY',
    subtitle: 'Data-Driven Growth Solutions',
    description: 'Strategic growth consulting that combines creative innovation with technical precision. I help businesses identify opportunities, optimize processes, and scale efficiently using modern methodologies.',
    features: [
      'Growth Strategy Development',
      'Market Analysis & Research',
      'Process Optimization',
      'Competitive Intelligence',
      'Performance Metrics & KPIs',
      'Scalable Business Models'
    ],
    technologies: ['Analytics Tools', 'Growth Frameworks', 'Business Strategy', 'Market Research']
  },
  {
    id: 'frontend-dev',
    icon: Code,
    title: 'FRONT-END DEVELOPMENT',
    subtitle: 'Modern Web Applications',
    description: 'Building robust, scalable web applications using the latest technologies and best practices. From responsive websites to complex web apps, I create exceptional user experiences.',
    features: [
      'React/Next.js Development',
      'TypeScript Implementation',
      'Responsive Design Systems',
      'Performance Optimization',
      'SEO Implementation',
      'Progressive Web Apps (PWA)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX & MOTION DESIGN',
    subtitle: 'Beautiful Digital Experiences',
    description: 'Creating intuitive and visually stunning user interfaces combined with smooth animations and interactions. I design experiences that users love and businesses need.',
    features: [
      'User Interface Design',
      'User Experience Research',
      'Prototyping & Wireframing',
      'Motion Graphics & Animations',
      'Design Systems',
      'Accessibility Standards'
    ],
    technologies: ['Figma', 'Framer Motion', 'Adobe Creative Suite', 'Principle', 'InVision']
  },
  {
    id: 'creative-tech',
    icon: Zap,
    title: 'CREATIVE TECHNOLOGY SOLUTIONS',
    subtitle: 'Innovative Tech Solutions',
    description: 'Bridging the gap between creative vision and technical implementation. I specialize in developing unique technology solutions that bring creative ideas to life.',
    features: [
      '3D Web Experiences',
      'Interactive Media Solutions',
      'AR/VR Development',
      'IoT Integration',
      'Creative Coding',
      'Innovation Consulting'
    ],
    technologies: ['Three.js', 'WebGL', 'Unity', 'Arduino', 'Creative Coding']
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeService, setActiveService] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id)
  }

  return (
    <section id="services" className="section-padding bg-background-surface section-bg section-divider w-full">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-section font-bold mb-lg gradient-text">
              Services
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta mt-4 max-w-xs mx-auto"
            />
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-6">
              Comprehensive creative technology solutions that bridge the gap between 
              innovation and business success
            </p>
          </motion.div>

          {/* Services Accordion */}
          <div className="space-y-4 w-full max-w-4xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isActive = activeService === service.id
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full"
                >
                  {/* Service Header */}
                  <motion.button
                    onClick={() => toggleService(service.id)}
                    className="w-full card-glass rounded-card p-6 lg:p-8 hover-glow transition-all duration-300 text-left group relative overflow-hidden"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div className="flex items-center space-x-6 flex-1">
                        {/* Icon */}
                        <motion.div
                          className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-xl flex items-center justify-center shadow-glow-md flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-6 h-6 lg:w-7 lg:h-7 text-black" />
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg lg:text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-body text-text-secondary">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="w-6 h-6 text-text-secondary group-hover:text-accent-cyan transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Service Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="bg-background-page/50 backdrop-blur-sm rounded-b-card p-6 lg:p-8 mt-2 border-t border-border-subtle/50">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Description */}
                            <div>
                              <p className="text-body text-text-secondary leading-relaxed mb-6">
                                {service.description}
                              </p>
                              
                              {/* Technologies */}
                              <div>
                                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                                  <span className="gradient-text-subtle">Technologies</span>
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent-cyan/10 to-accent-cyan/5 text-accent-cyan rounded-full border border-accent-cyan/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center">
                                <span className="gradient-text-subtle">Key Features</span>
                              </h4>
                              <div className="space-y-3">
                                {service.features.map((feature) => (
                                  <motion.div
                                    key={feature}
                                    className="flex items-center text-body text-text-secondary"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                  >
                                    <CheckCircle className="w-4 h-4 text-accent-cyan mr-3 flex-shrink-0" />
                                    <span className="font-medium">{feature}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Learn More Link */}
                          <motion.div
                            className="flex items-center text-accent-cyan text-small font-semibold mt-6 hover-lift group/link"
                            whileHover={{ x: 5 }}
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-2xl card-glass rounded-card p-2xl relative overflow-hidden hover-glow"
          >
            {/* Background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-magenta/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full mx-auto mb-lg flex items-center justify-center shadow-glow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-10 h-10 text-black" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-md gradient-text">
                Ready to innovate?
              </h3>
              <p className="text-xl text-text-secondary mb-xl max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how creative technology can transform your vision into reality
              </p>
              <motion.a
                href="#contact"
                className="button-primary inline-flex items-center text-lg px-10 py-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-3" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}