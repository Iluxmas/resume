import React, { useState, useContext, useEffect } from "react";
import { projects, TranslationContext } from "../contexts/TranslationContext";
import Tile from "./tile";

import "./projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [tags, setTags] = useState("");
  const lang = useContext(TranslationContext);

  useEffect(() => {
    let tagsArray = ["all"];
    for (let i = 0; i < projects[lang].length; i++) {
      tagsArray.push(...projects[lang][i].tags);
    }
    setTags([...new Set(tagsArray)]);
  }, []);

  return (
    <section className="projects">
      <h2 className="exp__header">Projects</h2>
      <div className="gallery__container">
        <div className="gallery__control">
          <ul className="gallery__control-list">
            {tags.length > 0 &&
              tags.map((item, idx) => {
                return (
                  <li className="gallery__control-item" key={idx}>
                    {item}
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className="gallery">
          {projects[lang].length > 0 &&
            projects[lang].map((item) => {
              return <Tile content={item} key={item.id} />;
            })}
        </ul>
      </div>
    </section>
  );
}
