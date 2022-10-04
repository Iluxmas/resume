import React, { useState, useEffect } from "react";
import Header from "./header";
import Main from "./main";
import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";

import "./app.css";
import Footer from "./footer";

export default function App() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches && theme !== "dark") {
      setTheme("dark");
    } else if (!darkThemeMq.matches && theme === "dark") {
      setTheme("light");
    }
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes("ru") && lang !== "ru") {
      setLang("ru");
    } else if (!userLang.includes("ru") && lang === "ru") {
      setLang("en");
    }
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationContext.Provider value={lang}>
        <div className="page">
          <Header />
          <Main />

          {/* idea: company i am not worked with: google microsoft etc... */}
          <Footer />
        </div>
      </TranslationContext.Provider>
    </ThemeContext.Provider>
  );
}
