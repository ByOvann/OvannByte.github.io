import React, { useEffect, useRef, useState } from 'react';

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'JavaScript', level: 90, icon: '⚡', category: 'Frontend' },
    { name: 'React.js', level: 85, icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
    { name: 'Python', level: 75, icon: '🐍', category: 'Backend' },
    { name: 'UI/UX Design', level: 85, icon: '🎨', category: 'Design' },
    { name: 'MongoDB', level: 70, icon: '🍃', category: 'Database' },
    { name: 'Git', level: 88, icon: '📚', category: 'Tools' },
    { name: 'Docker', level: 65, icon: '🐳', category: 'DevOps' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Database', 'Tools', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level) => {
    if (level >= 85) return 'gradient-primary';
    if (level >= 75) return 'gradient-secondary';
    if (level >= 65) return 'gradient-accent';
    return 'gradient-warm';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/5 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Keahlian{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang inovatif
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'gradient-primary text-white shadow-lg hover-lift'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-morphism rounded-2xl p-6 hover-lift transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <span className="text-sm text-gray-500">{skill.category}</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`skill-progress h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
                <div 
                  className="absolute top-0 left-0 h-full w-2 bg-white rounded-full shadow-sm transition-all duration-1000 ease-out"
                  style={{
                    left: isVisible ? `calc(${skill.level}% - 4px)` : '-4px',
                    transitionDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🏆',
              title: 'Sertifikasi',
              description: 'AWS Certified, Google Cloud Professional',
              color: 'gradient-primary'
            },
            {
              icon: '📚',
              title: 'Terus Belajar',
              description: 'Selalu update dengan teknologi terbaru',
              color: 'gradient-secondary'
            },
            {
              icon: '🤝',
              title: 'Kolaborasi',
              description: 'Pengalaman kerja dalam tim dan project management',
              color: 'gradient-accent'
            }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-full text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;