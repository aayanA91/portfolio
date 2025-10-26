import React, { useState, useEffect } from 'react';
import { Terminal, Mail, MapPin, Phone, Send, Github, Linkedin, AlertCircle, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [cursorBlink, setCursorBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate sending (replace with actual API call)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'EMAIL',
      value: 'aayan.practical@gmail.com',
      link: 'mailto:aayan.practical@gmail.com',
      command: 'mail -s'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'LOCATION',
      value: 'Karachi, Pakistan',
      command: 'locate'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'PHONE',
      value: '03341360464',
      link:"https://wa.me/+923341360464?text=Hello%20I%20saw%20your%20portfolio!",
command: 'call'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      handle: '@aayanA91',
      link: 'https://github.com/aayanA91'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      handle: 'Aayan Anees',
      link: 'https://www.linkedin.com/in/aayan-aness-b1a14231b/'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono" id="contact">
      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-50" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.1) 0px, transparent 2px, transparent 4px)',
      }} />

      {/* Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Terminal */}
          <div className="border-2 border-green-400 bg-black shadow-2xl shadow-green-400/20 mb-12">
            <div className="border-b-2 border-green-400 p-4 flex items-center justify-between bg-green-400/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}} />
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.6s'}} />
              </div>
              <span className="text-xs tracking-wider">root@AAYAN_ANEES:/contact</span>
              <Terminal className="w-5 h-5" />
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="text-green-500 text-sm">
                <span className="animate-pulse">█</span> sudo init contact_protocol
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
                  GET IN TOUCH
                </h1>
                
                <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />

                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                  <span className="text-green-400">{'>'}</span> Ready to collaborate on your next project?
                  <br />
                  <span className="text-green-400">{'>'}</span> Let's build something amazing together.
                  <br />
                  <span className="text-green-400">{'>'}</span> All communication channels are open and monitored 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="border-2 border-green-400/30 bg-black hover:border-green-400 transition-all duration-300">
              <div className="border-b border-green-400/30 p-4 bg-green-400/5">
                <div className="flex items-center gap-2 text-green-400">
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm font-bold">MESSAGE_PROTOCOL</span>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-green-400 text-sm flex items-center gap-2">
                    <span className="text-green-500">{'>'}</span> 
                    <span>YOUR_NAME</span>
                    {cursorBlink && formData.name === '' && <span className="animate-pulse">_</span>}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-400/30 px-4 py-3 text-green-400 focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-green-700"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-green-400 text-sm flex items-center gap-2">
                    <span className="text-green-500">{'>'}</span> 
                    <span>YOUR_EMAIL</span>
                    {cursorBlink && formData.email === '' && <span className="animate-pulse">_</span>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-400/30 px-4 py-3 text-green-400 focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-green-700"
                    placeholder="your.email@domain.com"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-green-400 text-sm flex items-center gap-2">
                    <span className="text-green-500">{'>'}</span> 
                    <span>SUBJECT</span>
                    {cursorBlink && formData.subject === '' && <span className="animate-pulse">_</span>}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-green-400/30 px-4 py-3 text-green-400 focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-green-700"
                    placeholder="Project inquiry, collaboration, etc..."
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-green-400 text-sm flex items-center gap-2">
                    <span className="text-green-500">{'>'}</span> 
                    <span>MESSAGE_BODY</span>
                    {cursorBlink && formData.message === '' && <span className="animate-pulse">_</span>}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full bg-black border border-green-400/30 px-4 py-3 text-green-400 focus:border-green-400 focus:outline-none transition-colors font-mono text-sm placeholder-green-700 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Status Messages */}
                {status === 'sending' && (
                  <div className="border border-yellow-500 bg-yellow-500/10 px-4 py-3 flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-yellow-500 text-sm">TRANSMITTING MESSAGE...</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="border border-green-400 bg-green-400/10 px-4 py-3 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 text-sm">MESSAGE SENT SUCCESSFULLY!</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="border border-red-500 bg-red-500/10 px-4 py-3 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-500 text-sm">TRANSMISSION FAILED. RETRY?</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="group relative w-full px-6 py-4 font-mono text-sm text-green-400 border-2 border-green-400 bg-black overflow-hidden transition-all duration-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    {status === 'sending' ? 'SENDING...' : '> EXECUTE: SEND_MESSAGE'}
                  </span>
                  <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="border-2 border-green-400/30 bg-black hover:border-green-400 transition-all duration-300">
                <div className="border-b border-green-400/30 p-4 bg-green-400/5">
                  <div className="flex items-center gap-2 text-green-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-sm font-bold">CONTACT_INFO</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 text-green-500 text-xs ">
                        <span>{'>'}</span>
                        <span>{info.command}</span>
                      </div>
                     <a 
                                href={info.link}
                                target='_blank'
                                className="text-green-400 hover:text-green-300 transition-colors break-all"
                              >
                      <div className="border border-green-400/30 bg-green-400/5 p-4 hover:border-green-400 transition-all duration-300 group cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="text-green-400 group-hover:text-green-300 transition-colors">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-400 text-xs mb-1">{info.label}</div>
                            {info.link ? (
                              <a 
                                href={info.link}
                                target='_blank'
                                className="text-green-400 hover:text-green-300 transition-colors break-all"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-green-400">{info.value}</div>
                            )}
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="border-2 border-green-400/30 bg-black hover:border-green-400 transition-all duration-300">
                <div className="border-b border-green-400/30 p-4 bg-green-400/5">
                  <div className="flex items-center gap-2 text-green-400">
                    <Terminal className="w-4 h-4" />
                    <span className="text-sm font-bold">SOCIAL_NETWORKS</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-4">
                  <div className="text-green-500 text-xs mb-4">
                    <span>{'>'}</span> cat social_links.txt
                  </div>
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-green-400/30 bg-green-400/5 p-4 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-green-400 group-hover:text-green-300 transition-colors">
                            {social.icon}
                          </div>
                          <div>
                            <div className="text-green-400 font-bold">{social.label}</div>
                            <div className="text-gray-400 text-sm">{social.handle}</div>
                          </div>
                        </div>
                        <div className="text-green-400 group-hover:translate-x-1 transition-transform">
                          →
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="border-2 border-green-400 bg-black shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold">STATUS</span>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
                      </div>
                      <span className="text-green-400 text-sm">AVAILABLE</span>
                    </div>
                  </div>
                  <div className="h-px bg-green-400" />
                  <p className="text-gray-400 text-sm">
                    Currently accepting new projects and collaborations. Response time: &lt; 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <div className="inline-block border border-green-400/30 bg-black px-6 py-3">
              <p className="text-green-500 text-sm font-mono">
                <span className="text-green-400">{'>'}</span> All systems operational. Ready to receive transmissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage