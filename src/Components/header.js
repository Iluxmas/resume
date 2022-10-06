import React, { useState, useContext, useEffect } from "react";
import { headerMenu, TranslationContext } from "../contexts/TranslationContext";
// import "./header.css";
import "./styles/burger.css";

export default function Header() {
  const lang = useContext(TranslationContext);
  const [sections, setSections] = useState("");

  useEffect(() => {
    const sections = [...document.getElementsByTagName("section")];
    sections.shift();
    setSections(sections);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", navHighlighter);
    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, [sections]);

  function navHighlighter() {
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");

      /*
      - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
      - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
      */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        console.log("hui" + sectionId);
        document
          .querySelector("li a[href*=__" + sectionId + "]")
          .classList.add("_selected");
      } else {
        document
          .querySelector("li a[href*=__" + sectionId + "]")
          .classList.remove("_selected");
      }
    });
  }

  const links = [
    "#",
    "#__education",
    "#__skills",
    "#__experience",
    "#__projects",
    "#__about",
    "#__contacts",
  ];

  return (
    <header className="header">
      <div className="header__container _container">
        <nav className="navmenu">
          <input className="navmenu__input" type="checkbox" name="" id="" />
          <div className="header__hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="header__menu">
            {headerMenu[lang].map((block, idx) => {
              return (
                <li
                  className="header__menu-item hover-underline-animation"
                  key={idx}
                >
                  <a className="header__menu-link" href={links[idx]}>
                    {block}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* theme switcher
    lang switcher */}
    </header>
  );
}

{
  /* 
    <header className="header">
      <nav className="header__nav">
        <input className="" type="checkbox" name="" id="" />
        <div class="header__hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul className="header__menu">
          {links.map((block, idx) => {
            return (
              <li
                className="header__list-item hover-underline-animation"
                key={idx}
              >
                <a className="header__link">{block}</a>
              </li>
            );
          })}
        </ul>
      </nav>
       theme switcher
      lang switcher 
    </header> */
}
