import React, { useEffect, useRef } from 'react';

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div ref={sectionRef} className="section-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Tentang{' '}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Perjalanan Saya
                </span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Halo! Saya adalah seorang <strong className="text-gray-900">Web Developer</strong> yang juga 
                <strong className="text-gray-900"> Digital Nomad</strong>. Perjalanan saya di dunia teknologi 
                dimulai lebih dari <strong className="text-gray-900">5 tahun</strong> yang lalu, dan sejak itu 
                saya telah mengombinasikan passion coding dengan kecintaan terhadap traveling.
              </p>
              
              <p>
                Saya percaya bahwa <em>pengalaman hidup yang beragam</em> membuat saya menjadi developer yang 
                lebih kreatif dan inovatif. Dari bekerja di café-café di Bali hingga coding di co-working space 
                di Tokyo, setiap tempat memberikan inspirasi baru untuk project-project saya.
              </p>
              
              <p>
                Selain coding dan traveling, saya juga memiliki berbagai hobi seperti fotografi, hiking, 
                kuliner, dan membuat konten digital. Saya suka berbagi pengalaman melalui blog dan media sosial.
              </p>

              <p>
                <strong className="text-gray-900">Mission saya:</strong> Menciptakan solusi teknologi yang 
                berdampak positif sambil mengeksplorasi keindahan dunia dan budaya yang beragam.
              </p>
            </div>

            {/* Life Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-600 font-medium">Kota Dikunjungi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600 font-medium">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-gray-600 font-medium">Hobi Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-warm bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Foto Travel</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="glass-morphism rounded-3xl p-8 hover-lift">
              <div className="space-y-6">
                {/* Profile Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full gradient-primary p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl">
                      🌍
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">Digital Nomad</h3>
                    <p className="text-gray-600">Developer & Explorer</p>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-4">
                  {[
                    { icon: '📍', label: 'Current Location', value: 'Bali, Indonesia' },
                    { icon: '🎓', label: 'Education', value: 'Computer Science' },
                    { icon: '💼', label: 'Work Style', value: 'Remote & Flexible' },
                    { icon: '🌐', label: 'Languages', value: 'ID, EN, JP' },
                    { icon: '✈️', label: 'Travel Style', value: 'Backpacker & Digital' },
                    { icon: '📷', label: 'Content Creator', value: 'Tech & Travel' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{item.label}</div>
                        <div className="text-gray-600">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Follow My Journey</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: '📷', name: 'Instagram', url: 'https://instagram.com/yourhandle' },
                      { icon: '📱', name: 'TikTok', url: 'https://tiktok.com/@yourhandle' },
                      { icon: '✈️', name: 'Travel Blog', url: '#' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg hover:scale-110 hover:shadow-lg transition-all duration-300"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-warm rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-accent rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;