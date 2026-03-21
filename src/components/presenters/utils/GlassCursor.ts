import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const GlassCursor = styled(motion.div)`
  position: relative;
  top: 0px;
  left: 0px;
  width: 64px;
  height: 64px;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px) brightness(1.2);
  -webkit-backdrop-filter: blur(2px) brightness(1.2);
  box-shadow:
    inset 0 0 10px rgba(255, 255, 255, 0.5),
    0 0 15px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  z-index: 99999999;

  /* 중심점 설정 */
  margin-left: -25px;
  margin-top: -25px;

  /* 투명도 조절 */
  opacity: 0.7;
`;
