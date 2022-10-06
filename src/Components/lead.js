import React from "react";
import "./styles/lead.css";

export default function Lead() {
  return (
    <section className="lead" id="__lead">
      <div className="lead__container _container _container-wide ">
        <p className="lead__greet">Hello! I'm</p>
        <p className="lead__name">Your Father</p>
        <h1 className="lead__header">Topsy Kretts</h1>
        <p className="lead__description">
          Who is currently looking for the full-time remote job. E-commerce or
          EdTech companies would be especially welcome. Below you will find all
          information about my skills and portfolio.
        </p>
        <button className="lead__button">Explore</button>
        <div className="lead__photo"></div>
      </div>
    </section>
  );
}
