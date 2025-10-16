import React, { useEffect, useRef, useState } from 'react';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@gmail.com',
      link: 'mailto:your.email@gmail.com',
      color: 'gradient-primary'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
      color: 'gradient-secondary'
    },
    {
      icon: '📍',
      title: 'Current Location',
      value: 'Bali, Indonesia',
      link: '#',
      color: 'gradient-accent'
    },
    {
      icon: '🌐',
      title: 'Time Zone',
      value: 'UTC+8 (WITA)',
      link: '#',
      color: 'gradient-warm'
    }
  ];

  const socialLinks = [
    { icon: '📧', name: 'Email', url: 'mailto:your.email@gmail.com', followers: 'Direct Contact' },
    { icon: '💼', name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', followers: '2K+ connections' },
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/yourusername', followers: '500+ followers' },
    { icon: '📷', name: 'Instagram', url: 'https://instagram.com/yourhandle', followers: '10K+ followers' },
    { icon: '📱', name: 'TikTok', url: 'https://tiktok.com/@yourhandle', followers: '5K+ followers' },
    { icon: '🐦', name: 'Twitter', url: 'https://twitter.com/yourhandle', followers: '3K+ followers' },
    { icon: '🎥', name: 'YouTube', url: 'https://youtube.com/@yourchannel', followers: '5K+ subscribers' },
    { icon: '✈️', name: 'Travel Blog', url: 'https://yourblog.com', followers: '1K+ readers' },
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
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
            Mari{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Terhubung
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ingin berkolaborasi, sharing pengalaman travel, atau sekadar ngobrol tentang teknologi? Hubungi saya!
          </p>
          <div className="w-20 h-1 gradient-primary rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📞 Informasi Kontak
              </h3>
              <p className="text-gray-600 mb-8">
                Saya senang terhubung dengan sesama developer, traveler, content creator, atau siapa saja 
                yang ingin sharing pengalaman dan insights!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group glass-morphism rounded-xl p-6 hover-lift transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Current Status */}
            <div className="glass-morphism rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🔄</span>
                Current Status
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">🌍 Location</span>
                  <span className="font-medium text-gray-900">Bali, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">💼 Availability</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Available for projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">📅 Response Time</span>
                  <span className="font-medium text-gray-900">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">🕐 Best Time</span>
                  <span className="font-medium text-gray-900">9 AM - 6 PM WITA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-morphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              💬 Kirim Pesan
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <p className="text-green-700">Pesan berhasil dikirim! Saya akan segera merespon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Pilih topik...</option>
                  <option value="project">🚀 Project Collaboration</option>
                  <option value="travel">✈️ Travel & Nomad Tips</option>
                  <option value="tech">💻 Tech Discussion</option>
                  <option value="content">📱 Content Creation</option>
                  <option value="mentoring">🎓 Mentoring</option>
                  <option value="other">💬 Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Ceritakan tentang project, ide, atau hal yang ingin Anda diskusikan..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'gradient-primary hover:shadow-lg hover-lift'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengirim...
                  </div>
                ) : (
                  '🚀 Kirim Pesan'
                )}
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4 text-center">
              * Field wajib diisi
            </p>
          </div>
        </div>

        {/* Social Media Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            🌐 Follow My Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-morphism rounded-xl p-6 text-center hover-lift transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {social.name}
                </h4>
                <p className="text-xs text-gray-500">{social.followers}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="mt-16 text-center">
          <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ⚡ Need Quick Response?
            </h3>
            <p className="text-gray-600 mb-6">
              Untuk diskusi urgent atau project yang butuh respon cepat, 
              hubungi langsung via WhatsApp atau Instagram DM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 gradient-secondary text-white font-semibold rounded-full hover-lift transition-all duration-300 hover:shadow-lg"
              >
                <span className="mr-2 text-xl">📱</span>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 gradient-accent text-white font-semibold rounded-full hover-lift transition-all duration-300 hover:shadow-lg"
              >
                <span className="mr-2 text-xl">📷</span>
                Instagram DM
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;