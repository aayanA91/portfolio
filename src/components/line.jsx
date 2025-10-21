import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function HackerLines() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const lineCount = 60;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const lines = [];

  for (let i = 0; i < lineCount; i++) {
    const isVertical = Math.random() < 0.3; // 30% vertical lines
    const fromLeft = Math.random() < 0.5;

    // Random positions
    const position = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };

    // Horizontal or vertical classes
    const baseClass = isVertical
      ? "w-[1px] h-[100px]"
      : "h-[1px] w-[100px]";

    // Positioning classes
    const posClass = isVertical
      ? fromLeft
        ? "top-0 origin-top"
        : "bottom-0 origin-bottom"
      : fromLeft
      ? "left-0 origin-left"
      : "right-0 origin-right";

    // Distance from mouse to line center (for hover push effect)
    const distX = Math.abs(mousePos.x - parseFloat(position.left));
    const distY = Math.abs(mousePos.y - parseFloat(position.top));
    const isNear = distX < 100 && distY < 100;
    const offset = isNear ? (Math.random() * 50 - 25) : 0; // -25 to 25 px offset

    // Create animated motion line
    lines.push(
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          ...position,
          transform: isVertical
            ? `translateX(${offset}px)`
            : `translateY(${offset}px)`,
        }}
        className={`${baseClass} bg-[#00FF41] blur-sm opacity-40 ${posClass}`}
      />
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {lines}
    </div>
  );
}
