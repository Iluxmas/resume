import React, { useState, useRef } from "react";
import Close from "../images/plus.svg";
import "./styles/job.css";

export default function Job({ data }) {
  const descriptionHeight = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { pos, company, dates, resp } = data;

  function handleOpenDescr(event) {
    setIsOpen(() => !isOpen);
  }

  let addHeight = descriptionHeight.current?.clientHeight;
  let bttnClass, divClass, heightStyle;

  if (isOpen) {
    bttnClass = "exp__expand-bttn rotate";
    divClass = "exp__item open";
    heightStyle = { maxHeight: `${64 + addHeight + 32}` + "px" };
  } else {
    bttnClass = "exp__expand-bttn";
    divClass = "exp__item";
    heightStyle = { maxHeight: `64px` };
  }

  return (
    <div className={divClass} style={heightStyle}>
      <div className="exp__head">
        <div className="exp__position-control">
          <div className="exp__head-date">{dates}</div>
          <div className="exp__head-company">{company}</div>
        </div>
        <div className="exp__head-position">{pos}</div>
        <img className={bttnClass} src={Close} onClick={handleOpenDescr} />
      </div>
      <div className="exp__description">
        <ul ref={descriptionHeight} className="exp__description-list">
          {resp.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
