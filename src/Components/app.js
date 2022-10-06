import React, { useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import "../vendors/normalize.css";
import "./styles/app.css";

export default function App() {
  const [lang, setLang] = useState("ru");
  const [theme, setTheme] = useState("dark");
  const [currentScroll, setCurrentScroll] = useState(0);

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

  // ADD CALCULATION OFFSET SCROLL TO NOT SHOW BACKTOP BUTTON !!!!
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setCurrentScroll(position);
  };

  let backtopStyle = "back-top";
  if (currentScroll < window.innerHeight) {
    backtopStyle = "back-top _hide";
  }
  // add maximum offset of BACKTOP BUTTON, to no go to edge at high resolution
  // ADD HIGHLIGHT OF MENU PUNKT WHILE SSCROLL TO GET iNFROMED WHERE YOU ARE (in desktop mode)

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationContext.Provider value={lang}>
        <div className="page" id="#">
          <Header />
          <Main />

          {/* idea: company i am not worked with: google microsoft etc... */}
          <Footer />
          <div className={backtopStyle}>
            <a className="back-top-link" href="#"></a>
          </div>
        </div>
      </TranslationContext.Provider>
    </ThemeContext.Provider>
  );
}
