import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ScrollProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 1rem;

  background: linear-gradient(180deg, #5d36df, #1168f4);
  transform-origin: top;
  z-index: 2000;
  box-shadow: -2px 0 10px rgba(93, 54, 223, 0.3);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
