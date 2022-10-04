import React from "react";
import "./lead.css";

export default function Lead() {
  return (
    <div className="lead">
      <div className="lead__container">
        <p className="lead__greet">Hello! I'm</p>
        <p className="lead__name">Topsy Kretts</p>
        <h1 className="lead__header">Topsy Kretts</h1>
        <p className="lead__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          totam, est suscipit facere illum perferendis? Nesciunt vero isi
          consequuntur, doloremque ipsum, excepturi praesentium.
        </p>
        <button className="lead__button">Explore</button>
        <div className="lead__photo"></div>
      </div>
    </div>
  );
}
