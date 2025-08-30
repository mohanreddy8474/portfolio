import { Code, Database, Cloud, Bot, GitBranch } from 'lucide-react'

export function About() {
  const skills = [
    { name: 'Python', icon: Code, color: 'text-blue-600' },
    { name: 'Flask', icon: Code, color: 'text-gray-600' },
    { name: 'FastAPI', icon: Code, color: 'text-green-600' },
    { name: 'SQL', icon: Database, color: 'text-blue-500' },
    { name: 'NoSQL', icon: Database, color: 'text-green-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Docker', icon: Code, color: 'text-blue-600' },
    { name: 'LLMs', icon: Bot, color: 'text-purple-600' },
    { name: 'Git', icon: GitBranch, color: 'text-red-600' }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              A passionate Python developer with expertise in building scalable backend systems and AI-driven applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Professional Background
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Python Developer with experience in building robust backend systems, 
                  REST APIs, and integrating AI/ML features. My expertise spans from web development 
                  to machine learning applications, with a focus on creating scalable and maintainable solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently working at Annalect, I specialize in developing AI-powered applications 
                  and microservices that drive business value through innovative technology solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Key Areas of Expertise
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Backend Development with Python frameworks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>REST API design and implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>AI/ML integration and deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    <span>Cloud infrastructure and DevOps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`p-3 bg-gray-100 dark:bg-dark-600 rounded-lg mb-3 ${skill.color}`}>
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
