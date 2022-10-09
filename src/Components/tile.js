import React from "react";
export default function Tile(props) {
  const { image, title, link } = props.content;

  return (
    <li className="gallery__item">
      <div className="item__container">
        <img className="gallery__item-image" src={image} />
        <a className="gallery__item-overlay" target="_blank" href={link}>
          <h3 className="gallery__item-title">{title}</h3>
        </a>
      </div>
    </li>
  );
}
