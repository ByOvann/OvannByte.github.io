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
                  Saya
                </span>
              </h2>
              <div className="w-20 h-1 gradient-primary rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Saya adalah seorang <strong className="text-gray-900">Web Developer</strong> yang passionate dalam menciptakan 
                pengalaman digital yang menakjubkan. Dengan pengalaman lebih dari <strong className="text-gray-900">5 tahun</strong> 
                di industri teknologi, saya telah mengembangkan keahlian dalam berbagai teknologi modern.
              </p>
              
              <p>
                Saya percaya bahwa <em>desain yang baik tidak hanya tentang estetika</em>, tetapi juga tentang 
                fungsionalitas dan pengalaman pengguna yang optimal. Setiap proyek yang saya kerjakan 
                selalu mengutamakan kualitas, performa, dan kepuasan klien.
              </p>
              
              <p>
                Ketika tidak sedang coding, saya senang menjelajahi teknologi baru, membaca buku tentang 
                pengembangan diri, dan berkontribusi pada komunitas open source.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-600 font-medium">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-secondary bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-600 font-medium">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-accent bg-clip-text text-transparent">30+</div>
                <div className="text-sm text-gray-600 font-medium">Klien Puas</div>
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
                      🚀
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">John Doe</h3>
                    <p className="text-gray-600">Senior Web Developer</p>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-4">
                  {[
                    { icon: '📍', label: 'Location', value: 'Jakarta, Indonesia' },
                    { icon: '🎓', label: 'Education', value: 'Computer Science, UI' },
                    { icon: '💼', label: 'Experience', value: '5+ Years' },
                    { icon: '🌐', label: 'Languages', value: 'ID, EN, JP' },
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

                {/* Download CV Button */}
                <button className="w-full py-3 gradient-secondary text-white font-semibold rounded-xl hover-lift transition-all duration-300 hover:shadow-lg">
                  Download CV
                </button>
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