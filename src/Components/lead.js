import React from "react";

export default function Lead() {
  return (
    <div className="block__container">
      <div className="lead">
        <p className="lead__greet">Hello! I'm</p>
        <p className="lead__name">Sulkhanov Ilya</p>
        <h1 className="lead__header">Frontend Developer</h1>
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
