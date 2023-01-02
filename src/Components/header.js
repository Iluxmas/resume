import React, { useState, useContext, useEffect, useRef } from "react";
import { headerMenu, TranslationContext } from "../contexts/TranslationContext";
import "./styles/header.css";

export default function Header() {
  const lang = useContext(TranslationContext);
  const checkbox = useRef(null);

  /// UNDER CONSTRUCTION - Highlight the menu while scroll
  // const [sections, setSections] = useState("");
  // useEffect(() => {
  //   const sections = [...document.getElementsByTagName("section")];
  //   sections.shift();
  //   setSections(sections);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", navHighlighter);
  //   return () => {
  //     window.removeEventListener("scroll", navHighlighter);
  //   };
  // }, [sections]);

  // function navHighlighter() {
  //   let scrollY = window.pageYOffset;

  //   // Now we loop through sections to get height, top and ID values for each

  //   sections.forEach((current) => {
  //     const id = current.id;

  //     if (
  //       current.getBoundingClientRect().y < window.innerHeight / 2 &&
  //       current.getBoundingClientRect().y > -window.innerHeight / 3
  //     ) {
  //       // console.log(current.getBoundingClientRect().bottom);
  //       document.querySelector(`[href='#${id}']`).classList.add("_selected");
  //     } else {
  //       document.querySelector(`[href='#${id}']`).classList.remove("_selected");
  //     }
  //     // console.log(current.getBoundingClientRect());
  //     // console.log("scrollTop: " + document.documentElement.scrollTop);
  //     // const sectionHeight = current.offsetHeight;
  //     // const sectionTop = current.offsetTop - 50;
  //     // let sectionId = current.getAttribute("id");
  //     /*
  //   //   - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
  //   //   - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
  //     */
  //     // if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //     //   console.log("hui" + sectionId);
  //     //   document
  //     //     .querySelector("li a[href*=__" + sectionId + "]")
  //     //     .classList.add("_selected");
  //     // } else {
  //     //   document
  //     //     .querySelector("li a[href*=__" + sectionId + "]")
  //     //     .classList.remove("_selected");
  //     // }
  //   });

  function closeNavBar() {
    checkbox.current.checked = false;
  }
  const links = [
    "#education",
    "#skills",
    "#experience",
    "#projects",
    "#about",
    "#contacts",
  ];

  return (
    <header className="header">
      <div className="header__container">
        <nav className="navmenu">
          <input
            ref={checkbox}
            className="navmenu__input"
            type="checkbox"
            name=""
            id=""
          />
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
                  <a
                    className="header__menu-link"
                    href={links[idx]}
                    onClick={closeNavBar}
                  >
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
