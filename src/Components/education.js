import React, { useContext } from "react";
import { education, TranslationContext } from "../contexts/TranslationContext";
import "./styles/education.css";
export default function Education() {
  const lang = useContext(TranslationContext);

  return (
    <section className="edu" id="__education">
      <div className="edu__container _container _container-wide">
        <h2 className="_section__header _huge">
          <span className="_accent">#</span>
          {education[lang].title}
          <span className="_accent">.</span>
        </h2>
        <div className="edu__courses">
          {education[lang].studies.map(({ place, dep, dates }, idx) => {
            return (
              <div className="edu__row" key={idx}>
                <div className="edu__control">
                  <p className="edu__dates">{dates}</p>
                  <p className="edu__company">{place}</p>
                </div>
                <p className="edu__theme" title={dep}>
                  {dep}
                </p>
              </div>
            );
          })}
        </div>
        {/* <table className="edu__table">
          <thead>
            <tr>
              <th className="edu__table-header column1">Dates</th>
              <th className="edu__table-header column2">Company</th>
              <th className="edu__table-header column3">Course</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table> */}
      </div>
    </section>
  );
}
