import React, { useContext } from "react";
import { education, TranslationContext } from "../contexts/TranslationContext";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./styles/education.css";

export default function Education() {
  const lang = useContext(TranslationContext);

  return (
    <section className="edu" id="education">
      <div className="edu__container _container _container-wide">
        <AnimationOnScroll animateIn="animate__slideInUp" animateOnce="true">
          <h2 className="_section__header _huge">
            <span className="_accent">#</span>
            {education[lang].title}
            <span className="_accent">.</span>
          </h2>
          <div className="edu__courses">
            {education[lang].studies.map(({ place, dep, dates }, idx) => {
              return (
                <div className="edu__row" key={idx}>
                  <div className="edu__control">
                    <p className="edu__dates">{dates}</p>
                    <p className="edu__company">{place}</p>
                  </div>
                  <p className="edu__theme" title={dep}>
                    {dep}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
}
