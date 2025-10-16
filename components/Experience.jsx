import React, { useEffect, useRef } from 'react';

function Experience() {
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Indonesia',
      period: '2022 - Sekarang',
      location: 'Remote / Bali',
      description: 'Memimpin tim frontend dalam pengembangan aplikasi web scalable sambil menjalani lifestyle digital nomad. Bertanggung jawab atas arsitektur frontend dan optimasi performa.',
      achievements: [
        'Meningkatkan performa aplikasi hingga 40%',
        'Memimpin tim 5 developer remote',
        'Implementasi design system perusahaan',
        'Mentoring junior developers across timezones'
      ],
      tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
      icon: '💻',
      color: 'gradient-primary',
      lifestyle: 'Bekerja dari berbagai kota sambil traveling'
    },
    {
      title: 'Fullstack Developer & Content Creator',
      company: 'Digital Startup',
      period: '2020 - 2022',
      location: 'Remote / Multi-City',
      description: 'Mengembangkan aplikasi web end-to-end menggunakan MERN stack sambil membuat konten edukasi tentang programming dan remote work lifestyle.',
      achievements: [
        'Membangun 3 produk MVP dari zero to launch',
        'Mengimplementasi CI/CD pipeline',
        'Mengelola database dengan 10M+ records',
        'Membangun following 5K+ di YouTube'
      ],
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS'],
      icon: '🚀',
      color: 'gradient-secondary',
      lifestyle: 'Nomadic lifestyle dimulai dari periode ini'
    },
    {
      title: 'Frontend Developer & Travel Blogger',
      company: 'Creative Agency',
      period: '2019 - 2020',
      location: 'Bandung / Southeast Asia',
      description: 'Mengembangkan website dan aplikasi web untuk berbagai klien sambil mulai eksplorasi travel blogging dan dokumentasi perjalanan.',
      achievements: [
        'Menyelesaikan 20+ project klien',
        'Meningkatkan conversion rate hingga 25%',
        'Implementasi best practices SEO',
        'Mulai travel blog dengan 1K+ readers'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'Photoshop'],
      icon: '🎨',
      color: 'gradient-accent',
      lifestyle: 'Weekend trips dan dokumentasi kuliner lokal'
    },
    {
      title: 'Junior Web Developer',
      company: 'Local Software House',
      period: '2018 - 2019',
      location: 'Yogyakarta',
      description: 'Memulai karir sebagai web developer dengan fokus pada pengembangan website corporate. Periode pembelajaran fundamental programming dan discovery passion untuk travel.',
      achievements: [
        'Menguasai fundamental web development',
        'Berkontribusi pada 15+ project',
        'Mendapat promosi dalam 8 bulan',
        'Mulai hobby fotografi dan hiking'
      ],
      tech: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Git'],
      icon: '📱',
      color: 'gradient-warm',
      lifestyle: 'Eksplorasi wisata lokal Yogyakarta di weekend'
    }
  ];

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

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23667eea' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Coding{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan karir saya dalam dunia teknologi - dari junior developer lokal hingga digital nomad
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full gradient-primary rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 ${exp.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 ml-16 md:ml-0' : 'md:pl-16 ml-16 md:ml-0'
                }`}>
                  <div className="glass-morphism rounded-2xl p-6 hover-lift">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${exp.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <div className="text-lg font-semibold gradient-primary bg-clip-text text-transparent">
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center">
                            📅 {exp.period}
                          </span>
                          <span className="flex items-center">
                            📍 {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Lifestyle */}
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center">
                        <span className="text-blue-500 mr-2">🌟</span>
                        <span className="font-medium text-blue-900">Lifestyle: </span>
                        <span className="text-blue-700 ml-1">{exp.lifestyle}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Highlights */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Journey Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Tahun Coding', icon: '⏱️', detail: 'From junior to senior' },
              { number: '15+', label: 'Kota Remote Work', icon: '🌍', detail: 'Across 3 continents' },
              { number: '50+', label: 'Project Delivered', icon: '🚀', detail: 'Various industries' },
              { number: '5K+', label: 'Community Following', icon: '👥', detail: 'Tech & travel content' },
            ].map((stat, index) => (
              <div key={index} className="text-center group glass-morphism rounded-xl p-6 hover-lift">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-900 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 glass-morphism rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💭 Coding Philosophy
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            "Coding bukan hanya tentang menulis kode, tapi tentang menyelesaikan masalah nyata dan menciptakan 
            impact positif. Setiap tempat yang saya kunjungi, setiap budaya yang saya alami, memberikan 
            perspektif baru yang membuat saya menjadi developer yang lebih baik."
          </p>
        </div>
      </div>
    </section>
  );
}

window.Experience = Experience;