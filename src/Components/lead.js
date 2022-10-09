import React, { useContext } from "react";
import { lead, TranslationContext } from "../contexts/TranslationContext";
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
        <p className="lead__greet">{lead[lang].greet}</p>
        <p className="lead__name">{lead[lang].name}</p>
        <h1 className="lead__header">{lead[lang].header}</h1>
        <p className="lead__description">{lead[lang].description}</p>
        <a
          className="lead__button"
          href="https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_RU.pdf"
          target="_blank"
        >
          {lead[lang].button}
        </a>
        <div className="lead__photo"></div>
      </div>
    </section>
  );
}
