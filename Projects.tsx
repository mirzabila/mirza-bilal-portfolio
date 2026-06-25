import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: 'Cinema Ticketing System',
      description: 'A user-friendly application designed to streamline movie ticket booking with intuitive UI and smooth user interaction.',
      technologies: ['Python', 'Database', 'UI/UX'],
      github: 'https://github.com/mirzabila/Cinema-Ticketing-System',
      highlights: [
        'Browse movies and view show timings',
        'Seat selection interface',
        'Efficient ticket generation',
        'Real-world application learning',
      ],
    },
    {
      id: 2,
      title: 'Netflix Content Strategy',
      description: 'Streamlit dashboard exploring Netflix catalog patterns with TF-IDF based recommendations and content strategy metrics.',
      technologies: ['Python', 'Streamlit', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/mirzabila/Netflix-Content-Strategy',
      highlights: [
        'Netflix-style dashboard interface',
        'Advanced filtering by genre, rating, year',
        'TF-IDF similarity recommendations',
        'CSV export functionality',
        'TMDB poster integration',
      ],
    },
    {
      id: 3,
      title: 'Gate Security System',
      description: 'Comprehensive security system with backend API, database management, and real-time notifications.',
      technologies: ['Python', 'FastAPI', 'Database', 'Authentication'],
      github: 'https://github.com/mirzabila/Gate-Security-system',
      highlights: [
        'REST API with FastAPI',
        'User authentication & authorization',
        'Real-time notifications',
        'Device management',
        'Schedule-based access control',
        'Admin dashboard',
      ],
    },
    {
      id: 4,
      title: 'NASTP NIIT App',
      description: 'Cross-platform mobile application built with Expo and React Native for educational management.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Mobile'],
      github: 'https://github.com/mirzabila/NASTP-NIIT-APP',
      highlights: [
        'Cross-platform compatibility',
        'File-based routing',
        'TypeScript support',
        'Educational features',
        'Responsive design',
      ],
    },
    {
      id: 5,
      title: 'Nexus AI',
      description: 'AI-powered assistant with advanced routing and memory management capabilities.',
      technologies: ['Python', 'AI/ML', 'Database', 'APIs'],
      github: 'https://github.com/fahadmirfa/nexus_ai',
      highlights: [
        'Advanced AI routing',
        'Memory database integration',
        'Command processing',
        'Scalable architecture',
      ],
    },
    {
      id: 6,
      title: 'AI Prompt Engineering Framework',
      description: 'Structured system for designing and testing sophisticated prompts across multiple AI models.',
      technologies: ['Python', 'LLM APIs', 'Prompt Engineering'],
      github: '#',
      highlights: [
        'Multi-model evaluation (GPT-4, Claude, Gemini)',
        'Prompt optimization',
        'Reusable templates',
        'Performance benchmarking',
        'Chain-of-thought implementation',
      ],
    },
  ]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Showcasing my work in AI, Machine Learning, and Full-Stack Development</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-xl overflow-hidden border border-blue-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 h-full flex flex-col card-3d"
            >
              {/* Project header */}
              <div className="p-6 pb-4 border-b border-blue-500/10">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
              </div>

              {/* Project content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Highlights */}
                <div className="mb-4 flex-1">
                  <p className="text-xs font-semibold text-blue-400 mb-2 uppercase">Key Features</p>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-purple-400 mb-2 uppercase">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/20 transition-all text-sm font-semibold"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional projects note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More projects available on my GitHub profile</p>
          <a
            href="https://github.com/mirzabila"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
