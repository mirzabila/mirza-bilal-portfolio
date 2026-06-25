import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    setSkills([
      { name: 'Python (ML/AI)', category: 'Programming', level: 85, icon: '🐍' },
      { name: 'Machine Learning', category: 'AI', level: 80, icon: '🤖' },
      { name: 'NumPy & Pandas', category: 'Libraries', level: 75, icon: '📊' },
      { name: 'Data Analysis', category: 'Data', level: 78, icon: '📈' },
      { name: 'C++ (Core)', category: 'Programming', level: 82, icon: '⚙️' },
      { name: 'OOP & Algorithms', category: 'Programming', level: 80, icon: '🔧' },
      { name: 'Data Structures', category: 'Programming', level: 78, icon: '🏗️' },
      { name: 'Prompt Engineering', category: 'AI', level: 88, icon: '✨' },
      { name: 'LLM APIs (GPT/Claude)', category: 'AI', level: 85, icon: '🧠' },
      { name: 'Chain-of-Thought', category: 'AI', level: 82, icon: '🔗' },
      { name: 'Matplotlib & Seaborn', category: 'Visualization', level: 75, icon: '📉' },
      { name: 'Scikit-learn', category: 'Libraries', level: 72, icon: '🎯' },
      { name: 'AI Automation', category: 'Tools', level: 80, icon: '⚡' },
      { name: 'Amazon Seller Central', category: 'E-Commerce', level: 78, icon: '🛒' },
    ]);
    
    setTimeout(() => setAnimateProgress(true), 300);
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Specialized in Python, Machine Learning, C++, and Prompt Engineering</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl border border-blue-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">{skill.category}</p>
                </div>
                <div className="text-2xl font-bold gradient-text">{skill.level}%</div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animateProgress ? `${skill.level}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Python Focus */}
          <div className="glass p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <span className="text-3xl mr-3">🐍</span>
              Python & Machine Learning
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 font-semibold mb-2">Core Libraries</p>
                <p className="text-gray-400">NumPy, Pandas, Matplotlib, Scikit-learn</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">Specialization</p>
                <p className="text-gray-400">Data Analysis, EDA, Model Evaluation, Supervised Learning</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">Applications</p>
                <p className="text-gray-400">AI automation, data visualization, ML workflows</p>
              </div>
            </div>
          </div>

          {/* C++ Focus */}
          <div className="glass p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <span className="text-3xl mr-3">⚙️</span>
              C++ & Systems
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 font-semibold mb-2">Core Concepts</p>
                <p className="text-gray-400">OOP, Data Structures, Algorithms, Memory Management</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">Focus Areas</p>
                <p className="text-gray-400">Algorithm development, system-level programming</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-2">Applications</p>
                <p className="text-gray-400">Performance-critical systems, backend services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Highlight */}
        <div className="mt-8 glass p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
            <span className="text-3xl mr-3">✨</span>
            Prompt Engineering Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-300 font-semibold mb-2">Prompt Design</p>
              <p className="text-gray-400">Crafting sophisticated prompts for maximum LLM performance</p>
            </div>
            <div>
              <p className="text-gray-300 font-semibold mb-2">LLM Integration</p>
              <p className="text-gray-400">Working with GPT-4, Claude, Gemini APIs</p>
            </div>
            <div>
              <p className="text-gray-300 font-semibold mb-2">Automation</p>
              <p className="text-gray-400">Building AI-powered workflows for business automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
