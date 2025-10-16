import React, { useEffect, useRef, useState } from 'react';

function Hobbies() {
  const sectionRef = useRef(null);
  const [selectedHobby, setSelectedHobby] = useState(null);

  const hobbies = [
    {
      id: 1,
      name: 'Fotografi',
      icon: '📷',
      level: 'Advanced',
      description: 'Mengabadikan momen perjalanan dan kehidupan sehari-hari dengan gaya street photography dan landscape.',
      image: 'https://picsum.photos/600/400?random=20',
      skills: ['Street Photography', 'Landscape', 'Portrait', 'Mobile Photography'],
      equipment: ['Sony Alpha 7IV', 'iPhone 14 Pro', 'DJI Drone'],
      achievements: ['1000+ followers Instagram', '50+ featured photos', 'Local exhibition participant'],
      timeSpent: '10+ hours/week',
      featured: true
    },
    {
      id: 2,
      name: 'Hiking & Outdoor',
      icon: '🏔️',
      level: 'Expert',
      description: 'Mendaki gunung dan eksplorasi alam untuk menenangkan pikiran dan mencari inspirasi.',
      image: 'https://picsum.photos/600/400?random=21',
      skills: ['Mountain Hiking', 'Trail Running', 'Camping', 'Navigation'],
      equipment: ['Hiking Boots', 'Backpack 40L', 'Sleeping Bag', 'GPS Device'],
      achievements: ['Mount Rinjani Summit', '20+ mountains climbed', 'Wilderness First Aid certified'],
      timeSpent: 'Weekends',
      featured: true
    },
    {
      id: 3,
      name: 'Kuliner & Cooking',
      icon: '🍜',
      level: 'Intermediate',
      description: 'Eksplorasi kuliner lokal dan internasional, serta eksperimen memasak di rumah.',
      image: 'https://picsum.photos/600/400?random=22',
      skills: ['Local Cuisine', 'Fusion Cooking', 'Food Photography', 'Restaurant Reviews'],
      equipment: ['Camera untuk Food', 'Cooking Set', 'Spice Collection'],
      achievements: ['100+ restaurants reviewed', 'Food blog dengan 500+ readers', 'Cooking class certificates'],
      timeSpent: 'Daily',
      featured: false
    },
    {
      id: 4,
      name: 'Content Creation',
      icon: '🎬',
      level: 'Advanced',
      description: 'Membuat konten digital untuk berbagi pengalaman travel, tech tips, dan lifestyle.',
      image: 'https://picsum.photos/600/400?random=23',
      skills: ['Video Editing', 'Social Media', 'Copywriting', 'Storytelling'],
      equipment: ['Camera', 'Microphone', 'Editing Software', 'Tripod'],
      achievements: ['5K+ YouTube subscribers', '10K+ Instagram followers', 'Brand collaborations'],
      timeSpent: '15+ hours/week',
      featured: true
    },
    {
      id: 5,
      name: 'Gaming',
      icon: '🎮',
      level: 'Casual',
      description: 'Gaming untuk relaksasi dan bersosialisasi dengan komunitas global.',
      image: 'https://picsum.photos/600/400?random=24',
      skills: ['Strategy Games', 'Indie Games', 'Mobile Gaming', 'Game Reviews'],
      equipment: ['Gaming Laptop', 'Mechanical Keyboard', 'Gaming Mouse', 'Headset'],
      achievements: ['Top 10% in favorite games', 'Gaming blog contributor', 'Local tournament participant'],
      timeSpent: '5-10 hours/week',
      featured: false
    },
    {
      id: 6,
      name: 'Baca & Menulis',
      icon: '📚',
      level: 'Advanced',
      description: 'Membaca buku tentang teknologi, pengembangan diri, dan menulis blog tentang pengalaman.',
      image: 'https://picsum.photos/600/400?random=25',
      skills: ['Tech Books', 'Self Development', 'Blog Writing', 'Book Reviews'],
      equipment: ['Kindle', 'Physical Books', 'Notebook', 'Writing Apps'],
      achievements: ['50+ books/year', 'Active blog writer', '100+ articles published'],
      timeSpent: '1-2 hours/day',
      featured: false
    }
  ];

  const hobbyCategories = [
    { name: 'All', count: hobbies.length },
    { name: 'Creative', count: 3 },
    { name: 'Outdoor', count: 2 },
    { name: 'Digital', count: 2 },
    { name: 'Learning', count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-green-600 bg-green-50 border-green-200';
      case 'Advanced': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Casual': return 'text-gray-600 bg-gray-50 border-gray-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const HobbyCard = ({ hobby, index }) => (
    <div 
      className={`group glass-morphism rounded-2xl overflow-hidden hover-lift transition-all duration-300 ${
        hobby.featured ? 'md:col-span-2' : ''
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Hobby Image */}
      <div className="relative overflow-hidden">
        <img 
          src={hobby.image} 
          alt={hobby.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => setSelectedHobby(hobby)}
            className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Lihat Detail
          </button>
        </div>
        
        {/* Featured Badge */}
        {hobby.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 gradient-primary text-white text-xs font-semibold rounded-full">
              Passion
            </span>
          </div>
        )}

        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getLevelColor(hobby.level)}`}>
            {hobby.level}
          </span>
        </div>
      </div>

      {/* Hobby Info */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-3xl mr-3">{hobby.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {hobby.name}
            </h3>
            <span className="text-sm text-gray-500">Time: {hobby.timeSpent}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {hobby.description}
        </p>
        
        {/* Skills Preview */}
        <div className="flex flex-wrap gap-2">
          {hobby.skills.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded border border-purple-200"
            >
              {skill}
            </span>
          ))}
          {hobby.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded">
              +{hobby.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const HobbyModal = ({ hobby, onClose }) => {
    if (!hobby) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={hobby.image} 
              alt={hobby.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{hobby.icon}</span>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{hobby.name}</h3>
                  <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full border ${getLevelColor(hobby.level)} mt-2`}>
                    {hobby.level}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Time Investment</div>
                <div className="font-semibold text-gray-900">{hobby.timeSpent}</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg">{hobby.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🎯 Skills & Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {hobby.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded border border-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🛠️ Equipment & Tools</h4>
                <ul className="space-y-2">
                  {hobby.equipment.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🏆 Achievements & Milestones</h4>
              <ul className="space-y-2">
                {hobby.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="hobbies" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm30 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Hobi &{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Passion
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai aktivitas yang saya nikmati di luar dunia coding - dari fotografi hingga petualangan outdoor
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {hobbyCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'gradient-primary text-white shadow-lg hover-lift'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={index} />
          ))}
        </div>

        {/* Life Balance Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚖️</span>
              Work-Life Balance
            </h3>
            <p className="text-gray-600 mb-6">
              Saya percaya bahwa hobi dan passion di luar coding membantu saya menjadi developer yang lebih kreatif 
              dan inovatif. Setiap aktivitas memberikan perspektif baru yang sering saya terapkan dalam project.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Coding & Work</span>
                <span className="font-semibold text-blue-600">60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hobbies & Personal</span>
                <span className="font-semibold text-green-600">40%</span>
              </div>
            </div>
          </div>

          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Inspiration Sources
            </h3>
            <p className="text-gray-600 mb-6">
              Hobi-hobi ini sering menjadi sumber inspirasi untuk project coding saya. Dari UI/UX yang terinspirasi 
              alam hingga algoritma yang terinspirasi dari pola-pola photography.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Nature Photography → UI Colors',
                'Travel → User Experience',
                'Hiking → Problem Solving',
                'Gaming → Interactive Design'
              ].map((inspiration, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200"
                >
                  {inspiration}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Join Me Section */}
        <div className="glass-morphism rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🤝 Mari Berbagi Hobi!
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Punya hobi yang sama? Atau ingin sharing pengalaman travel dan photography? 
            Saya selalu senang bertemu orang-orang dengan passion yang sama!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 gradient-primary text-white font-semibold rounded-full hover-lift transition-all duration-300 hover:shadow-lg"
            >
              Follow My Adventures
            </a>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover-lift"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Hobby Modal */}
      <HobbyModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />
    </section>
  );
}

window.Hobbies = Hobbies;