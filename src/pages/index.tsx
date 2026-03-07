import NavigationContainer from "../containers/NavigationContainer";
import AboutContainer from "../containers/AboutContainer";
import ContactContainer from "../containers/ContactContainer";
import HelloContainer from "../containers/HelloContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import SkillsContainer from "../containers/SkillsContainer";
import React from "react";

export default function index() {
  return (
    <>
      <HelloContainer />
      <AboutContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactContainer />
    </>
  );
}
