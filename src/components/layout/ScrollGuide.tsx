"use client";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import scrollLottie from "../../../public/Scroll Down Arrow.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

interface ScrollGuideProps {
  isVisible: boolean;
}

export default function ScrollGuide({ isVisible }: ScrollGuideProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: "fixed",
            bottom: "clamp(16px, 4vw, 40px)",
            right: "clamp(16px, 4vw, 40px)",
            zIndex: 100,
            pointerEvents: "none",
          }}
        >
          <Lottie
            loop
            animationData={scrollLottie}
            play
            style={{
              width: "clamp(36px, 10vw, 48px)",
              height: "clamp(36px, 10vw, 48px)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
