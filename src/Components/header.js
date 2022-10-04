import React from "react";
// import "./header.css";
import "./burger.css";

export default function Header() {
  const links = [
    "Home",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "About Me",
    "The Story",
    "Contacts",
  ];

  return (
    <header className="header">
      <nav className="navmenu">
        <input className="navmenu__input" type="checkbox" name="" id="" />
        <div className="header__hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="header__menu">
          {links.map((block, idx) => {
            return (
              <li
                className="header__menu-item hover-underline-animation"
                key={idx}
              >
                <a className="header__menu-link">{block}</a>
              </li>
            );
          })}
        </ul>
      </nav>
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
