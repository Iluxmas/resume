import React, { useState, useContext, useEffect } from "react";
import { projects, TranslationContext } from "../contexts/TranslationContext";
import Tile from "./tile";
import FilterBar from "./filterbar";

import "./styles/projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [tags, setTags] = useState("");
  const lang = useContext(TranslationContext);

  useEffect(() => {
    let tagsArray = ["all"];
    for (let i = 0; i < projects.data.length; i++) {
      tagsArray.push(...projects.data[i].tags);
    }
    setTags([...new Set(tagsArray)]);
  }, []);

  function handleTagSelect(tag) {
    setFilter(tag);
  }

  let visibleProjects = projects.data;
  if (filter !== "all") {
    visibleProjects = projects.data.filter((item) =>
      item.tags.includes(filter)
    );
  }

  // ДЕЛАЕМ ПО ШИРИНЕ КАК ЛИД

  return (
    <section className="projects" id="projects">
      <h2 className="_section__header _huge">
        <span className="_accent">#</span>
        {projects.header[lang]}
        <span className="_accent">.</span>
      </h2>
      <div className="gallery__container">
        <div className="gallery__control">
          <ul className="gallery__control-list">
            <FilterBar tags={tags} onSelect={handleTagSelect} />
          </ul>
        </div>
        <ul className="gallery">
          {visibleProjects.length > 0 &&
            visibleProjects.map((item) => {
              return <Tile content={item} key={item.id} />;
            })}
        </ul>
      </div>
    </section>
  );
}
