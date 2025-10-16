import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  const socialLinks = [
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/johndoe' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/johndoe' },
    { icon: '📷', name: 'Instagram', url: 'https://instagram.com/johndoe' },
    { icon: '📧', name: 'Email', url: 'mailto:john.doe@email.com' },
  ];

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
              John Doe
            </div>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Web Developer yang passionate dalam menciptakan pengalaman digital yang menakjubkan 
              dan solusi inovatif untuk masa depan yang lebih baik.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">📧</span>
                <a 
                  href="mailto:john.doe@email.com" 
                  className="hover:text-white transition-colors duration-200"
                >
                  john.doe@email.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3 text-lg">📱</span>
                <a 
                  href="tel:+6281234567890" 
                  className="hover:text-white transition-colors duration-200"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile App Development</li>
              <li>E-commerce Solutions</li>
              <li>Consulting</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Dapatkan update terbaru tentang teknologi dan tips development
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
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} John Doe. All rights reserved. Made with ❤️ in Indonesia
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
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