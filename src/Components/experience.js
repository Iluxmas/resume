import React, { useContext } from "react";
import {
  TranslationContext,
  exp,
  expLogos,
} from "../contexts/TranslationContext";
import Job from "./job";
import "./styles/experience.css";

export default function Experience() {
  const lang = useContext(TranslationContext);

  return (
    <TranslationContext.Consumer>
      {(lang) => (
        <section className="exp" id="__experience">
          <div className="exp_top_bcg"></div>
          <div className="exp__container _container _container-wide">
            <h2 className="_section__header _huge">
              <span className="_accent">#</span>
              {exp[lang].header}
              <span className="_accent">.</span>
            </h2>
            <div className="exp__jobs-container">
              {exp[lang].data.map((item, idx) => {
                return <Job key={idx} data={item} />;
              })}
            </div>
          </div>
          <div className="_container-narrow exp__known-companies ">
            <h2 className="_section__header _huge">
              <span className="_accent">#</span>
              {exp[lang].refs}
              <span className="_accent">.</span>
            </h2>

            <p className="exp__known-companies-subtitle">{exp[lang].subrefs}</p>
            <div className="exp__logo-container">
              {expLogos.map((item, idx) => {
                return (
                  <img className="exp__company-image" key={idx} src={item} />
                );
              })}
            </div>
            <div className="exp__known-decor_dots"></div>
            {/* <div className="exp__known-decor"></div> */}
          </div>
          <div className="exp_bottom_bcg"></div>
        </section>
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
