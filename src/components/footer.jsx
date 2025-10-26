import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Code, Heart } from 'lucide-react';

const HackerFooter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const techStack = [
    'React.js', 'Node.js', 'MongoDB', 'Express.js', 
    'TailwindCSS', 'JavaScript', 'Python', 'Git'
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 border-2 border-green-400 bg-black flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.5)] group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-green-400 group-hover:text-black transition-colors" />
        </button>
      )}

      {/* Main Footer */}
      <footer className="relative bg-black border-t-2 border-green-400 text-green-400 font-mono">
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.1) 0px, transparent 2px, transparent 4px)',
        }} />

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10">
          {/* Terminal Header */}
          <div className="border-b border-green-400/30 bg-green-400/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs tracking-wider">root@AAYAN_ANEES:~$</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-400">UPTIME:</span>
                  <span className="text-green-400">{formatUptime(uptime)}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-green-400">STATUS: ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 border-2 border-green-500 bg-black flex items-center justify-center font-bold text-lg shadow-[0_0_10px_rgba(0,255,0,0.5)]">
                    AA
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-lg">
                      AAYAN<span className="text-green-500">_ANEES</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-green-400">{'>'}</span> Full-Stack Developer
                  <br />
                  <span className="text-green-400">{'>'}</span> Building digital solutions
                  <br />
                  <span className="text-green-400">{'>'}</span> One commit at a time
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Code className="w-4 h-4" />
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>& React</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <div className="text-green-400 text-sm font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>QUICK_LINKS</span>
                </div>
                <div className="space-y-2">
                  {quickLinks.map((link, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(link.id)}
                      className="block text-gray-400 hover:text-green-400 transition-colors text-sm group"
                    >
                      <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span> {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <div className="text-green-400 text-sm font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>TECH_STACK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs border border-green-400/30 px-2 py-1 text-gray-400 hover:border-green-400 hover:text-green-400 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <div className="text-green-400 text-sm font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>CONNECT</span>
                </div>
                <div className="space-y-3">
                  <a
                    href="https://github.com/aayanA91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  >
                    <div className="w-8 h-8 border border-green-400/30 group-hover:border-green-400 bg-black flex items-center justify-center transition-all">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aayan-aness-b1a14231b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  >
                    <div className="w-8 h-8 border border-green-400/30 group-hover:border-green-400 bg-black flex items-center justify-center transition-all">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:aayan.practical@gmail.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  >
                    <div className="w-8 h-8 border border-green-400/30 group-hover:border-green-400 bg-black flex items-center justify-center transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-400/30 bg-green-400/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                <div className="text-gray-400">
                  <span className="text-green-400">{'>'}</span> © {currentYear} AAYAN_ANEES. All rights reserved.
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <span>Version 1.0.0</span>
                  <span>|</span>
                  <span>Built with React & TailwindCSS</span>
                  <span>|</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400">DEPLOYED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Command Line */}
          <div className="border-t border-green-400/30 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center gap-2 text-xs text-green-500">
                <span>root@portfolio:~$</span>
                <span className="text-gray-400">cat message.txt</span>
                <span className="text-green-400 animate-pulse">_</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                "Thanks for visiting. Let's build something great together!"
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HackerFooter;