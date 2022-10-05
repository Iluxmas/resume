import React from "react";
import { lead } from "../contexts/TranslationContext";
import Lead from "./lead";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";
import AboutMe from "./aboutme";
import Contacts from "./contacts";
import HireMe from "./hireme";

export default function Main() {
  const isOpenToOffer = true;

  return (
    <>
      <Lead />
      {isOpenToOffer && <HireMe />}
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <AboutMe />
      <Contacts />
      <h1></h1>
    </>
  );
}
