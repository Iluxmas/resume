import React, { useContext } from "react";
import { contact, TranslationContext } from "../contexts/TranslationContext";

import "./styles/contacts.css";
import TeleIcon from "../images/social/social_tele.png";
import GitIcon from "../images/social/social_github.png";
import LinkedIcon from "../images/social/social_linked.png";
import MailIcon from "../images/social/social_mail.png";

export default function Contacts() {
  const lang = useContext(TranslationContext);

  return (
    <section className="contacts" id="__contacts">
      <div className="contacts__container">
        <h2 className="_section__header _huge">
          #<span className="_accent">{contact[lang].header}</span>.
        </h2>
        <div className="contacts__main">
          <div className="contacts__social">
            <div className="contacts__social-subsection">
              <p className="contacts__subheader">{contact[lang].location}</p>
              <ul className="contacts__social-list">
                <li className="contacts__social-item">
                  <div className="contacts__social-icon location"></div>
                  <span className="contacts__social-location">
                    {contact[lang].place}
                  </span>
                </li>
              </ul>
            </div>
            <div className="contacts__social-subsection">
              <p className="contacts__subheader">{contact[lang].writeMe}</p>
              <ul className="contacts__social-list">
                <li className="contacts__social-item">
                  <div className="contacts__social-icon telegram"></div>
                  <a
                    className="contacts__social-link"
                    href="https://t.me/topsykrets"
                    target="_blank"
                  >
                    Telegram
                  </a>
                </li>
                <li className="contacts__social-item">
                  <div className="contacts__social-icon email"></div>
                  <a
                    className="contacts__social-link"
                    href="mailto:ilya.sulkhanov@gmail.com"
                    target="_blank"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div className="contacts__social-subsection">
              <p className="contacts__subheader">{contact[lang].checkMine}</p>
              <ul className="contacts__social-list">
                <li className="contacts__social-item">
                  <div className="contacts__social-icon git"></div>
                  <a
                    className="contacts__social-link"
                    href="https://github.com/Iluxmas"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li className="contacts__social-item">
                  <div className="contacts__social-icon  linked"></div>
                  <a
                    className="contacts__social-link"
                    href="https://www.linkedin.com/in/ilya-super-frontend/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contacts__form-container">
            <form className="contact__form">
              <input
                type="text"
                className="contacts__input contacts__input_type_name"
                placeholder="First Name"
              ></input>
              <input
                type="text"
                className="contacts__input contacts__input_type_lastname"
                placeholder="Last Name"
              ></input>
              <input
                type="email"
                className="contacts__input contacts__input_type_email"
                placeholder="Email Address"
              ></input>
              <textarea
                className="contacts__input contacts__input_type_message"
                placeholder="Your Message"
                cols="20"
                rows="6"
              ></textarea>
              <button className="contacts__submit-btn" disabled>
                Submit
              </button>
            </form>
            <div className="contacts__undercontruction"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
