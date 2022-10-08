import React from "react";
import "./styles/lead.css";

export default function Lead() {
  function scrollDown() {
    window.scroll(0, window.scrollY + 50);
  }

  return (
    <section className="lead" id="__lead">
      <div className="lead__container _container _container-xtra ">
        <div className="lead__decor_arrow"></div>
        <div className="lead__decor_oval"></div>
        <p className="lead__greet">Hello! I'm</p>
        <p className="lead__name">Your Father</p>
        <h1 className="lead__header">DnetnorF Repoleved</h1>
        <p className="lead__description">
          Who is currently looking for the full-time remote job. E-commerce or
          EdTech companies would be especially welcome. Below you will find all
          information about my skills and portfolio.
        </p>
        <a className="lead__button" href="#__education">
          Explore
        </a>
        <div className="lead__photo"></div>
      </div>
    </section>
  );
}
