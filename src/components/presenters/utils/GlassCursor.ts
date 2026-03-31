import { motion, Variants } from "framer-motion";
import styled from "@emotion/styled";

export const BubbleCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99999;
  overflow: hidden;
`;

export const GlassCursor = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;

  background-image: url("/bubble.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 99999;

  margin-left: -20px;
  margin-top: -20px;

  will-change: transform, opacity;
  transform-origin: center;
  backface-visibility: hidden;
`;

export const popAndFade: Variants = {
  default: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },

  pop: {
    scale: [1, 1.4],
    opacity: [0.7, 0.5, 0],
    transition: {
      duration: 0.5,
      ease: "easeOut",
      opacity: { duration: 0.5, times: [0, 0.4, 1] },
    },
  },
};
