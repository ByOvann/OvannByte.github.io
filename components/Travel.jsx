import React, { useEffect, useRef, useState } from 'react';

function Travel() {
  const sectionRef = useRef(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      type: 'Digital Hub',
      duration: '6 bulan',
      image: 'https://picsum.photos/600/400?random=10',
      description: 'Menjadi base utama untuk remote work sambil menikmati pantai dan budaya lokal yang kaya.',
      highlights: ['Ubud Rice Terraces', 'Canggu Beach', 'Mount Batur Sunrise', 'Traditional Markets'],
      workSpaces: ['Hubud Ubud', 'Dojo Bali', 'Outsite Canggu'],
      bestFor: 'Long-term stay, networking, beach life',
      cost: '$800-1200/month',
      featured: true
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      type: 'Tech Adventure',
      duration: '3 minggu',
      image: 'https://picsum.photos/600/400?random=11',
      description: 'Eksplorasi teknologi terdepan sambil mengalami budaya Jepang yang unik.',
      highlights: ['Shibuya Crossing', 'TeamLab Digital Art', 'Tech District Akihabara', 'Traditional Temples'],
      workSpaces: ['WeWork Shibuya', 'Spaces Shinagawa', 'Local Cafes'],
      bestFor: 'Tech inspiration, cultural immersion',
      cost: '$2000-3000/month',
      featured: true
    },
    {
      id: 3,
      name: 'Lisbon, Portugal',
      type: 'Startup City',
      duration: '2 bulan',
      image: 'https://picsum.photos/600/400?random=12',
      description: 'Bergabung dengan komunitas startup yang vibrant di kota yang penuh sejarah.',
      highlights: ['Tram 28', 'Belém Tower', 'LX Factory', 'Fado Music'],
      workSpaces: ['Second Home', 'Lisbon WorkHub', 'Beato Innovation District'],
      bestFor: 'Startup scene, affordable living',
      cost: '$1200-1800/month',
      featured: false
    },
    {
      id: 4,
      name: 'Chiang Mai, Thailand',
      type: 'Nomad Paradise',
      duration: '4 bulan',
      image: 'https://picsum.photos/600/400?random=13',
      description: 'Menikmati cost of living yang rendah dengan kualitas hidup yang tinggi.',
      highlights: ['Old City Temples', 'Night Bazaar', 'Doi Suthep', 'Cooking Classes'],
      workSpaces: ['CAMP', 'Maya Lifestyle Shopping Center', 'Nimman Cafes'],
      bestFor: 'Budget travel, digital nomad community',
      cost: '$600-900/month',
      featured: false
    },
    {
      id: 5,
      name: 'Mexico City, Mexico',
      type: 'Cultural Hub',
      duration: '6 minggu',
      image: 'https://picsum.photos/600/400?random=14',
      description: 'Mengeksplorasi budaya Latin Amerika sambil bekerja dari kota metropolitan.',
      highlights: ['Frida Kahlo Museum', 'Teotihuacan Pyramids', 'Roma Norte', 'Street Food'],
      workSpaces: ['WeWork Polanco', 'Espacio de Trabajo', 'Local Cafeterias'],
      bestFor: 'Cultural diversity, food scene',
      cost: '$1000-1500/month',
      featured: true
    },
    {
      id: 6,
      name: 'Cape Town, South Africa',
      type: 'Adventure Base',
      duration: '2 bulan',
      image: 'https://picsum.photos/600/400?random=15',
      description: 'Kombinasi kerja remote dengan petualangan outdoor yang menakjubkan.',
      highlights: ['Table Mountain', 'Cape of Good Hope', 'Wine Lands', 'Penguin Colony'],
      workSpaces: ['Workshop17', 'The Bureaux', 'Woodstock Exchange'],
      bestFor: 'Outdoor adventures, unique timezone',
      cost: '$800-1200/month',
      featured: false
    }
  ];

  const travelStats = [
    { icon: '🌍', label: 'Countries Visited', value: '12', color: 'gradient-primary' },
    { icon: '✈️', label: 'Cities Explored', value: '25+', color: 'gradient-secondary' },
    { icon: '📷', label: 'Photos Taken', value: '2000+', color: 'gradient-accent' },
    { icon: '💻', label: 'Remote Projects', value: '30+', color: 'gradient-warm' },
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

  const DestinationCard = ({ destination, index }) => (
    <div 
      className={`group glass-morphism rounded-2xl overflow-hidden hover-lift transition-all duration-300 ${
        destination.featured ? 'md:col-span-2' : ''
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Destination Image */}
      <div className="relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => setSelectedDestination(destination)}
            className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Lihat Detail
          </button>
        </div>
        
        {/* Featured Badge */}
        {destination.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 gradient-primary text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black bg-opacity-50 text-white text-xs font-semibold rounded-full">
            {destination.duration}
          </span>
        </div>
      </div>

      {/* Destination Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{destination.type}</span>
          <span className="text-sm text-gray-500">{destination.cost}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {destination.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        {/* Best For */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-900">Best for: </span>
          <span className="text-sm text-gray-600">{destination.bestFor}</span>
        </div>

        {/* Highlights Preview */}
        <div className="flex flex-wrap gap-2">
          {destination.highlights.slice(0, 3).map((highlight, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200"
            >
              {highlight}
            </span>
          ))}
          {destination.highlights.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded">
              +{destination.highlights.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );

  const DestinationModal = ({ destination, onClose }) => {
    if (!destination) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img 
              src={destination.image} 
              alt={destination.name}
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
              <span className="text-sm text-blue-600 font-medium">{destination.type}</span>
              <span className="text-sm font-medium text-gray-900">{destination.duration}</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{destination.name}</h3>
            <p className="text-gray-600 mb-6 text-lg">{destination.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✨ Highlights</h4>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">💻 Work Spaces</h4>
                <ul className="space-y-2">
                  {destination.workSpaces.map((workspace, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">•</span>
                      {workspace}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Best For</h4>
                <p className="text-gray-600">{destination.bestFor}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💰 Monthly Budget</h4>
                <p className="text-gray-600">{destination.cost}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="travel" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 gradient-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 gradient-secondary rounded-full blur-3xl"></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Perjalanan{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Keliling Dunia
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mengeksplorasi dunia sambil bekerja remote - dari pantai Bali hingga kafe-kafe Tokyo
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Travel Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {travelStats.map((stat, index) => (
            <div key={index} className="glass-morphism rounded-xl p-6 text-center hover-lift">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-full text-white text-xl mb-3`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>

        {/* Travel Philosophy */}
        <div className="glass-morphism rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🌍 Travel Philosophy
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            "Traveling bukan hanya tentang mengunjungi tempat baru, tapi tentang membuka pikiran, 
            bertemu orang-orang inspiratif, dan melihat dunia dari perspektif yang berbeda. 
            Setiap destinasi memberikan pelajaran baru yang saya terapkan dalam coding dan kehidupan."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Slow Travel
            </span>
            <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Sustainable Tourism
            </span>
            <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Cultural Immersion
            </span>
            <span className="px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
              Remote Work Friendly
            </span>
          </div>
        </div>
      </div>

      {/* Destination Modal */}
      <DestinationModal destination={selectedDestination} onClose={() => setSelectedDestination(null)} />
    </section>
  );
}

window.Travel = Travel;