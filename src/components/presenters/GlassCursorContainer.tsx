"use client";
import React, { useEffect } from "react";
import { GlassCursor } from "./utils/GlassCursor";
import {
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";

export default function GlassCursorContainer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const velocityX = useVelocity(smoothX);
  const velocityY = useVelocity(smoothY);

  const rotate = useTransform([velocityX, velocityY], (obj: any) => {
    const [vx, vy] = obj;
    return Math.atan2(vy, vx) * (180 / Math.PI);
  });

  const scaleX = useTransform([velocityX, velocityY], (obj: any) => {
    const [vx, vy] = obj;
    return 1 + Math.min(Math.sqrt(vx * vx + vy * vy) * 0.0008, 0.4);
  });

  const scaleY = useTransform(scaleX, (value) => 1 / value);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return (
    <GlassCursor
      style={{
        x: smoothX,
        y: smoothY,
        rotate,
        scaleX,
        scaleY,
      }}
    />
  );
}
