'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, FileText, Star, Target, ExternalLink, GraduationCap, Medal } from 'lucide-react'

export function Achievements() {
  const achievements = [
    {
      category: 'Awards',
      items: [
        {
          title: 'On The Spot award',
          description: 'Received recognition for outstanding performance and contributions to the team.',
          year: '2025',
          icon: Award,
          color: 'text-green-600',
          link: undefined
        },
        {
          title: 'Annalectual Team Award',
          description: 'Received team award for a Gen AI application, recognizing our collaborative efforts in developing innovative AI solutions.',
          year: '2023',
          icon: Trophy,
          color: 'text-blue-600',
          link: undefined
        },
        {
          title: 'On The Spot award',
          description: 'Received recognition for building microservices for a Gen AI application',
          year: '2023',
          icon: Award,
          color: 'text-green-600',
          link: undefined
        }
      ]
    },
    {
      category: 'Publications',
      items: [
        {
          title: 'Deepfake detection in digital media forensics',
          description: 'Co-authored a peer-reviewed research paper introducing techniques for detecting deepfakes in digital media, enhancing the reliability of forensic analysis.',
          year: '2022',
          icon: FileText,
          color: 'text-orange-600',
          link: 'https://www.sciencedirect.com/science/article/pii/S2666285X2200053X'
        },
        {
          title: 'Classification of Ventricular Arrhythmia using Machine Learning',
          description: 'Co-authored a peer-reviewed research paper introducing a approach for classifying ventricular arrhythmia using machine learning, improving diagnostic accuracy and treatment strategies.',
          year: '2022',
          icon: FileText,
          color: 'text-blue-600',
          link: 'https://ieeexplore.ieee.org/document/10057825'
        }
      ]
    },
    {
      category: 'Certifications',
      items: [
        {
          title: 'AWS Certified AI Practitioner',
          description: 'Earned AWS certification for expertise in AI/ML services and cloud-based machine learning solutions',
          year: '2025',
          icon: GraduationCap,
          color: 'text-green-600',
          link: 'https://www.credly.com/badges/fb9c4b94-da1b-4304-88d1-e9ab63f42890/linked_in?t=sphx03'
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="achievements" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Recognition
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Recognition for my work in coding competitions, professional certifications, 
              and contributions to the developer community.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 bg-gray-100 dark:bg-dark-600 rounded-lg ${item.color}`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                              {item.year}
                            </span>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 hover:underline transition-colors duration-200"
                                aria-label={`View ${item.title}`}
                              >
                                {category.category === 'Publications' ? 'View Paper' : 'View Certification'}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
