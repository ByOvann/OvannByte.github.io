import React, { useEffect, useRef, useState } from 'react';

function Portfolio() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web App',
      description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan admin dashboard.',
      image: 'https://picsum.photos/600/400?random=1',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Learning Management System',
      category: 'Web App',
      description: 'Sistem manajemen pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.',
      image: 'https://picsum.photos/600/400?random=2',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Healthcare Mobile App',
      category: 'Mobile',
      description: 'Aplikasi mobile untuk konsultasi kesehatan online dengan fitur telemedicine dan appointment booking.',
      image: 'https://picsum.photos/600/400?random=3',
      tech: ['React Native', 'Firebase', 'Socket.io'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'Website',
      description: 'Website restoran dengan desain modern, online reservation system, dan menu digital interaktif.',
      image: 'https://picsum.photos/600/400?random=4',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      link: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management Dashboard',
      category: 'Web App',
      description: 'Dashboard manajemen tugas dengan fitur real-time collaboration, time tracking, dan reporting.',
      image: 'https://picsum.photos/600/400?random=5',
      tech: ['Vue.js', 'Express.js', 'Redis', 'Socket.io'],
      link: '#',
      github: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Website',
      description: 'Website portfolio personal dengan desain kreatif dan animasi yang menarik untuk showcasing karya.',
      image: 'https://picsum.photos/600/400?random=6',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Website', 'Mobile'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`group glass-morphism rounded-2xl overflow-hidden hover-lift transition-all duration-300 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button 
            onClick={() => setSelectedProject(project)}
            className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            View Details
          </button>
          <a 
            href={project.link}
            className="px-6 py-2 gradient-primary text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
          >
            Live Demo
          </a>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 gradient-primary text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{project.category}</span>
          <div className="flex space-x-2">
            <a href={project.github} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={project.link} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6">
            <span className="text-sm text-blue-600 font-medium">{project.category}</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">{project.title}</h3>
            <p className="text-gray-600 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href={project.link}
                className="flex-1 py-3 gradient-primary text-white text-center rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                View Live Demo
              </a>
              <a 
                href={project.github}
                className="flex-1 py-3 bg-gray-100 text-gray-700 text-center rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Portfolio{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Saya
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan project yang telah saya kerjakan dengan berbagai teknologi modern
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tertarik untuk berkolaborasi?
            </h3>
            <p className="text-gray-600 mb-6">
              Saya selalu terbuka untuk project menarik dan kerjasama yang saling menguntungkan.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 gradient-primary text-white font-semibold rounded-full hover-lift transition-all duration-300 hover:shadow-lg"
            >
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

window.Portfolio = Portfolio;