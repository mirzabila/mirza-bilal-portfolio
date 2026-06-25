import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an ambitious AI student at NASTP Institute of Information Technology, currently in my 2nd semester. 
              With a strong foundation in Python and C++, I specialize in Machine Learning and AI-driven problem solving.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across AI Prompt Engineering, designing sophisticated prompts to maximize LLM performance, 
              and building AI-assisted automation workflows. I bridge technical AI capability with practical business impact, 
              demonstrated through real-world e-commerce experience and data analysis projects.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm actively seeking internships, remote positions, and freelance projects in Artificial Intelligence, 
              Data Analysis, Machine Learning, and Prompt Engineering.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">2nd</div>
                <div className="text-sm text-gray-400">Semester AI</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">$850+</div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="glass p-4 rounded-lg text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right side - 3D card effect */}
          <div className="perspective">
            <div className="glass p-8 rounded-2xl card-3d border border-blue-500/30 hover:border-purple-500/50 transition-all">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">🎓 Education</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• B.S. in Artificial Intelligence - NASTP (2025-Present)</li>
                    <li>• Intermediate (I.C.S) - KIPS College (2023-2025)</li>
                    <li>• Matriculation - Fauji Foundation School (2021-2023)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">💼 Experience</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Amazon VA & Private Label Specialist (2021-2022)</li>
                    <li>• Data Handler & Operations Assistant (2022-2023)</li>
                    <li>• AI-Assisted Automation Engineer (Ongoing)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">🌍 Languages</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• English (Professional Proficiency)</li>
                    <li>• Urdu (Native)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
