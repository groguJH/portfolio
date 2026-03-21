import ContactContainer from "../containers/ContactContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import SkillsContainer from "../containers/SkillsContainer";

import React from "react";
import useHashScroll from "No/hooks/useHashScroll";
import { motion, useScroll } from "framer-motion";
import AboutContainer from "No/containers/AboutContainer";

export default function index() {
  const sectionIds = ["About", "Skills", "Projects", "Contact"];
  useHashScroll(sectionIds);

  // Intro => About
  // Intro 삭제
  return (
    <>
      <AboutContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactContainer />
    </>
  );
}
