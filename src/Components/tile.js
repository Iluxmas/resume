import React from "react";
import Icon from "../images/github.png";
export default function Tile(props) {
  const { image, title, description, tags, link } = props.content;

  return (
    <li className="gallery__item">
      <div className="item__container">
        <img className="gallery__item-image" src={image} />
        <div className="gallery__item-overlay">
          <div className="gallery__item-overlay-inner">
            <div className="gallery__item-head">
              <h3 className="gallery__item-title">{title}</h3>
              <a className="gallery__item-link" target="_blank" href={link}></a>
            </div>
            <p className="gallery__item-description">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
