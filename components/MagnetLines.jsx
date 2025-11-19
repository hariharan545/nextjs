"use client";

import { useEffect, useRef } from "react";

export default function MagnetLines({
  lineCount = 6,
  magnetStrength = 0.12,
  gap = 12,
  lineColor = "#444",
  className = "",
}) {
  const containerRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;

      linesRef.current.forEach((line) => {
        if (line) line.style.transform = `translateX(${x * magnetStrength}px)`;
      });
    };

    const reset = () => {
      linesRef.current.forEach((l) => {
        if (l) l.style.transform = "translateX(0)";
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, [magnetStrength]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (linesRef.current[i] = el)}
          style={{
            height: 2,
            backgroundColor: lineColor,
            margin: `${gap}px 0`,
            transition: "transform 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
}
