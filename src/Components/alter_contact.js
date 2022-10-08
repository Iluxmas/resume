import React, { useContext } from "react";
import { contact, TranslationContext } from "../contexts/TranslationContext";

import "./styles/alter_contact.css";
import Logo from "../images/logo.png";
import TeleIcon from "../images/social/social_tele.png";
import GitIcon from "../images/social/social_github.png";
import LinkedIcon from "../images/social/social_linked.png";
import MailIcon from "../images/social/social_mail.png";

export default function Alter() {
  const lang = useContext(TranslationContext);

  return (
    <section className="contacts" id="__contacts">
      <div className="contacts__container">
        <h2 className="_section__header _huge">
          <span className="_accent">#</span>
          {contact[lang].header}
          <span className="_accent">.</span>
        </h2>
        <p className="contacts__subheader">
          It was nice to meet you. Below you will find links to some my accounts
          where you can contact me. See you!
        </p>

        <img className="contacts__logo" src={Logo} />
        <div className="contacts__social2">
          <ul className="contacts__social-list">
            <li className="contacts__social-item">
              <a
                className="contacts__social-link telegram"
                href="https://t.me/topsykrets"
                target="_blank"
              ></a>
            </li>
            <li className="contacts__social-item">
              <a
                className="contacts__social-link email"
                href="mailto:ilya.sulkhanov@gmail.com"
                target="_blank"
              ></a>
            </li>
            <li className="contacts__social-item">
              <a
                className="contacts__social-link git"
                href="https://github.com/Iluxmas"
                target="_blank"
              ></a>
            </li>
            <li className="contacts__social-item">
              <a
                className="contacts__social-link linked"
                href="https://www.linkedin.com/in/ilya-super-frontend/"
                target="_blank"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
