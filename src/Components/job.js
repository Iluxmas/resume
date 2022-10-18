import React, { useState, useRef, useEffect } from "react";
import Close from "../images/plus.svg";
import "./styles/job.css";

export default function Job({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [descrHeight, setDescrHeight] = useState(null);
  const [headHeight, setHeadHeight] = useState(null);

  const descriptionElement = useRef(null);
  const headElement = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { pos, company, dates, resp } = data;

  function handleOpenDescr(event) {
    setIsOpen(() => !isOpen);
  }
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    setDescrHeight(descriptionElement.current.clientHeight);
    setHeadHeight(headElement.current.clientHeight);
  }, [width]);

  // let addHeight = descriptionHeight.current?.clientHeight;
  // let maxHeight = headHeight.current?.clientHeight;
  let bttnClass, divClass, heightStyle;

  if (isOpen) {
    bttnClass = "exp__expand-bttn rotate";
    divClass = "exp__item open";
    heightStyle = { maxHeight: `${headHeight + descrHeight + 32}` + "px" };
  } else {
    bttnClass = "exp__expand-bttn";
    divClass = "exp__item";
    heightStyle = { maxHeight: headHeight };
  }

  return (
    <div className={divClass} style={heightStyle}>
      <div ref={headElement} className="exp__head">
        <div className="exp__text-container">
          <div className="exp__pos-control">
            <div className="exp__head-company">{company}</div>
            <div className="exp__head-date">{dates}</div>
          </div>
          <div className="exp__head-position">{pos}</div>
        </div>

        <img className={bttnClass} src={Close} onClick={handleOpenDescr} />
      </div>
      <div className="exp__description">
        <ul ref={descriptionElement} className="exp__description-list">
          {resp.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
