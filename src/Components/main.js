import React from "react";
import { lead } from "../contexts/TranslationContext";
import Lead from "./lead";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Projects from "./projects";

export default function Main() {
  return (
    <>
      {/* <Lead />
      <Skills /> */}
      <Experience />
      <Education />
      <Projects />
      <h1></h1>
    </>
  );
}
