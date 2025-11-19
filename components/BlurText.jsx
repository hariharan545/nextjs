"use client";
import { useState } from "react";

export default function BlurText({ children, blurAmount = "6px", forceReveal = false, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const isVisible = hovered || forceReveal;

  return (
    <span
      className={className}
      style={{
        filter: isVisible ? "blur(0px)" : `blur(${blurAmount})`,
        transition: "0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}
