"use client";
import { motion, easeInOut } from "framer-motion";

export function BackgroundLayer() {
  const floatingAnimation = (delay: number) => ({
    animate: {
      x: [0, 15, -15, 0],
      y: [0, -20, 10, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    transition: {
      duration: 10,
      ease: easeInOut,
      repeat: Infinity,
      repeatType: "mirror" as const,
      delay: delay,
    },
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <motion.div
        className="circle1 gradient-circle"
        {...floatingAnimation(0)}
      />
      <motion.div
        className="circle2 gradient-circle"
        {...floatingAnimation(2)}
      />
    </div>
  );
}
