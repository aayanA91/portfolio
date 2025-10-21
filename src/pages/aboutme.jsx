import React, { useState, useEffect } from 'react';
import { Terminal, Code, Cpu, Zap, Database, Server, Lock, Boxes } from 'lucide-react';

 const AboutPage = ()=>{
  const [glitchText, setGlitchText] = useState('FULL-STACK DEVELOPER');
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = 'FULL-STACK DEVELOPER';
    let iterations = 0;

    const interval = setInterval(() => {
      setGlitchText(prev => 
        originalText.split('').map((char, index) => {
          if (index < iterations) {
            return originalText[index];
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }).join('')
      );

      if (iterations >= originalText.length) {
        clearInterval(interval);
      }
      iterations += 1/3;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { value: '> 50', label: 'REPOSITORIES', color: 'from-green-400 to-emerald-500' },
    { value: '∞', label: 'UPTIME', color: 'from-green-400 to-cyan-400' },
    { value: '< 100ms', label: 'RESPONSE TIME', color: 'from-green-400 to-lime-400' },
    { value: '99.9%', label: 'CODE QUALITY', color: 'from-green-400 to-teal-400' }
  ];

  const timeline = [
    {
      phase: '[INIT]',
      year: '2020',
      title: '>> SYSTEM BOOT',
      description: 'Initialized development environment. Compiled first lines of HTML, CSS & JavaScript.'
    },
    {
      phase: '[BUILD]',
      year: '2022',
      title: '>> BACKEND PROTOCOLS',
      description: 'Deployed Node.js servers. Established database connections. Automated Discord ecosystems.'
    },
    {
      phase: '[OPTIMIZE]',
      year: '2024',
      title: '>> FRONTEND MASTERY',
      description: 'React components rendered. State management optimized. UI/UX patterns perfected.'
    },
    {
      phase: '[SCALE]',
      year: '2024',
      title: '>> FULL-STACK ARCHITECT',
      description: 'API endpoints secured. MongoDB clusters deployed. Microservices orchestrated.'
    },
    {
      phase: '[DEPLOY]',
      year: 'PRESENT',
      title: '>> PRODUCTION MODE',
      description: 'Systems operational. Solutions deployed. Continuously shipping code that matters.'
    }
  ];

  const capabilities = [
    {
      icon: <Terminal className="w-10 h-10" />,
      title: 'TERMINAL WIZARDRY',
      description: 'Command-line mastery for automation, scripting, and system optimization.',
      tech: ['Bash', 'Git', 'Linux']
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'CODE ARCHITECTURE',
      description: 'Building scalable, maintainable systems with clean architectural patterns.',
      tech: ['React', 'Node.js', 'TypeScript']
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'DATA ENGINEERING',
      description: 'Designing robust databases and efficient data flow architectures.',
      tech: ['MongoDB', 'SQL', 'Redis']
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'API DEVELOPMENT',
      description: 'Creating RESTful and GraphQL APIs with security and performance in mind.',
      tech: ['Express', 'REST', 'GraphQL']
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'PERFORMANCE HACKING',
      description: 'Optimizing load times, reducing bundle sizes, maximizing efficiency.',
      tech: ['Webpack', 'Vite', 'Optimization']
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: 'SECURITY PROTOCOLS',
      description: 'Implementing authentication, encryption, and secure coding practices.',
      tech: ['JWT', 'OAuth', 'HTTPS']
    }
  ];

  const principles = [
    {
      title: 'CODE > COMMENTS',
      description: 'Self-documenting code speaks louder than documentation. Write code that reads like poetry.'
    },
    {
      title: 'BREAK > BUILD',
      description: 'Test boundaries. Push limits. Break things to understand how to build them better.'
    },
    {
      title: 'AUTOMATE > REPEAT',
      description: 'If you do it twice, automate it. Time is the most valuable resource in development.'
    },
    {
      title: 'LEARN > KNOW',
      description: 'Technology evolves faster than knowledge expires. Stay curious, stay learning.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono" id='about'>
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

      <div className="relative z-10">
        {/* Hero Terminal */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl w-full">
            <div className="border-2 border-green-400 bg-black shadow-2xl shadow-green-400/20">
              {/* Terminal Header */}
              <div className="border-b-2 border-green-400 p-4 flex items-center justify-between bg-green-400/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}} />
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
                <span className="text-xs tracking-wider">root@AAYAN_ANEES:/about</span>
                <Terminal className="w-5 h-5" />
              </div>

              {/* Terminal Content */}
              <div className="p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <div className="text-green-500 text-sm">
                    <span className="animate-pulse">█</span> sudo whoami
                  </div>
                  
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                      <span className="text-white">AAYAN</span>{' '}
                      <span className="text-green-400">ANEES</span>
                    </h1>
                    
                    <div className="text-xl md:text-3xl font-bold text-green-300 tracking-wider">
                      {glitchText}
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent" />

                    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                      <span className="text-green-400">{'>'}</span> Hacker mentality. Engineer mindset. Problem solver at core.
                      <br />
                      <span className="text-green-400">{'>'}</span> I don't just write code—I craft digital architectures that scale.
                      <br />
                      <span className="text-green-400">{'>'}</span> From terminal to production, I build systems that work.
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                  {metrics.map((metric, i) => (
                    <div 
                      key={i}
                      className="border border-green-400/30 bg-green-400/5 p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group"
                    >
                      <div className={`text-2xl md:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                        {metric.value}
                      </div>
                      <div className="text-xs tracking-wider text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-green-400/5 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="text-green-500 text-sm mb-2">
                <span className="animate-pulse">█</span> cat timeline.log
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">EXECUTION HISTORY</h2>
              <p className="text-gray-300 text-lg">
                Every commit tells a story. Every bug fixed is a lesson learned. Here's my development journey.
              </p>
            </div>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div 
                  key={i}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 border-2 border-green-400 bg-black flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-400 group-hover:bg-black" />
                    </div>
                    {i !== timeline.length - 1 && (
                      <div className="w-px h-full bg-green-400/30 group-hover:bg-green-400 transition-colors" />
                    )}
                  </div>
                  
                  <div className="flex-1 pb-12">
                    <div className="border border-green-400/30 bg-black p-6 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-green-400 font-bold text-xs tracking-wider">{item.phase}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-400 text-sm">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="text-green-500 text-sm mb-2">
                <span className="animate-pulse">█</span> ls -la /skills
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">CORE CAPABILITIES</h2>
              <p className="text-gray-300 text-lg">
                Tools mastered. Patterns learned. Systems built. Here's what I bring to production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => (
                <div 
                  key={i}
                  className="border border-green-400/30 bg-black p-6 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group"
                >
                  <div className="text-green-400 mb-4 group-hover:scale-110 group-hover:text-green-300 transition-all duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cap.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((t, j) => (
                      <span key={j} className="text-xs px-2 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 px-4 bg-green-400/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <div className="text-green-500 text-sm mb-2">
                <span className="animate-pulse">█</span> cat principles.txt
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">CODE PHILOSOPHY</h2>
              <p className="text-gray-300 text-lg">
                Rules I code by. Principles I live by. Standards I never compromise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, i) => (
                <div 
                  key={i}
                  className="border border-green-400/30 bg-black p-8 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-12 px-4 border-t border-green-400/30">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-green-500">
                <span>root@portfolio:~#</span>
                <span className="text-white">./status.sh</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-bold tracking-wider">ONLINE | AVAILABLE | READY TO DEPLOY</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AboutPage;