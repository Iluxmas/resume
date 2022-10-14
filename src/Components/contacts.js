import React, { useContext } from "react";
import {
  contact,
  contactLinks,
  TranslationContext,
} from "../contexts/TranslationContext";
import Logo from "../images/logo.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import "./styles/contacts.css";

export default function Contacts() {
  const lang = useContext(TranslationContext);

  return (
    <section className="contacts" id="__contacts">
      <div className="contacts__container">
        <h2 className="_section__header _huge">
          <span className="_accent">#</span>
          {contact[lang].header}
          <span className="_accent">.</span>
        </h2>
        <p className="contacts__subheader">{contact[lang].subheader}</p>
        <img className="contacts__logo" src={Logo} />
        <div className="contacts__social2">
          <ul className="contacts__social-list">
            {contactLinks.map((item, idx) => {
              return (
                <AnimationOnScroll
                  animateIn="animate__heartBeat"
                  animateOnce="true"
                  offset={150}
                  duration={2.5}
                  delay={100 + idx * 90}
                  initiallyVisible={true}
                  key={idx}
                >
                  <li className="contacts__social-item" key={idx}>
                    <a
                      className={`contacts__social-link ${item.title}`}
                      href={item.link}
                      target="_blank"
                    ></a>
                  </li>
                </AnimationOnScroll>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
