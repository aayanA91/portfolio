import React, { useState, useEffect } from 'react';

const HackerNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', command: 'cd ~'  },
    { id: 'about', label: 'ABOUT', command: 'cat about.txt' },
    { id: 'projects', label: 'PROJECTS', command: 'ls projects/' },
    { id: 'skills', label: 'SKILLS', command: 'grep skills' },
    { id: 'contact', label: 'CONTACT', command: 'mail -s' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 backdrop-blur-md border-b border-green-500 shadow-[0_0_20px_rgba(0,255,0,0.3)]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo / Brand */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 border-2 border-green-500 bg-black flex items-center justify-center font-mono text-green-400 font-bold text-lg shadow-[0_0_10px_rgba(0,255,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-300">
                  AA
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 animate-pulse rounded-full" />
              </div>
              <div className="hidden md:block">
                <div className="text-green-400 font-mono font-bold text-xl group-hover:text-green-300 transition-colors">
                  AAYAN<span className="text-green-500">_ANEES</span>
                </div>
                <div className="text-green-600 font-mono text-xs">
                  &gt; root@portfolio:~#
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                 onClick={() => {
  setActiveLink(link.id);
  const section = document.getElementById(link.id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}}

                  className="group relative px-4 py-2 font-mono text-sm transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <span className={`${
                      activeLink === link.id 
                        ? 'text-green-400' 
                        : 'text-green-500 group-hover:text-green-400'
                    } transition-colors duration-200`}>
                      [{link.label}]
                    </span>
                    <span className="text-green-700 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {link.command}
                    </span>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeLink === link.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                  )}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 border border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>

            {/* Right Section - System Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 border border-green-500 bg-black flex items-center justify-center transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>

                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-8 h-8 border border-green-500 bg-black flex items-center justify-center transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a 
                  href="mailto:your.email@example.com"
                  className="group relative w-8 h-8 border border-green-500 bg-black flex items-center justify-center transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                  aria-label="Email"
                >
                  <svg className="w-4 h-4 text-green-500 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-green-500 opacity-30" />

              {/* Time Display */}
              <div className="text-green-400 font-mono text-xs border border-green-500 px-3 py-1 bg-black shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                {time.toLocaleTimeString('en-US', { hour12: false })}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 px-3 py-1 border border-green-500 bg-black shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping" />
                </div>
                <span className="text-green-400 font-mono text-xs">ONLINE</span>
              </div>

              {/* CTA Button */}
              <button className="group relative px-4 py-2 font-mono text-xs text-green-400 border border-green-500 bg-black overflow-hidden transition-all duration-300 hover:text-black shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_20px_rgba(0,255,0,0.6)]">
                <span className="relative z-10">&gt; HIRE_ME</span>
                <div className="absolute inset-0 bg-green-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-green-400 border border-green-500 bg-black hover:bg-green-500 hover:text-black transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen border-t border-green-500' : 'max-h-0'
        }`}>
          <div className="bg-black bg-opacity-98 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-mono text-sm border transition-all duration-200 ${
                  activeLink === link.id
                    ? 'border-green-400 bg-green-500 bg-opacity-10 text-green-400 shadow-[0_0_15px_rgba(0,255,0,0.3)]'
                    : 'border-green-500 text-green-500 hover:border-green-400 hover:bg-green-500 hover:bg-opacity-5'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>&gt; {link.label}</span>
                  <span className="text-xs text-green-600">{link.command}</span>
                </div>
              </button>
            ))}
            
            {/* Mobile System Info */}
            <div className="mt-4 pt-4 border-t border-green-500 space-y-2">
              {/* Social Links Mobile */}
              <div className="flex justify-center gap-3 mb-3">
              <a
  href="https://github.com/aayanA91"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 border border-green-500 bg-black flex items-center justify-center hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 transition-all duration-300"
  aria-label="GitHub"
>
  <svg
    className="w-5 h-5 text-green-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
</a>


                <a 
                  href="https://www.linkedin.com/in/aayan-aness-b1a14231b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-green-500 bg-black flex items-center justify-center hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a 
                  href="https://mail.google.com/mail/?view=cm&to=aayan.practical@gmail.com"
                  className="w-10 h-10 border border-green-500 bg-black flex items-center justify-center hover:border-green-400 hover:bg-green-500 hover:bg-opacity-10 transition-all duration-300"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                
              </div>

              <div className="flex justify-between items-center text-green-400 font-mono text-xs">
                <span>STATUS:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-green-400 font-mono text-xs">
                <span>TIME:</span>
                <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
              </div>
              <button className="w-full mt-3 px-4 py-3 font-mono text-sm text-green-400 border border-green-500 bg-black hover:bg-green-500 hover:text-black transition-all duration-300">
                &gt; HIRE_ME
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Terminal Command Preview (appears on hover) */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
        <div className="bg-black border border-green-500 px-4 py-2 font-mono text-green-400 text-xs opacity-0 hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(0,255,0,0.3)]">
          <span className="text-green-500">&gt;</span> Navigation Active
        </div>
      </div>
    </>
  );
};

export default HackerNavbar;