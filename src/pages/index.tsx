"use client";
import ContactContainer from "../containers/ContactContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import SkillsContainer from "../containers/SkillsContainer";
import React, { useEffect, useState } from "react";
import useHashScroll from "No/hooks/useHashScroll";
import { useScroll, useSpring, useTransform } from "framer-motion";
import AboutContainer from "No/containers/AboutContainer";
import { ScrollProgressBar } from "No/components/presenters/utils/ScrollProgressBar";

export default function index() {
  const [isGreeting, setIsGreeting] = useState(true);
  const sectionIds = ["About", "Skills", "Projects", "Contact"];
  useHashScroll(sectionIds);

  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothHeight = useSpring(height, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isGreeting) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
    const timer = setTimeout(() => {
      setIsGreeting(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [isGreeting]);

  return (
    <>
      <ScrollProgressBar style={{ height: smoothHeight }} />;
      <main>
        <AboutContainer />
        <SkillsContainer />
        <ProjectsContainer />
        <ContactContainer />
      </main>
    </>
  );
}
