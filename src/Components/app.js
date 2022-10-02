import React, { useState, useEffect } from "react";
import Header from "./header";
import Main from "./main";
import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";

import "./app.css";

export default function App() {
  const [lang, setLang] = useState("");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches && theme !== "dark") setTheme("dark");
    else if (!darkThemeMq.matches && theme === "dark") setTheme("light");
    console.log(navigator.userLanguage);
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("ru") && lang !== "ru") setLang("ru");
    else if (!userLang.includes("ru") && lang === "ru") setLang("en");
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationContext.Provider value={lang}>
        <div className="page">
          <Header />
          <Main />

          {/* idea: company i am not worked with: google microsoft etc... */}
          <footer>Poopy 3</footer>
        </div>
      </TranslationContext.Provider>
    </ThemeContext.Provider>
  );
}
