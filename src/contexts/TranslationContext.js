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
import quiksilver from "../images/comp_logos/quiksilver.png";

export const TranslationContext = createContext("");

// ===== Zero block ========  HEADER MENU
export const headerMenu = {
  ru: [
    "Домой",
    "Образование",
    "Навыки",
    "Опыт",
    "Проекты",
    "Обо мне",
    "Контакты",
  ],
  en: [
    "Home",
    "Education",
    "Skills",
    "Experience",
    "Projects",
    "About Me",
    "Contacts",
  ],
};

// ===== 1st block ========  LEAD
export const lead = {
  ru: {
    greet: "Привет! Меня зовут",
    name: "Сулханов Илья,",
    header: "Фронтенд Разработчик,",
    description:
      "Который сейчас находится в поиске работы. Ниже вы найдете описание моих навыков, опыта и контакты для связи.",
    button: "Скачать Резюме",
  },
  en: {
    greet: "Hello! I'm",
    name: "Sulhanov Ilya",
    header: "Frontend Developer",
    description:
      "Who is currently looking for the full-time remote job. E-commerce or EdTech companies would be especially welcome. Below you will find all information about my skills and portfolio.",
    button: "Download CV",
  },
};

// ===== 2nd block ======== EDUCATION
export const education = {
  ru: {
    title: "Образование",
    studies: [
      {
        place: "Яндекс",
        dep: "Я.Практикум, Фронтенд Разработчик",
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
        dep: "Кафедра высокотемпературных материалов и технологий",
        dates: "09.2007 - 06.2011",
      },
    ],
  },
  en: {
    title: "Education",
    studies: [
      {
        place: "Yandex.Practicum",
        dep: "Yandex, Frontend Developer",
        dates: "04.2022 - 01.2023",
      },
      {
        place: "Udemy",
        dep: "Juriy Bura, React + Redux - Professional Development",
        dates: "04.2022 - 06.2022",
      },
      {
        place: "Udemy",
        dep: "Ivan Petrychenko, JavaScript + React Complete Course",
        dates: "02.2022 - 03.2022",
      },
      {
        place: "Mendeleev University of Chemical Technology",
        dep: "High Temperature Materials and Technologies Department",
        dates: "09.2007 - 06.2011",
      },
    ],
  },
};

// ===== 3rd block ======== SKILLZ + EXPERIENCE + KNOWN COMPANIES (DONT SHOUT ON ME!)
export const skills = {
  ru: "Навыки",
  en: "Skills",
};

export const exp = {
  ru: {
    header: "Опыт работы",
    refs: "Рекомендации",
    subrefs: "Ниже логотипы классных компаний, с которыми я пока не работал.",
    data: [
      {
        pos: "Фронтенд разработчик (обучение)",
        company: "Я.Практикум",
        dates: "04.2022 - по н. в.",
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
        company: "Зигверк",
        dates: "12.2020 - 07.2022",
        resp: [
          "Оказывал технологическую поддержку клиентов на территории России",
          "Вел проекты клиентов начиная с запроса и до внедрения на производстве",
          "Искал и решал причины проблем, возникающие на производстве клиента",
          "Работал с рецептурами, подбирал альтернативное сырье, проводил комплексные тесты красок",
          "Взаимодействовал с технологической командой и исследовательской лабораторией в Германии",
          "Отвечал за внедрение новых продуктов на российский рынок",
        ],
      },
      {
        pos: "Химик // Старший Химик",
        company: "Зигверк",
        dates: "05.2017 - 12.2020",
        resp: [
          "Создавал и модифицировал рецептуры лаков и красок под нужны заказчиков",
          "Планировал и выполнял тесты по стандартным методикам, с оценкой результатов и написанием отчетов",
          "Изучал физические и технологические свойства красок и лаков в соответствии со стандартами компании",
          "Взаимодействовал с зарубежными коллегами по вопросам выполнения тестов и обмена опытом",
          "Обучал новых сотрудников лаборатории",
          "Контролировал и поддерживал функционирование лаборатории",
        ],
      },
      {
        pos: "Научный сотрудник",
        company: "ФГУП Вимс",
        dates: "10.2011 - 05.2017",
        resp: [
          "Работал в команде по разработке методик подготовки и анализа руд методами АЭС",
          "Участвовал в создании научных публикаций",
        ],
      },
    ],
  },
  en: {
    header: "Experience",
    refs: "References",
    subrefs: "Cool companies I haven't worked with yet",
    data: [
      {
        pos: "Frontend Developer (education)",
        company: "Ya.Practicum",
        dates: "04.2022 - current",
        resp: [
          "Created pages using HTML and CSS",
          "Made pages responsive and adaptive using css flex and grid",
          "Used JavaScript for applications logic ",
          "Set up client-server interaction via REST API",
          "Refactored applications to React",
        ],
      },
      {
        pos: "Account technology manager",
        logo: Logo,
        company: "Siegwerk",
        dates: "12.2020 - 07.2022",
        resp: [
          "Was responsible for regional clients support",
          "Managed customer's projects from processing of request to implementing in production",
          "Searched causes and solved problems appeared on client production site",
          "Worked with recipies, searched for alternative raw materials, performed complex tests of inks",
          "Cooperated with technology team and laboratory in Germany",
          "Implemented new products on local market",
        ],
      },
      {
        pos: "Chemist // Senior Chemist",
        logo: Logo,
        company: "Siegwerk",
        dates: "05.2017 - 12.2020",
        resp: [
          "Have created and adjusted recipes of ink and lacquers under customer needs",
          "Planned and performed complex tests using standard company methodics, with result evaluation and reporting",
          "Mentored newbie laboratory staff",
          "Controlled laboratory functioning in terms of avaliable consumables, cleanliness and order",
        ],
      },
      {
        pos: "Science Researcher",
        logo: Logo,
        company: "FGUP Vims",
        dates: "10.2011 - 05.2017",
        resp: [
          "Worked in team responsible for methodics development and samples analisys",
          "Participated in writing of science articles",
        ],
      },
    ],
  },
};

