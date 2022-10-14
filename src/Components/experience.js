import React, { useContext } from "react";
import {
  TranslationContext,
  exp,
  expLogos,
} from "../contexts/TranslationContext";
import Job from "./job";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./styles/experience.css";

export default function Experience() {
  const lang = useContext(TranslationContext);

  return (
    // <TranslationContext.Consumer>
    //   {(lang) => (
    <section className="exp" id="__experience">
      <div className="exp_top_bcg"></div>
      <div className="exp__container _container _container-wide">
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce="true"
          offset={200}
        >
          <h2 className="_section__header _huge">
            <span className="_accent">#</span>
            {exp[lang].header}
            <span className="_accent">.</span>
          </h2>
          <div className="exp__jobs-container">
            {exp[lang].data.map((item, idx) => {
              return <Job key={idx} data={item} />;
            })}
          </div>
        </AnimationOnScroll>
      </div>
      <div className="_container-narrow exp__known-companies">
        <AnimationOnScroll
          animateIn="animate__slideInUp"
          animateOnce="true"
          offset={220}
        >
          <h2 className="_section__header _huge">
            <span className="_accent">#</span>
            {exp[lang].refs}
            <span className="_accent">.</span>
          </h2>

          <p className="exp__known-companies-subtitle">{exp[lang].subrefs}</p>
          <div className="exp__logo-container">
            {expLogos.map((item, idx) => {
              return (
                <img className="exp__company-image" key={idx} src={item} />
              );
            })}
          </div>
          <div className="exp__known-decor_dots"></div>
          {/* <div className="exp__known-decor"></div> */}
        </AnimationOnScroll>
      </div>
      <div className="exp_bottom_bcg"></div>
    </section>
  );
  // }
  // </TranslationContext.Consumer>
  // );
}
