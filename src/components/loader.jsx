
import React, { useState, useEffect } from 'react';
import { Terminal, Lock, Wifi, Shield, Code, Zap } from 'lucide-react';

const HackerIntroLoader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [glitchText, setGlitchText] = useState('AAYAN ANEES');
  const [hackProgress, setHackProgress] = useState([false, false, false, false]);

  const bootSequence = [
    { text: '> BYPASSING FIREWALL...', icon: Shield },
    { text: '> DECRYPTING PROTOCOLS...', icon: Lock },
    { text: '> ESTABLISHING CONNECTION...', icon: Wifi },
    { text: '> INJECTING PAYLOAD...', icon: Code },
    { text: '> COMPILING SOURCE...', icon: Terminal },
    { text: '> EXECUTING SEQUENCE...', icon: Zap },
    { text: '> ACCESS GRANTED.', icon: null }
  ];

  // Glitch effect for name
  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?01アイウエオ';
    const originalText = 'AAYAN ANEES';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchText(
          originalText.split('').map(char => 
            Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
          ).join('')
        );
        setTimeout(() => setGlitchText(originalText), 50);
      }
    }, 200);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev >= bootSequence.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 700);

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    // Hack progress animation
    const hackInterval = setInterval(() => {
      setHackProgress(prev => {
        const nextIndex = prev.findIndex(v => !v);
        if (nextIndex === -1) return prev;
        const newProgress = [...prev];
        newProgress[nextIndex] = true;
        return newProgress;
      });
    }, 1000);

    return () => clearInterval(hackInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          if (onLoadComplete) onLoadComplete();
        }, 800);
      }, 1000);
    }
  }, [progress, onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-500 overflow-hidden ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Matrix Rain Effect - Optimized for mobile */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: window.innerWidth < 768 ? 20 : 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-xs animate-matrixRain"
            style={{
              left: `${i * (window.innerWidth < 768 ? 5 : 2)}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="opacity-70">
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10 z-50"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.15) 0px, transparent 2px, transparent 4px)',
        }}
      />

      {/* Glitch Overlay */}
      <div className="absolute inset-0 opacity-5 animate-glitchBg" style={{
        backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full mx-4 px-2 sm:px-4">
        
        {/* Glitch Title - Responsive */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="relative inline-block">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-green-400 font-mono tracking-wider glitch-text">
              {glitchText}
            </h1>
            <div className="absolute inset-0 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-red-500 font-mono tracking-wider glitch-text opacity-70 animate-glitchLeft">
              {glitchText}
            </div>
            <div className="absolute inset-0 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-blue-500 font-mono tracking-wider glitch-text opacity-70 animate-glitchRight">
              {glitchText}
            </div>
          </div>
          <div className="mt-3 sm:mt-4 text-green-400 text-xs sm:text-sm font-mono flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="hidden sm:inline">SYSTEM BREACH IN PROGRESS...</span>
            <span className="sm:hidden">LOADING...</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Hack Status Boxes - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
          {['FIREWALL', 'DATABASE', 'SERVER', 'ACCESS'].map((item, i) => (
            <div
              key={i}
              className={`border-2 p-2 sm:p-4 transition-all duration-500 ${
                hackProgress[i]
                  ? 'border-green-400 bg-green-400/10 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                  : 'border-green-400/30 bg-black'
              }`}
            >
              <div className="text-center space-y-1 sm:space-y-2">
                <div className={`text-[10px] sm:text-xs font-mono ${hackProgress[i] ? 'text-green-400' : 'text-gray-600'}`}>
                  {item}
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono">
                  {hackProgress[i] ? (
                    <span className="text-green-400 animate-pulse">✓</span>
                  ) : (
                    <span className="text-gray-600">--</span>
                  )}
                </div>
                <div className={`text-[9px] sm:text-xs font-mono ${hackProgress[i] ? 'text-green-400' : 'text-gray-600'}`}>
                  {hackProgress[i] ? 'OK' : 'LOCK'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Window - Mobile Optimized */}
        <div className="border-2 border-green-400 bg-black shadow-[0_0_40px_rgba(34,197,94,0.4)]">
          {/* Terminal Header */}
          <div className="border-b-2 border-green-400 p-2 sm:p-3 flex items-center justify-between bg-green-400/5">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-[8px] sm:text-xs tracking-wider text-green-400 font-mono hidden sm:inline">
              HACK://ROOT@MATRIX
            </span>
            <span className="text-[8px] text-green-400 font-mono sm:hidden">
              ROOT
            </span>
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 animate-pulse" />
          </div>

          {/* Terminal Content - Scrollable on mobile */}
          <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 font-mono max-h-[40vh] sm:max-h-[50vh] overflow-y-auto">
            {/* Boot Sequence */}
            <div className="space-y-1 sm:space-y-2">
              {bootSequence.slice(0, currentLine + 1).map((line, i) => {
                const Icon = line.icon;
                return (
                  <div
                    key={i}
                    className="text-green-400 text-[10px] sm:text-sm flex items-center gap-2 sm:gap-3 animate-slideIn"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
                    <span className="text-green-500">█</span>
                    <span className="truncate">{line.text}</span>
                    {i === currentLine && (
                      <span className="inline-block w-1 h-3 sm:w-2 sm:h-4 bg-green-400 animate-pulse ml-1 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Hexadecimal Data Stream - Hidden on small mobile */}
            <div className="border-t border-green-400/30 pt-2 sm:pt-4 text-[8px] sm:text-xs text-green-600 space-y-1 overflow-hidden max-h-12 sm:max-h-20 hidden sm:block">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-scroll overflow-hidden" style={{ animationDelay: `${i * 0.5}s` }}>
                  {Array.from({ length: 12 }).map(() => 
                    Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
                  ).join(' ')}
                </div>
              ))}
            </div>

            {/* Progress Section */}
            <div className="border-t border-green-400/30 pt-3 sm:pt-4 space-y-2 sm:space-y-3">
              <div className="flex justify-between text-[10px] sm:text-xs text-green-400 items-center">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Zap className="w-3 h-3 animate-pulse" />
                  <span className="hidden sm:inline">INFILTRATION PROGRESS</span>
                  <span className="sm:hidden">LOADING</span>
                </span>
                <span className="font-bold text-base sm:text-lg">{progress}%</span>
              </div>

              {/* Main Progress Bar */}
              <div className="relative w-full h-6 sm:h-8 border-2 border-green-400 bg-black overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-green-300 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
                
                {/* Digital Pattern Overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold text-black/50 tracking-widest">
                  {progress < 100 ? 'HACKING...' : 'COMPLETE'}
                </div>
              </div>

              {/* Binary Progress Blocks - Fewer on mobile */}
              <div className="flex gap-[2px] sm:gap-1 flex-wrap">
                {Array.from({ length: window.innerWidth < 640 ? 50 : 100 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-2 sm:h-3 transition-all duration-75 ${
                      i < (window.innerWidth < 640 ? progress / 2 : progress)
                        ? 'bg-green-400 shadow-[0_0_5px_#22c55e]' 
                        : 'bg-gray-800 border border-green-400/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* System Info - Compact on mobile */}
            <div className="border-t border-green-400/30 pt-2 sm:pt-3 grid grid-cols-2 gap-1 sm:gap-2 text-[9px] sm:text-xs">
              <div className="flex justify-between text-green-600">
                <span>CPU:</span>
                <span className="text-green-400 text-[8px] sm:text-xs">54%</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>RAM:</span>
                <span className="text-green-400 text-[8px] sm:text-xs">72%</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>NET:</span>
                <span className="text-green-400 text-[8px] sm:text-xs">99%</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>STATUS:</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-ping" />
                  <span className="text-green-400 text-[8px] sm:text-xs">{progress < 100 ? 'ACTIVE' : 'OK'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Warning - Responsive */}
        <div className="mt-4 sm:mt-6 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 border border-red-500 bg-red-500/10 px-3 py-2 sm:px-6 sm:py-3 text-red-400 text-[9px] sm:text-xs font-mono animate-pulse">
            <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">⚠ UNAUTHORIZED ACCESS DETECTED ⚠</span>
            <span className="sm:hidden">⚠ WARNING ⚠</span>
            <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrixRain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes glitchLeft {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-2px, 1px); }
          66% { transform: translate(2px, -1px); }
        }
        @keyframes glitchRight {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(2px, -1px); }
          66% { transform: translate(-2px, 1px); }
        }
        @keyframes glitchBg {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, 2px); }
          50% { transform: translate(-2px, -2px); }
          75% { transform: translate(2px, -2px); }
        }
        .animate-matrixRain { animation: matrixRain linear infinite; }
        .animate-slideIn { animation: slideIn 0.5s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-scroll { animation: scroll 10s linear infinite; }
        .animate-glitchLeft { animation: glitchLeft 0.3s infinite; }
        .animate-glitchRight { animation: glitchRight 0.3s infinite; }
        .animate-glitchBg { animation: glitchBg 0.5s infinite; }
      `}</style>
    </div>
  );
};
export default HackerIntroLoader;