import React, { useContext } from 'react';
import { lead, TranslationContext } from '../contexts/TranslationContext';
import 'animate.css';
import './styles/lead.css';

export default function Lead() {
  const lang = useContext(TranslationContext);
  const linkRu = 'https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_RU.pdf';
  const linkEn = 'https://github.com/Iluxmas/resume/raw/master/src/files/Sulkhanov_Ilya_resume_final_EN.pdf';

  return (
    <section className='lead' id='lead'>
      <div className='lead__container _container _container-xtra '>
        <div className='lead__decor_arrow'></div>
        <div className='lead__decor_oval'></div>
        <p className='lead__greet animate__animated animate__fadeInLeft faster animate__delay-1s'>{lead[lang].greet}</p>
        <p className='lead__name animate__animated animate__fadeInLeft faster animate__delay-1s'>{lead[lang].name}</p>
        <h1 className='lead__header animate__animated animate__fadeInLeft faster animate__delay-1s'>
          {lead[lang].header}
        </h1>
        <p className='lead__description animate__animated animate__fadeInLeft fast animate__delay-1s'>
          {lead[lang].description}
        </p>
        <a
          className='lead__button animate__animated animate__fadeInLeft fast animate__delay-2s'
          href={lang === 'ru' ? linkRu : linkEn}
          target='_blank'
        >
          {lead[lang].button}
        </a>
        <div className='lead__photo'></div>
      </div>
    </section>
  );
}
