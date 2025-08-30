'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      company: 'Annalect',
      title: 'Senior Associate',
      duration: 'Nov 2022 - Present',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built a Gen AI microservice using async programming for scalable embedding metadata and approvals.',
        'Achieved 90%+ test coverage with unit and integration tests using Pytest.',
        'Designed APIs for vector databases to handle data retrieval and collection management.',
        'Integrated Azure OpenAI embeddings for text data conversion.',
        'Integrated GCP Speech-to-Text API for audio transcription.',
        'Developed APIs to ingest test data from multiple sources (S3, text, URLs).',
        'Containerized microservices with Docker for easy deployment.',
        'Created custom middleware in Flask/FastAPI for centralized I/O logging.',
        'Built APIs with OpenPyxl for Excel import/export with database sync.',
        'Implemented custom export templates (OpenPyxl + S3) for personalized client data exports.'
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
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              My professional journey in software development and AI/ML engineering.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Company & Duration */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <Building className="h-5 w-5 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>
                    
                    <h4 className="text-base font-medium text-primary-600 dark:text-primary-400 mb-4">
                      {exp.title}
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description & Responsibilities */}
                  <div className="lg:col-span-3">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities:
                    </h5>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
