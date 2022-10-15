import React from "react";
import Lead from "./lead";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import AboutMe from "./aboutme";
import Contacts from "./contacts";

export default function Main() {
  return (
    <>
      {/* <Lead /> */}
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <AboutMe />
      <Contacts />
    </>
  );
}
