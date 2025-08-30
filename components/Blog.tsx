'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react'

export function Blog() {
  const blogPosts = [
    {
      title: 'Two-pointer Technique Explained Simply',
      summary: 'A comprehensive guide to understanding and implementing the two-pointer technique for solving array and linked list problems efficiently.',
      date: 'Feb 2025',
      readTime: '8 min read',
      category: 'Algorithms',
      link: 'https://medium.com/@yourusername/two-pointer-technique',
      featured: true
    },
    {
      title: 'Building Scalable APIs with FastAPI',
      summary: 'Learn how to design and implement high-performance REST APIs using FastAPI, including best practices for production deployment.',
      date: 'Jan 2025',
      readTime: '12 min read',
      category: 'Backend Development',
      link: 'https://medium.com/@yourusername/fastapi-scalable-apis',
      featured: false
    },
    {
      title: 'Machine Learning Model Deployment Strategies',
      summary: 'Exploring different approaches to deploy ML models in production, from simple APIs to complex microservices architectures.',
      date: 'Dec 2024',
      readTime: '15 min read',
      category: 'Machine Learning',
      link: 'https://medium.com/@yourusername/ml-deployment-strategies',
      featured: false
    },
    {
      title: 'System Design: Building a URL Shortener',
      summary: 'Step-by-step guide to designing a scalable URL shortening service, covering architecture, database design, and scaling considerations.',
      date: 'Nov 2024',
      readTime: '20 min read',
      category: 'System Design',
      link: 'https://medium.com/@yourusername/url-shortener-system-design',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Sharing knowledge and insights on Python development, AI/ML, system design, 
              and software engineering best practices.
            </p>
          </motion.div>

          {/* Featured Blog Post */}
          <motion.div variants={itemVariants} className="mb-12">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="font-medium">Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">📝</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Featured Article
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Other Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Read Article
                  </span>
                  <ExternalLink className="h-4 w-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Posts */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>View All Blog Posts</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
