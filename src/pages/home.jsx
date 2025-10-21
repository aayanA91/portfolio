import React, { useState, useEffect } from 'react';
import HackerNavbar from '../components/navbar';

const HackerHero = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [glitchActive, setGlitchActive] = useState(false);
  const fullText = 'FULL-STACK DEVELOPER';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const glitchTimer = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(glitchTimer);
  }, []);

  const matrixChars = 'アイウエオカキクケコサシスセソタチツテト01';
  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(0).map(() => Math.random() * -100);
    setMatrix(drops);

    const interval = setInterval(() => {
      setMatrix(prev => prev.map((y, i) => {
        if (y > window.innerHeight && Math.random() > 0.95) {
          return 0;
        }
        return y + 1;
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <HackerNavbar/>
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        {matrix.map((y, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${i * 20}px`,
              top: `${y}px`,
              transition: 'top 0.05s linear'
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </div>
        ))}
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-20 animate-scan" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-12 ">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:items-start my-20 ">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 md:mt-20 ">
              {/* Terminal Header */}
              <div className="border border-green-500 bg-black bg-opacity-80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="bg-green-900 bg-opacity-30 px-4 py-2 flex items-center gap-2 border-b border-green-500">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-green-400 text-xs font-mono">~/aayan-anees/portfolio</span>
                </div>
                
                <div className="p-6 font-mono text-sm space-y-2 ">
                  <p className="text-green-400">&gt; sudo whoami</p>
                  <p className="text-green-300 ml-4">root@portfolio:~# Aayan Anees</p>
                  <p className="text-green-400 mt-4">&gt; cat role.txt</p>
                  <p className="text-green-300 ml-4 flex items-center">
                    {text}
                    <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                  </p>
                  <p className="text-green-400 mt-4">&gt; ls -la skills/</p>
                  <p className="text-green-300 ml-4 text-xs space-y-1">
                    <span className="block">drwxr-xr-x  React.js</span>
                    <span className="block">drwxr-xr-x  Node.js</span>
                    <span className="block">drwxr-xr-x  MongoDB</span>
                    <span className="block">drwxr-xr-x  TailwindCSS</span>
                  </p>
                  <p className="text-green-400 mt-4 flex items-center">
                    &gt; <span className="ml-2 animate-pulse">_</span>
                  </p>
                </div>
              </div>

              {/* Name with Glitch Effect */}
              <div className="relative">
                <h1 className={`text-5xl md:text-7xl font-bold text-green-400 font-mono ${glitchActive ? 'animate-glitch' : ''}`}>
                  AAYAN
                  <span className="block text-green-500 mt-2">ANEES_</span>
                </h1>
                {glitchActive && (
                  <>
                    <h1 className="absolute top-0 left-0 text-5xl md:text-7xl font-bold text-red-500 font-mono opacity-70" style={{transform: 'translate(-2px, -2px)'}}>
                      AAYAN
                      <span className="block text-red-600 mt-2">ANEES_</span>
                    </h1>
                    <h1 className="absolute top-0 left-0 text-5xl md:text-7xl font-bold text-blue-500 font-mono opacity-70" style={{transform: 'translate(2px, 2px)'}}>
                      AAYAN
                      <span className="block text-blue-600 mt-2">ANEES_</span>
                    </h1>
                  </>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-6 py-3 font-mono text-green-400 border-2 border-green-500 bg-black overflow-hidden transition-all duration-300 hover:text-black">
                  <span className="relative z-10">&gt; EXECUTE: VIEW_PROJECTS</span>
                  <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
                <button className="group relative px-6 py-3 font-mono text-green-400 border-2 border-green-500 bg-black overflow-hidden transition-all duration-300 hover:text-black">
                  <span className="relative z-10">&gt; INIT: CONTACT</span>
                  <div className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500 rounded-full bg-black shadow-[0_0_15px_rgba(0,255,0,0.3)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-xs font-mono">STATUS: AVAILABLE FOR HIRE</span>
              </div>
            </div>

            {/* Right Side - Interactive Terminal */}
            <div className="space-y-6 md:-mt-20">
              {/* Profile Image Card */}
              <div className="border border-green-500 bg-black bg-opacity-80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)] relative group md:my-40">
                <div className="bg-green-900 bg-opacity-30 px-4 py-2 border-b border-green-500 flex items-center justify-between">
                  <span className="text-green-400 text-xs font-mono">profile_img.png</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                
                <div className="relative aspect-square w-full max-w-sm mx-auto">
                  {/* Placeholder - Replace src with your image path */}
                  <img 
                    src="/id.jpg" 
                    alt="Aayan Anees"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Scanline overlay effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff00 2px, #00ff00 4px)'
                    }} />
                  </div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-green-400" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-green-400" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-green-400" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-green-400" />
                  
                  {/* Hover overlay with loading animation */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-green-400 font-mono text-sm space-y-2">
                      <p>&gt; Loading profile...</p>
                      <div className="w-32 h-1 bg-green-900 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 animate-pulse" style={{width: '100%'}} />
                      </div>
                      <p className="text-xs text-green-500">ACCESS GRANTED ✓</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900 bg-opacity-30 px-4 py-2 border-t border-green-500 font-mono text-xs text-green-400">
                  <p>&gt; Identity verified: AAYAN_ANEES</p>
                </div>
              </div>
              
              {/* System Monitor */}
              <div className="border border-green-500 bg-black bg-opacity-80 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,0,0.3)] font-mono ">
                <div className="text-green-400 text-sm mb-4 flex items-center justify-between">
                  <span>&gt; system_monitor.sh</span>
                  <span className="text-xs">UPTIME: ∞</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-green-300 mb-1">
                      <span>React.js</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{width: '85%'}} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-green-300 mb-1">
                      <span>Node.js</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{width: '80%'}} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-green-300 mb-1">
                      <span>MongoDB</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{width: '75%'}} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs text-green-300 mb-1">
                      <span>TailwindCSS</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full h-2 bg-green-900 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{width: '90%'}} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Preview Box */}
              <div className="border border-green-500 bg-black bg-opacity-80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                <div className="bg-green-900 bg-opacity-30 px-4 py-2 border-b border-green-500 flex items-center justify-between">
                  <span className="text-green-400 text-xs font-mono">portfolio.js</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-4 font-mono text-xs text-green-300 space-y-1">
                  <p><span className="text-green-500">const</span> developer = &#123;</p>
                  <p className="ml-4">name: <span className="text-yellow-400">"Aayan Anees"</span>,</p>
                  <p className="ml-4">role: <span className="text-yellow-400">"Full-Stack Dev"</span>,</p>
                  <p className="ml-4">passion: <span className="text-yellow-400">"Building Solutions"</span>,</p>
                  <p className="ml-4">status: <span className="text-yellow-400">"Available"</span></p>
                  <p>&#125;;</p>
                  <p className="mt-2"><span className="text-green-500">export default</span> developer;</p>
                </div>
              </div>

              {/* Connection Status */}
              <div className="border border-green-500 bg-black bg-opacity-80 rounded-lg p-4 shadow-[0_0_30px_rgba(0,255,0,0.3)] font-mono text-xs">
                <p className="text-green-400">CONNECTION ESTABLISHED ✓</p>
                <p className="text-green-300 mt-2">IPv4: 192.168.1.337</p>
                <p className="text-green-300">PORT: 3000 [OPEN]</p>
                <p className="text-green-300">PING: 1ms</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        .animate-glitch {
          animation: glitch 0.3s linear;
        }
      `}</style>
    </div>
    </>
  );
};

export default HackerHero;