import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Coding Journey', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Travel', href: '#travel' },
    { name: 'Hobi', href: '#hobbies' },
    { name: 'Kontak', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/yourusername' },
    { icon: '📷', name: 'Instagram', url: 'https://instagram.com/yourhandle' },
    { icon: '📱', name: 'TikTok', url: 'https://tiktok.com/@yourhandle' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/yourhandle' },
    { icon: '🎥', name: 'YouTube', url: 'https://youtube.com/@yourchannel' },
    { icon: '✈️', name: 'Travel Blog', url: 'https://yourblog.com' },
    { icon: '📧', name: 'Email', url: 'mailto:your.email@gmail.com' },
  ];

  const currentStatus = {
    location: 'Bali, Indonesia',
    timezone: 'UTC+8',
    status: 'Available for projects',
    lastUpdate: 'Currently in Ubud'
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div 
              className="font-display font-bold text-2xl mb-4 gradient-primary bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              Digital Nomad Journey
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Mengeksplorasi dunia teknologi sambil menjelajahi keindahan planet ini. 
              Berbagi perjalanan coding, travel, dan passion melalui konten digital.
            </p>
            
            {/* Current Status */}
            <div className="glass-morphism-dark rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">📍</span>
                Current Status
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white">{currentStatus.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Timezone:</span>
                  <span className="text-white">{currentStatus.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400">{currentStatus.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Update:</span>
                  <span className="text-blue-400">{currentStatus.lastUpdate}</span>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">📧</span>
                <a 
                  href="mailto:your.email@gmail.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  your.email@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">📱</span>
                <a 
                  href="https://wa.me/6281234567890" 
                  className="hover:text-white transition-colors duration-200"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Interests */}
          <div>
            <h3 className="text-lg font-semibold mb-6">What I Do</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">💻</span>
                Web Development
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span>
                UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                Content Creation
              </li>
              <li className="flex items-center">
                <span className="mr-2">✈️</span>
                Travel Documentation
              </li>
              <li className="flex items-center">
                <span className="mr-2">📷</span>
                Photography
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎓</span>
                Tech Mentoring
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Follow My Journey Across Platforms
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 group"
                title={social.name}
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
                <span className="text-xs text-gray-400 text-center">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-xl font-semibold mb-4">
              🚀 Join My Journey Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Dapatkan update tentang perjalanan coding, travel tips, dan insights tentang 
              digital nomad lifestyle langsung di inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Digital Nomad Journey. Made with ❤️ while traveling the world.
              <br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              Currently coding from {currentStatus.location}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-gray-400 text-sm">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-all duration-300 hover:shadow-lg z-40"
        title="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}

window.Footer = Footer;