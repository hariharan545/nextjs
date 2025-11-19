"use client";

import { motion } from "framer-motion";

export default function BlurText({
  text = "",      // ← default to empty string
  delay = 50,
  animateBy = "letters",
  direction = "top",
  onAnimationComplete,
  className = "",
  blurAmount = "6px",
}) {
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  // Motion variants
  const variants = {
    hidden: (i) => {
      const dist = 20;
      return {
        opacity: 0,
        x: direction === "left" ? -dist : direction === "right" ? dist : 0,
        y: direction === "top" ? -dist : direction === "bottom" ? dist : 0,
        filter: `blur(${blurAmount})`,
      };
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: (i * delay) / 1000,
        duration: 0.5,
      },
    }),
  };

  return (
    <span className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={i === items.length - 1 ? onAnimationComplete : undefined}
          style={{ display: "inline-block", marginRight: animateBy === "words" ? "0.25em" : 0 }}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
}
