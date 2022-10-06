import React, { useContext } from "react";
import { icons } from "./stackIconsData";
import { skills, TranslationContext } from "../contexts/TranslationContext";

import "./styles/skills.css";

export default function Skills() {
  const lang = useContext(TranslationContext);

  let itemId = 1;
  let stack = [];
  for (let key of Object.keys(icons)) {
    stack.push([key, icons[key]]);
  }
  return (
    <section className="skillz" id="__skills">
      <h2 className="_section__header _huge">
        <span className="_accent">#</span>
        {skills[lang]}
        <span className="_accent">.</span>
      </h2>
      <ul className="skillz__container">
        {stack.map((item) => {
          return (
            <li className="skillz__item" key={itemId++}>
              <img className="skillz__img" src={item[1]} />
              <h3 className="skillz__title">{item[0]}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
