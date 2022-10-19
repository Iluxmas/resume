import React, { useState, useContext, useEffect, useRef } from "react";
import { TranslationContext, about } from "../contexts/TranslationContext";
import Photo from "../images/photo3.png";

import "./styles/aboutme.css";

export default function AboutMe() {
  const [observeRatio, setObserveRatio] = useState(0);

  const lang = useContext(TranslationContext);
  const portrait = useRef(null);

  useEffect(() => {
    createObserver(portrait.current);
  }, []);

  function createObserver(element) {
    let observer;
    let options = {
      root: null,
      rootMargin: "-60px 0px",
      threshold: buildThresholdList(),
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  }

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > observeRatio) {
        entry.target.style.transform = `rotate(-${
          110 - 110 * entry.intersectionRatio
        }deg)`;
        setObserveRatio(entry.intersectionRatio);
      }
      if (entry.intersectionRatio >= 1) {
        observer.unobserve(portrait.current);
      }
    });
  }

  return (
    <section className="about" id="about">
      <div className="about__decor"></div>
      <div className="about__container">
        <h2 className="_section__header _huge">
          #<span className="_accent">{about[lang].header}</span>.
        </h2>
        <div className="about__content">
          <img className="about__portrait" ref={portrait} src={Photo} />
          <div className="about__text-block">
            <h3 className="about__title">{about[lang].title}</h3>
            <p className="about__maintext">{about[lang].text}</p>

            {/* <p>something will be written here too</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
