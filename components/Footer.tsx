'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mohanreddy8474',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohan8474/',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:ssmohanreddy@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Brand & Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Sai Mohan Reddy
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              Python Developer & AI/ML Enthusiast passionate about building scalable 
              backend systems and AI-driven applications.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Sai Mohan Reddy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
