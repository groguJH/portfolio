import { motion } from "framer-motion";
import React, { JSX, ReactNode } from "react";
import { easeInOut } from "framer-motion";

interface BackgroundLayoutProps {
  children: ReactNode;
}

export function BackgroundLayout({
  children,
}: BackgroundLayoutProps): JSX.Element {
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
    <motion.div
      className="scroll-infinityDiv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 배경 원들을 motion.div로 감싸서 애니메이션 적용 */}
      <motion.div
        className="circle1 gradient-circle"
        {...floatingAnimation(0)}
      />
      <motion.div
        className="circle2 gradient-circle"
        {...floatingAnimation(2)}
      />

      {/* 감싸진 자식 컴포넌트들이 출력되는 위치 */}
      <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
    </motion.div>
  );
}
