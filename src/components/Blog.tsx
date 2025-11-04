'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Lightbulb,
  TrendingUp,
  Code,
  Palette,
  Zap,
  Eye,
  Brain
} from 'lucide-react'

const blogPosts = [
  {
    title: "The Future of AI in Creative Technology",
    excerpt: "Exploring how artificial intelligence is reshaping the creative landscape and what it means for technologists and artists alike.",
    category: "AI & Technology",
    readTime: "8 min read",
    date: "Nov 1, 2025",
    icon: Brain,
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI", "Creative Technology", "Future"],
    readMoreUrl: "#"
  },
  {
    title: "Building Immersive 3D Web Experiences",
    excerpt: "A practical guide to creating engaging 3D web experiences using Three.js, WebGL, and modern web technologies.",
    category: "3D Web Development",
    readTime: "12 min read",
    date: "Oct 28, 2025",
    icon: Eye,
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
    tags: ["Three.js", "WebGL", "3D", "Web Development"],
    readMoreUrl: "#"
  },
  {
    title: "Performance Optimization for Creative Websites",
    excerpt: "Strategies and techniques for optimizing performance while maintaining visual appeal in creative technology projects.",
    category: "Performance",
    readTime: "6 min read",
    date: "Oct 25, 2025",
    icon: Zap,
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Performance", "Optimization", "Web"],
    readMoreUrl: "#"
  },
  {
    title: "Creative Coding: Where Art Meets Technology",
    excerpt: "Exploring the intersection of creative expression and technical implementation in modern digital art and design.",
    category: "Creative Coding",
    readTime: "10 min read",
    date: "Oct 22, 2025",
    icon: Palette,
    featured: false,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
    tags: ["Creative Coding", "Art", "Technology", "Design"],
    readMoreUrl: "#"
  },
  {
    title: "Accessibility in Interactive Web Experiences",
    excerpt: "Best practices for creating inclusive interactive experiences that work for all users, regardless of their abilities.",
    category: "Accessibility",
    readTime: "7 min read",
    date: "Oct 20, 2025",
    icon: Lightbulb,
    featured: false,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
    tags: ["Accessibility", "UX", "Inclusion", "Web"],
    readMoreUrl: "#"
  },
  {
    title: "The Evolution of Front-End Development",
    excerpt: "How front-end development has evolved and where it&apos;s heading in the era of creative technology and AI integration.",
    category: "Web Development",
    readTime: "9 min read",
    date: "Oct 18, 2025",
    icon: Code,
    featured: false,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    tags: ["Front-end", "Development", "Trends", "Technology"],
    readMoreUrl: "#"
  }
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI & Technology": return Brain
    case "3D Web Development": return Eye
    case "Performance": return Zap
    case "Creative Coding": return Palette
    case "Accessibility": return Lightbulb
    case "Web Development": return Code
    default: return BookOpen
  }
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="section-padding bg-background-surface">
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
              Latest Insights
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Thoughts on creative technology, web development, and the intersection 
              of art and engineering
            </p>
          </motion.div>

          {/* Featured Posts */}
          <motion.div variants={itemVariants} className="mb-xl">
            <h3 className="text-xl font-semibold mb-lg text-text-primary flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-accent-cyan" />
              Featured Articles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              {featuredPosts.map((post) => {
                const IconComponent = getCategoryIcon(post.category)
                return (
                  <motion.article
                    key={post.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="bg-background-page border border-border-subtle rounded-card overflow-hidden card-hover h-full"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Featured Image */}
                      <div className="relative overflow-hidden h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-page/80 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center px-3 py-1 bg-background-page/90 backdrop-blur-sm rounded-full text-small font-medium">
                            <IconComponent className="w-3 h-3 mr-2 text-accent-cyan" />
                            <span className="text-text-primary">{post.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-lg">
                        <div className="flex items-center text-small text-text-secondary mb-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{post.date}</span>
                          <Clock className="w-4 h-4 ml-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-sm group-hover:text-accent-cyan transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-body text-text-secondary mb-md">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-md">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-background-surface border border-border-subtle text-text-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <motion.a
                          href={post.readMoreUrl}
                          className="inline-flex items-center text-accent-cyan font-medium group-hover:text-accent-magenta transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-lg text-text-primary flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-accent-cyan" />
              Recent Articles
            </h3>
            <div className="space-y-md">
              {recentPosts.map((post) => {
                const IconComponent = getCategoryIcon(post.category)
                return (
                  <motion.article
                    key={post.title}
                    variants={itemVariants}
                    className="group"
                  >
                    <motion.div
                      className="bg-background-page border border-border-subtle rounded-card p-lg hover:border-accent-cyan transition-all duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <div className="flex items-start gap-lg">
                        {/* Mini Image */}
                        <div className="relative overflow-hidden rounded-lg w-24 h-24 flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-sm">
                            <div className="flex items-center text-small text-text-secondary">
                              <IconComponent className="w-3 h-3 mr-2 text-accent-cyan" />
                              <span>{post.category}</span>
                            </div>
                            <div className="flex items-center text-small text-text-secondary">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{post.date}</span>
                              <Clock className="w-3 h-3 ml-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold mb-sm group-hover:text-accent-cyan transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-body text-text-secondary mb-sm">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-sm">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-background-surface border border-border-subtle text-text-secondary text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More */}
                          <motion.a
                            href={post.readMoreUrl}
                            className="inline-flex items-center text-accent-cyan text-small font-medium group-hover:text-accent-magenta transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            Read More
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-2xl p-lg bg-background-page border border-border-subtle rounded-card"
          >
            <h3 className="text-2xl font-semibold mb-sm gradient-text">
              Stay updated with new insights
            </h3>
            <p className="text-body text-text-secondary mb-md">
              Subscribe to get the latest articles on creative technology and web development
            </p>
            <motion.a
              href="#contact"
              className="button-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe for Updates
              <BookOpen className="w-4 h-4 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}