import React, { createContext } from "react";
import Logo from "../images/exp__icons/siegw.png";
import Todo from "../images/projects/todo-app.JPG";

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
      image: Todo,
      title: "Todo app",
      description: "Application for managing todo list",
      tags: ["CSS", "React", "HTML", "Webpack"],
      link: "https://github.com/Iluxmas/To-do-app",
    },
    {
      id: 2,
      image: Todo,
      title: "Todo app 2",
      description:
        "Application for managing todo list 2 Application for managing todo list Application for managing todo list",
      tags: ["CSS", "React", "HTML"],
      link: "https://github.com/Iluxmas/To-do-app",
    },
    {
      id: 3,
      image: Todo,
      title: "Todo app 3",
      description: "Application for managing todo list 2",
      tags: ["CSS", "React", "HTML"],
      link: "https://github.com/Iluxmas/To-do-app",
    },
  ],
};
export const aboutMe = {};
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
