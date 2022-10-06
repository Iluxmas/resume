import React, { useState, useContext, useEffect, useRef } from "react";
import { TranslationContext, about } from "../contexts/TranslationContext";
import Photo from "../images/photo3.png";

import "./styles/aboutme.css";

export default function AboutMe() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [portraitPosition, setPortraitPosition] = useState("");

  const lang = useContext(TranslationContext);
  const portrait = useRef(null);

  useEffect(() => {
    const rect = portrait.current.getBoundingClientRect();
    setPortraitPosition(rect.top + document.documentElement.scrollTop); // needed to add current scroll position, because page reload breaks the animation
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [portraitPosition]);

  useEffect(() => {
    rotatePhoto(scrollPosition);
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  function rotatePhoto(scrollPosition) {
    const elementHeight = portrait.current.height; // height of the my photo
    const currentScroll = scrollPosition + window.innerHeight;
    const start = portraitPosition; // getting starting point from state
    const end = start + elementHeight * 1.3;

    if (currentScroll >= start && currentScroll <= end) {
      let angle = Math.floor(
        ((currentScroll - start) / (elementHeight * 1.3)) * 90
      );
      portrait.current.style.transform = `rotate(-${90 - angle}deg)`;
    } else if (currentScroll > end) {
      portrait.current.style.transform = `rotate(-0deg)`;
    }
  }

  return (
    <section className="about" id="__about">
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
