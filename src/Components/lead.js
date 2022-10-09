import React, { useContext } from "react";
import { lead, TranslationContext } from "../contexts/TranslationContext";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import "./styles/lead.css";

export default function Lead() {
  const lang = useContext(TranslationContext);

  function scrollDown() {
    window.scroll(0, window.scrollY + 50);
  }

  return (
    <section className="lead" id="__lead">
      <div className="lead__container _container _container-xtra ">
        <div className="lead__decor_arrow"></div>
        <div className="lead__decor_oval"></div>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <p className="lead__greet">{lead[lang].greet}</p>
        </AnimationOnScroll>
        {/* <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={60}
        > */}
        <p className="lead__name animate__animated animate__bounce">
          {lead[lang].name}
        </p>
        {/* </AnimationOnScroll> */}
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={120}
        >
          <h1 className="lead__header">{lead[lang].header}</h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={180}
        >
          <p className="lead__description">{lead[lang].description}</p>
          <a
            className="lead__button"
            href="https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_RU.pdf"
            target="_blank"
          >
            {lead[lang].button}
          </a>
        </AnimationOnScroll>
        <div className="lead__photo"></div>
      </div>
    </section>
  );
}
