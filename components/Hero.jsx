import React, { useEffect, useState } from 'react';

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'UI/UX Designer', 'Frontend Developer', 'Creative Coder'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 gradient-secondary rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 gradient-accent rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 gradient-warm rounded-full opacity-25 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8">
            <div className="w-full h-full rounded-full gradient-primary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl md:text-5xl">
                👤
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
              Halo, Saya{' '}
              <span className="gradient-primary bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium min-h-[2rem]">
              Saya seorang{' '}
              <span className="gradient-secondary bg-clip-text text-transparent font-semibold transition-all duration-500">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-typewriter">
              Passionate tentang menciptakan pengalaman digital yang menakjubkan dan solusi inovatif untuk masa depan yang lebih baik.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 gradient-primary text-white font-semibold rounded-full hover-lift transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Lihat Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover-lift shadow-lg"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;