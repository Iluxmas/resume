import React from "react";

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
      <nav className="header__nav">
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
      {/* theme switcher
      lang switcher */}
    </header>
  );
}
