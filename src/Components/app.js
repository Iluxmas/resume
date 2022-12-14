import React, { useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TranslationContext } from "../contexts/TranslationContext";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import "../vendors/normalize.css";
import "./styles/app.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [currentScroll, setCurrentScroll] = useState(0);

  const linkRu = "https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_RU.pdf"
  const linkEn = "https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_EN.pdf"

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

  let backtopStyle = "back-top _position1";
  if (currentScroll < window.innerHeight) {
    backtopStyle = "back-top _position1 _hide";
  }
  let downloadCVStyle = "back-top _position2";
  if (currentScroll < window.innerHeight * 2) {
    downloadCVStyle = "back-top _position2 _hide";
  }

  // ADD HIGHLIGHT OF MENU PUNKT WHILE SSCROLL TO GET iNFROMED WHERE YOU ARE (in desktop mode)

  return (
    <ThemeContext.Provider value={theme}>
      <TranslationContext.Provider value={lang}>
        <div className="page" id="#">
          <Header />
          <Main />
          <Footer />
          <div className={backtopStyle}>
            <a className="go-top ui-link" href="#"></a>
          </div>
          <div className={downloadCVStyle}>
            <a
              className="download-cv ui-link"
              href={lang === 'ru' ? linkRu : linkEn}
            ></a>
          </div>
        </div>
      </TranslationContext.Provider>
    </ThemeContext.Provider>
  );
}
