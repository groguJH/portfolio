"use client";
import React, { useEffect, useRef, useState } from "react";
import { BubbleCanvas, GlassCursor, popAndFade } from "./utils/GlassCursor";
import {
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "framer-motion";

/**마우스 위치에 따라 반응한 글래스커서를 구현한 컴포넌트
 * @description
 * 1. BubbleCanvas: 고정위치로 전체 화면을 덮습니다.
 * 2. GlassCursorContainer: 마우스 위치를 감지하여, 로직 관리하여 내보내는 메인 컴포넌트 입니다.
 * 3.
 */

export default function GlassCursorContainer() {
  const [isClicked, setIsClicked] = useState(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const trailConfig = { stiffness: 420, damping: 38, mass: 0.22 };
  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const scaleX = useTransform([velocityX, velocityY], (latest) => {
    const [vx, vy] = latest as number[];
    return 1 + Math.min(Math.sqrt(vx * vx + vy * vy) * 0.00012, 0.08);
  });
  const scaleY = useTransform(scaleX, (value) => 1 / value);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointerDown = () => {
      setIsClicked(true);

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      clickTimeoutRef.current = setTimeout(() => setIsClicked(false), 500);
    };

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePointerDown);

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <BubbleCanvas>
      <GlassCursor
        animate={{
          opacity: isClicked ? 0 : 0.2,
          scale: isClicked ? 0.2 : 0.4,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          x: trailX,
          y: trailY,
        }}
      />

      <GlassCursor
        variants={popAndFade}
        animate={isClicked ? "pop" : "default"}
        style={{
          x: mouseX,
          y: mouseY,
          scaleX,
          scaleY,
        }}
      />
    </BubbleCanvas>
  );
}
