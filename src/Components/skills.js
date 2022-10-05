import React from "react";
import { icons } from "./stackIconsData";

import "./styles/skills.css";

export default function Skills() {
  let itemId = 1;
  let stack = [];
  for (let key of Object.keys(icons)) {
    stack.push([key, icons[key]]);
  }
  return (
    <section className="skillz">
      <h2 className="skillz__header">My tech stack</h2>
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
