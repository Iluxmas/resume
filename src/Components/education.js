import React, { useContext } from "react";
import { education, TranslationContext } from "../contexts/TranslationContext";
import "./education.css";
export default function Education() {
  const lang = useContext(TranslationContext);

  return (
    <div className="edu__container">
      <h2 className="edu__header">Education</h2>
      <table className="edu__table">
        <thead>
          <tr>
            <th className="edu__table-header column1">Company</th>
            <th className="edu__table-header column2">Contact</th>
            <th className="edu__table-header column3">Country</th>
          </tr>
        </thead>
        <tbody>
          {education[lang].map(({ place, dep, dates }, idx) => {
            return (
              <tr key={idx}>
                <td className="edu__table-body">{place}</td>
                <td className="edu__table-body">{dep}</td>
                <td className="edu__table-body">{dates}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
