import React from "react";
import { lead } from "../contexts/TranslationContext";
import Lead from "./lead";
import Skills from "./skills";
import Experience from "./experience";

export default function Main() {
  return (
    <>
      <Lead />
      <Skills />
      <Experience />
      <h1>Alabai 2</h1>
    </>
  );
}
