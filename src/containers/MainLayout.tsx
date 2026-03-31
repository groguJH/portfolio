import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BackgroundLayer } from "No/components/layout/BackgroundLayer";
import ScrollGuide from "No/components/layout/ScrollGuide";
import React, { ReactNode, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [showGuide, setShowGuide] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (page) => {
    if (page > 0.95) {
      setShowGuide(false);
    } else {
      setShowGuide(true);
    }
  });

  return (
    <motion.div
      style={{ position: "relative", minHeight: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundLayer />

      <main style={{ position: "relative", zIndex: 10, width: "100%" }}>
        {children}
      </main>

      <ScrollGuide isVisible={showGuide} />
    </motion.div>
  );
}
