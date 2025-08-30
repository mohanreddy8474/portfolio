import { Github, Code, Database, Cloud, Bot } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'OCR Web Application',
      description: 'A web-based OCR application that lets users upload images and extract text in real-time using FastAPI, WebSocket, and Tesseract OCR.',
      techStack: ['FastAPI', 'Python', 'HTML', 'JavaScript', 'Tesseract'],
      github: 'https://github.com/mohanreddy8474/OCR',
      icon: Code,
      category: 'Full-Stack'
    },
    {
      title: 'AI-Powered Chat App with RAG',
      description: 'Built a chat application in Jupyter Notebook using GPT-4 and Retrieval-Augmented Generation (RAG). Integrated Pinecone to fetch relevant context from past conversations for smarter, context-aware responses.',
      techStack: ['Python', 'Pinecone', 'Gemini API'],
      github: 'https://github.com/mohanreddy8474/RAG_Chat_Application',
      icon: Bot,
      category: 'AI/ML'
    },
    {
      title: 'Classification-of-Ventricular-Arrhythmia',
      description: 'A deep learning project that uses ECG signals to detect ventricular arrhythmia. Built with Python, Pandas, NumPy, and a CNN-LSTM model to improve early detection and support faster diagnosis.',
      techStack: ['Python', 'Matplotlib', 'Pandas', 'LSTM', 'CNN'],
      github: 'https://github.com/mohanreddy8474/Classification-of-Ventricular-Arrhythmia',
      icon: Bot,
      category: 'AI/ML'
    },
    {
      title: 'Exploratory Data Analysis on Suicide Rate',
      description: 'Exploratory data analaysis is performed on the dataset Sucides in India obtained from kaggle Dataset contains data from 2001-2012',
      techStack: ['Python', 'NumPy', 'Matplotlib', 'Pandas'],
      github: 'https://github.com/mohanreddy8474/EDA-on-Suicides-in-india',
      icon: Bot,
      category: 'Data Analysis'
    },
    {
      title: 'Deepfake detection in digital media forensics',
      description: 'A deep learning project using a CNN-LSTM model to detect manipulated videos and images, enhancing authenticity and reliability in digital media.',
      techStack: ['Python','CNN','LSTM','Pytorch'],
      github: 'https://github.com/mohanreddy8474/Deepfake-detection-in-digital-media-forensics',
      icon: Bot,
      category: 'AI/ML'
    },
    {
      title: 'Machine Learning Model API',
      description: 'Production-ready ML model serving API with model versioning, A/B testing, and performance monitoring. Supports multiple ML frameworks and deployment strategies.',
      techStack: ['Python', 'FastAPI', 'MLflow', 'Docker', 'Kubernetes', 'Prometheus'],
      github: 'https://github.com/yourusername/ml-api',
      icon: Bot,
      category: 'AI/ML'
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Here are some of the projects I've built, showcasing my skills in Python development, 
              AI/ML integration, and full-stack applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Links */}
                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/mohanreddy8474"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
