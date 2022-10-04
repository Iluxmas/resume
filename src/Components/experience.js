import React, { useContext } from "react";
import { TranslationContext, exp } from "../contexts/TranslationContext";
import Job from "./job";
import "./experience.css";

export default function Experience() {
  const lang = useContext(TranslationContext);

  return (
    <TranslationContext.Consumer>
      {(lang) => (
        <div className="exp">
          <h2 className="exp__header">Experience</h2>
          <div className="exp__container">
            {exp[lang].map((item, idx) => {
              return <Job key={idx} data={item} />;
            })}
          </div>
        </div>
      )}
    </TranslationContext.Consumer>
  );
}

// {exp[lang].map((item) => {
//   return (
//     <div className="exp__card">
//       <div className="exp__card-head">
//         <img className="exp__card-logo" src={item.logo} />
//         <div className="exp__card-head-textblock">
//           <h3 className="exp__card-position">{item.pos}</h3>
//           <p className="exp__card-company">{item.company}</p>
//           <p className="exp__card-dates">{item.dates}</p>
//         </div>
//       </div>
//       <div className="exp__card-body">
//         <ul className="exp__card-list">
//           {item.resp.map((element) => {
//             return <li className="exp__card-list-item">{element}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// })}
