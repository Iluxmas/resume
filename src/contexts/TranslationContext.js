import React, { createContext } from "react";
import Logo from "../images/exp__icons/siegw.png";

import ThumbTodo from "../images/projects/todo-app.JPG";
import ThumbHowto from "../images/projects/how-to-learn.JPG";
import ThumbMesto from "../images/projects/mesto-app.JPG";
import ThumbRusTravel from "../images/projects/russian-travel.JPG";
import ThumbStardb from "../images/projects/star-db.JPG";

import apple from "../images/comp_logos/apple.png";
import microsoft from "../images/comp_logos/microsoft.png";
import google from "../images/comp_logos/google.png";
import stark from "../images/comp_logos/stark.png";
import umbrella from "../images/comp_logos/umbrella.png";

export const TranslationContext = createContext("");

export const lead = {};
export const exp = {
  ru: [
    {
      pos: "Фронтенд разработчик",
      logo: Logo,
      company: "Я.Практикум",
      dates: "апр. 22 - по н. в.",
      resp: [
        "Создавал страницы с помощью HTML и CSS",
        "Использовал flex и grid для создания адаптивности под различные устройства",
        "Писал код на JavaScript для построения логики работы приложения",
        "Настройка клиент-серверного взаимодействия по средствам API",
        "Портировал проекты на React",
      ],
    },
    {
      pos: "Менеджер технологической поддержки",
      logo: Logo,
      company: "Siegwerk",
      dates: "дек. 20 - июл. 22",
      resp: [
        "Технологическая поддержка клиентов на территории России;",
        "Организация тестов на производстве заказчика;",
        "Решение проблем, возникающих на производстве клиента, анализ и разработка корректирующих мероприятий",
        "Работа с рецептурами, подбор альтернативного сырья, проведение комплексных и специализированных тестов красок, подбор цвета;",
        "Взаимодействие с технологической командой и исследовательской лабораторией в Германии;",
        "Внедрение новых продуктов на российский рынок",
      ],
    },
    {
      pos: "Химик // Старший Химик",
      logo: Logo,
      company: "Siegwerk",
      dates: "май. 17 - дек. 20",
      resp: [
        "Создание, модификация, адаптация лаков и красок под нужны заказчиков для печати на гибких плёнках",
        "Проведение тестов для выяснения причин и решения проблем возникающих у клиентов во флексо и глубокой печати",
        "Изучение физических и технологических свойств красок и лаков по методикам компании, изучение влияния рецептур на эти свойства в соответствии со стандартными методиками и с разработанными правилами и процедурами, совершенствование методик тестирования свойств лаков и красок",
        "Подбор цветов по жидкому образцу или пантонному вееру под необходимые условия печати, материал или структуру, с использованием программы inkFormulation и спектрофотометра eXact",
        "Контактирование с зарубежными коллегами по вопросам выполнения тестов и обмена опытом",
        "Контроль наличия и заказ необходимых в работе материалов в лаборатории",
      ],
    },
  ],
  en: [],
};

export const exp_img = [apple, stark, google, microsoft, umbrella];
export const skills = {};
export const education = {
  ru: [
    {
      place: "Я.Практикум",
      dep: "Яндекс , Front-end Разработчик",
      dates: "04.2022 - 01.2023",
    },
    {
      place: "Udemy",
      dep: "Юрий Бура, React + Redux - Профессиональная Разработка",
      dates: "04.2022 - 06.2022",
    },
    {
      place: "Udemy",
      dep: "Иван Петриченко, Полный курс по JavaScript + React",
      dates: "02.2022 - 03.2022",
    },
    {
      place: "РХТУ им. Д.И.Менделеева",
      dep: "Кафедра высокотературных материалов и технологий",
      dates: "09.2007 - 06.2011",
    },
  ],
};

export const projects = {
  ru: [
    {
      id: 1,
      image: ThumbTodo,
      title: "Todo manager",
      description: "Application for managing todo list",
      tags: ["React", "Webpack", "JavaScript"],
      link: "https://github.com/Iluxmas/To-do-app",
    },
    {
      id: 2,
      image: ThumbMesto,
      title: "Mesto app",
      description:
        "Project theme was photo social network. Template was taken from Figma. Page is adaptive, size and position of elements depends on screen size. ApiService class component responsible for server-client interaction.",
      tags: ["HTML", "CSS", "Webpack", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/mesto",
    },
    {
      id: 3,
      image: ThumbHowto,
      title: "How-to-learn",
      description:
        "Project theme was Education Techniques. To create this page I implemented some new knowledges about markup language and css flex. Files organization was made according to BEM nested methodology. Language switch was made with JS.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Iluxmas/how-to-learn",
    },
    {
      id: 4,
      image: ThumbRusTravel,
      title: "Russian travel",
      description:
        "Project theme was russian travel, template was taken from Figma. Page is adaptive, size and position of elements depends on screen size through media queries. Grid and flex both were used. For styles SCSS was used with further conversion to css.",
      tags: ["HTML", "CSS", "SCSS"],
      link: "https://github.com/Iluxmas/russian-travel",
    },
    {
      id: 5,
      image: ThumbStardb,
      title: "Star Wars DB",
      description: "Simple DB based on SWAPI",
      tags: ["React", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/Starwars-DB",
    },
    {
      id: 6,
      image: ThumbMesto,
      title: "Mesto React",
      description: "React ported version of Mesto ",
      tags: ["React", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/mesto",
    },
  ],
};
export const about = {
  ru: {
    header: "Обо мне",
    title: "Мысли ШИРЕ",
    text: "Я Фронтенд Разработчик и с 2022 года нахожусь в Стамбуле, Турция. Мой бэкграунд химико-технологический, последнее месо работы - в крупнейшем мировом производителе полиграфических красок - дало мне большой опыт в управлении проектами, разработке продуктов и мышление ориентированное на бизнес. Но, поскольку я очень интересовался математикой и физикой, я всегда мечтал о программировании, оно всегда было частью меня. Я выбрал фронтенд т.к. у меня развитое чувство прекрасного, ежедневно посещая различные вебсайты я вижу, что хорошие фронтенд разработчики по-прежнему требуются. Также я люблю задачи и загадки, т.к не люблю вопросы без ответа. Я люблю обращать внимание на детали, надеюсь, вы заметили это, изучая этот сайт. Я очень рад, что смогу привнести свое видение, навыки и опыт в WEB. Зимой катаюсь на сноуборде, летом на велосипеде, нравится скалолазание и люблю путешествовать, пока что 32 посещенных страны.",
  },
  en: {
    header: "About Me",
    title: "Think BIG",
    text: "I am Frontend Developer and since 2022 based in Istanbul, Turkey. My background is a chemical technology, job at Siegwerk, world's leading ink supplier, gave me great experience in project managing, product development and business oriented thinking. But, since my big interest in maths and phisics, I was always dreaming about coding, programming was};always a part of me. I choose Frontend cause I have great sense of beauty. Day-to-day websurfing just show that good FE developers is still in need. Also I love challenges and to solve puzzles, because don't like questions without an answer. I love to pay attention to the details, hope you noticed it while exloring this website. I am really happy that I can bring my vision, skills and experience to the WEB",
  },
};
export const aboutsThis = {};
export const contact = {};

export const translations = {
  en: {
    greeting: "Hello World",
  },
  ru: {
    greeting: "Привет, мир!",
  },
};