export const expLogos = [stark, quiksilver, apple, microsoft, google, umbrella];

// ===== 4th block ======== PROJECTS
export const projects = {
  header: { ru: "Проекты", en: "Projects" },
  data: [
    {
      id: 1,
      image: ThumbTodo,
      title: "Todo manager",
      tags: ["React", "Webpack", "JavaScript"],
      link: "https://github.com/Iluxmas/To-do-app",
    },
    {
      id: 2,
      image: ThumbMesto,
      title: "Mesto app",
      tags: ["HTML", "CSS", "Webpack", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/mesto",
    },
    {
      id: 3,
      image: ThumbHowto,
      title: "How-to-learn",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Iluxmas/how-to-learn",
    },
    {
      id: 4,
      image: ThumbRusTravel,
      title: "Russian travel",
      tags: ["HTML", "CSS", "SCSS"],
      link: "https://github.com/Iluxmas/russian-travel",
    },
    {
      id: 5,
      image: ThumbStardb,
      title: "Star Wars DB",
      tags: ["React", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/Starwars-DB",
    },
    {
      id: 6,
      image: ThumbMesto,
      title: "Mesto React",
      tags: ["React", "JavaScript", "API"],
      link: "https://github.com/Iluxmas/mesto",
    },
  ],
};

// ===== 5th block ======== ANOUTME
export const about = {
  ru: {
    header: "Обо мне",
    title: `Мысли ШИРЕ`,
    text: "Я Фронтенд Разработчик и с 2022 года нахожусь в Мармарис, Турция. Мой бэкграунд химико-технологический, последнее место работы - в крупнейшем мировом производителе полиграфических красок - дало мне большой опыт в управлении проектами, разработке продуктов и мышление ориентированное на бизнес. Но, поскольку я очень интересовался математикой и физикой, я всегда мечтал о программировании, оно всегда было частью меня. Я выбрал фронтенд т.к. у меня развитое чувство прекрасного, ежедневно посещая различные вебсайты я вижу, что хорошие фронтенд разработчики по-прежнему требуются. Также я люблю задачи и загадки, т.к не люблю вопросы без ответа. Я люблю обращать внимание на детали, надеюсь, вы заметили это, изучая этот сайт. Я очень рад, что смогу привнести свое видение, навыки и опыт в WEB. Зимой катаюсь на сноуборде, летом на велосипеде, нравится скалолазание и люблю путешествовать, пока что 32 посещенных страны.",
  },
  en: {
    header: "About Me",
    title: "Think BIG",
    text: "I am Frontend Developer and since 2022 based in Marmaris, Turkey. My background is a chemical technology, job at Siegwerk, world's leading ink supplier, gave me great experience in project managing, product development and business oriented thinking. But, since my big interest in maths and phisics, I was always dreaming about coding, programming always was a part of me. I choose Frontend cause I have great sense of beauty. Day-to-day websurfing just show that good FE developers is still in need. Also I love challenges and to solve puzzles, because don't like questions without an answer. I love to pay attention to the details, hope you noticed it while exloring this website. I am really happy that I can bring my vision, skills and experience to the WEB",
  },
};
export const aboutsThis = {};

// ===== 6th block ======== CONTACT
// export const contactOLD = {
//   ru: {
//     header: "Контакты",
//     location: "Местоположение:",
//     place: "Стамбул, Турция",
//     writeMe: "Связаться со мной:",
//     checkMine: "Мои страницы:",
//   },
//   en: {
//     header: "Contacts",
//     location: "Location:",
//     place: "Istanbul, Turkey",
//     writeMe: "Feel free to write me:",
//     checkMine: "Or check my profiles at:",
//   },
// };

// ===== 6.5 th block ======== CONTACT TWO
export const contact = {
  ru: {
    header: "Контакты",
    subheader:
      "Был рад знакомству! Вы можете связаться со мной по почте или через телеграмм. Также ниже вы найдете ссылки на мои профили в Github и Linkedin, добавляйтесь :)",
    checkMine: "Мои страницы:",
  },
  en: {
    header: "Contacts",
    subheader:
      "It was nice to meet you. Below you will find links to some my accounts where you can contact me. See you!",
    checkMine: "Or check my profiles at:",
  },
};
export const contactLinks = [
  { title: "telegram", link: "https://t.me/topsykrets" },
  { title: "email", link: "mailto:ilya.sulkhanov@gmail.com" },
  { title: "git", link: "https://github.com/Iluxmas" },
  { title: "linked", link: "https://www.linkedin.com/in/ilya-super-frontend" },
];
// ===== 7th block ======== FOOTER
export const footer = {
  ru: "",
  en: "",
};
