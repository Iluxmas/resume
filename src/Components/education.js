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
        <table className="edu__table">
          <thead>
            <tr>
              <th className="edu__table-header column1">Company</th>
              <th className="edu__table-header column2">Course</th>
              <th className="edu__table-header column3">Dates</th>
            </tr>
          </thead>
          <tbody>
            {education[lang].studies.map(({ place, dep, dates }, idx) => {
              return (
                <tr key={idx}>
                  <td className="edu__table-body column1">{place}</td>
                  <td className="edu__table-body column2" title={dep}>
                    {dep}
                  </td>
                  <td className="edu__table-body column3">{dates}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
