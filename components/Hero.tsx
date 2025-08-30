import { Github, Linkedin, Mail, Download } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Introduction */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text bg-gradient-to-r from-primary-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sai Mohan Reddy
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Python Developer & AI/ML Enthusiast
            </p>
            
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable backend systems and AI-driven applications. 
              Specializing in FastAPI, Flask, and machine learning solutions.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold"
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>
            
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mohanreddy8474"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/mohan8474/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            
            <a
              href="mailto:ssmohanreddy@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
