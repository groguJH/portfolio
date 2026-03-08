import NavigationContainer from "../containers/NavigationContainer";
import AboutContainer from "../containers/AboutContainer";
import ContactContainer from "../containers/ContactContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import SkillsContainer from "../containers/SkillsContainer";
import IntroContainer from "../containers/IntroContainer";
import React from "react";

export default function index() {
  return (
    <>
      <IntroContainer />
      <AboutContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactContainer />
    </>
  );
}
