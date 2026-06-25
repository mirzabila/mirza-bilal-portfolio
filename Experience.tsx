import React from 'react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
  icon: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Bachelor of Science in Artificial Intelligence',
      company: 'NASTP Institute of Information Technology',
      period: '2025 - Present',
      type: 'education',
      icon: '🎓',
      description: [
        'Currently in 2nd Semester',
        'Core Focus: Machine Learning, AI Fundamentals, Data Structures & Algorithms',
        'Coursework: Python, C++, Applied AI Problem Solving',
        'GPA: Excellent standing',
      ],
    },
    {
      id: 2,
      title: 'Intermediate (I.C.S)',
      company: 'KIPS College, Lahore',
      period: '2023 - 2025',
      type: 'education',
      icon: '📚',
      description: [
        'Completed with distinction',
        'Foundation in Mathematics and Computer Science',
        'Prepared for AI degree program',
      ],
    },
    {
      id: 3,
      title: 'Amazon Virtual Assistant - Private Label Specialist',
      company: 'EcomPearl',
      period: 'Sep 2021 - Aug 2022',
      type: 'work',
      icon: '💼',
      description: [
        'Generated $850+ in startup revenue through strategic product positioning',
        'Managed Amazon Seller Central operations end-to-end',
        'Conducted market research and competitor analysis',
        'Sourced products from Chinese suppliers optimizing cost and quality',
        'Performed SEO keyword optimization and inventory tracking',
      ],
    },
    {
      id: 4,
      title: 'Data Handler & Operations Assistant',
      company: 'MMCOMPANY.CO',
      period: 'Sep 2022 - Aug 2023',
      type: 'work',
      icon: '📊',
      description: [
        'Managed business data across multiple databases with 100% accuracy',
        'Designed and implemented structured data management workflows',
        'Reduced manual intervention time through process optimization',
        'Produced data summaries and formatted reports for management analysis',
        'Maintained operational reliability across 12+ months',
      ],
    },
    {
      id: 5,
      title: 'AI-Assisted Automation Engineer',
      company: 'Self-Directed',
      period: '2024 - Present',
      type: 'work',
      icon: '⚡',
      description: [
        'Developing AI-assisted workflows combining prompt engineering and automation',
        'Integrating multiple AI platforms into unified productivity pipelines',
        'Reduced personal task processing time by estimated 40%',
        'Building reusable prompt templates for business automation',
        'Benchmarking LLM performance across multiple models',
      ],
    },
  ];

  const workExperiences = experiences.filter((e) => e.type === 'work');
  const educationExperiences = experiences.filter((e) => e.type === 'education');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8 flex items-center">
              <span className="text-3xl mr-3">💼</span>
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-8 flex items-center">
              <span className="text-3xl mr-3">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {educationExperiences.map((exp) => (
                <div
                  key={exp.id}
                  className="glass p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 glass p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center">
            <span className="text-3xl mr-3">🏆</span>
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">$850+</div>
              <p className="text-gray-300">E-Commerce Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">40%</div>
              <p className="text-gray-300">Task Processing Time Reduced</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-300">Data Accuracy Maintained</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <p className="text-gray-300">Major Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
