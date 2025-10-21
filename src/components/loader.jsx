import React, { useEffect, useState, useRef } from 'react';

const messages = [
  'Initializing portfolio...',
  'Loading skills.js...',
  'Compiling projects.jsx...',
  'Launching interface...',
];

const headingText = "Aayan Anees Portfolio Loading...";

export default function Loader({ onComplete }) {
  const [typedText, setTypedText] = useState('');
  const [headingTyped, setHeadingTyped] = useState('');
  const [currentMessage, setCurrentMessage] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const audioRef = useRef(null);

  // Initialize audio and prepare looping sound
  useEffect(() => {
    const audio = new Audio('/typing.mp3');
    audio.volume = 0.5;
    audio.loop = true;  // loop the typing sound
    audioRef.current = audio;

    // Try to autoplay (may be blocked)
    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Type heading first
  useEffect(() => {
    if (headingTyped.length < headingText.length) {
      const timeout = setTimeout(() => {
        setHeadingTyped(headingText.slice(0, headingTyped.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [headingTyped]);

  // Type terminal messages after heading is fully typed
  useEffect(() => {
    if (headingTyped === headingText) {
      if (currentMessage < messages.length) {
        const fullText = messages[currentMessage];
        if (typedText.length < fullText.length) {
          const timeout = setTimeout(() => {
            setTypedText(fullText.slice(0, typedText.length + 1));

            // Play sound if paused
            if (audioRef.current && audioRef.current.paused) {
              audioRef.current.play().catch(() => {});
            }
          }, 40);
          return () => clearTimeout(timeout);
        } else {
          // Pause typing sound briefly when line finishes
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }

          const delay = setTimeout(() => {
            setLineIndex((prev) => prev + 1);
            setCurrentMessage((prev) => prev + 1);
            setTypedText('');
            
            // Resume typing sound for next line
            if (audioRef.current) {
              audioRef.current.play().catch(() => {});
            }
          }, 600);
          return () => clearTimeout(delay);
        }
      } else {
        // All done: stop sound and call onComplete
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }

        const finish = setTimeout(onComplete, 1500);
        return () => clearTimeout(finish);
      }
    }
  }, [typedText, currentMessage, headingTyped, onComplete]);

  return (
    <div className="h-screen bg-[#1e1e1e] flex flex-col items-center justify-center text-green-400 font-mono p-4 select-none">
      {/* Heading with typewriter effect */}
      <h1 className="text-3xl mb-6">{headingTyped}<span className="animate-blink">█</span></h1>

      {/* Terminal box */}
      <div className="bg-[#151515] border border-gray-700 rounded-md w-full max-w-xl shadow-xl">
        <div className="bg-[#2c2c2c] px-4 py-2 flex gap-2 items-center rounded-t-md">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="px-6 py-4 min-h-[200px]">
          {[...Array(lineIndex)].map((_, i) => (
            <div key={i}>&gt; {messages[i]}</div>
          ))}
          {currentMessage < messages.length && (
            <div>&gt; {typedText}<span className="animate-blink">█</span></div>
          )}
        </div>
      </div>
    </div>
  );
}
