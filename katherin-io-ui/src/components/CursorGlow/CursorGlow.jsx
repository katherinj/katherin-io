import React, { useEffect, useRef, useState } from "react";
import "./CursorGlow.css";

const NUM_SPARKLES = 12;

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [sparkles, setSparkles] = useState([]);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouse.current = { x, y };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      // Spawn a sparkle occasionally
      if (Math.random() < 0.25) {
        const id = Date.now() + Math.random();
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        const size = 4 + Math.random() * 6;
        const dur = 500 + Math.random() * 400;
        setSparkles(prev => [
          ...prev.slice(-NUM_SPARKLES + 1),
          { id, x: x + offsetX, y: y + offsetY, size, dur }
        ]);
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== id));
        }, dur);
      }
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", handleMove);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Trailing glow ring */}
      <div ref={ringRef} className="cursor-ring" />
      {/* Sharp dot */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Sparkles */}
      {sparkles.map(s => (
        <span
          key={s.id}
          className="cursor-sparkle"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            animationDuration: `${s.dur}ms`,
          }}
        />
      ))}
    </>
  );
}
