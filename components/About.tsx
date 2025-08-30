'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Building, Code } from 'lucide-react'

export function About() {
  const skills = [
    'Python', 'Flask', 'FastAPI', 'SQL', 'NoSQL', 'AWS', 
    'Docker', 'LLMs', 'Git', 'Machine Learning', 'System Design',
    'REST APIs', 'Microservices', 'CI/CD', 'AI/ML'
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

  // Skill badge animation variants
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  // Icon animation variants
  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              whileInView={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 0.5 }
              }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                whileInView={{ 
                  x: [-50, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.6 }
                }}
              >
                Python Developer & AI/ML Enthusiast
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                whileInView={{ 
                  x: [-50, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.6, delay: 0.1 }
                }}
              >
                I'm a passionate Python developer with expertise in building scalable backend systems and AI-driven applications. 
                With a strong foundation in AI/ML, I enjoy solving complex problems and creating 
                efficient solutions that make a difference.
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                whileInView={{ 
                  x: [-50, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.6, delay: 0.2 }
                }}
              >
                When I'm not coding, you'll find me exploring the latest developments in AI/ML, contributing to open-source projects, 
                or sharing knowledge through technical blogs.
              </motion.p>
            </div>
            
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
              whileInView={{ 
                x: [50, 0],
                opacity: [0, 1],
                transition: { duration: 0.6, delay: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                >
                  <Building className="h-5 w-5 text-primary-600" />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Current Role:</span> Senior Associate @ Annalect
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                >
                  <Calendar className="h-5 w-5 text-primary-600" />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Experience:</span> 3 Years
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                >
                  <MapPin className="h-5 w-5 text-primary-600" />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Location:</span> Hyderabad, India
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                >
                  <Code className="h-5 w-5 text-primary-600" />
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Focus:</span> Backend, AI/ML, FastAPI, LLMs
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            variants={itemVariants} 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              whileInView={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 0.5 }
              }}
            >
              Skills & Technologies
            </motion.h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="skill-badge cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
