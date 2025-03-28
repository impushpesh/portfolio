import SkillCard from "./SkillCard";

/** Image imports */

import C from '../assets/skills/c.svg';
import css from '../assets/skills/css.svg';
import express from '../assets/skills/express.svg';
import github from '../assets/skills/github.svg';
import html from '../assets/skills/html.svg';
import javascript from '../assets/skills/javascript.svg';
import mongo from '../assets/skills/mongo.svg';
import mysql from '../assets/skills/mysql.svg';
import nextjs from '../assets/skills/nextjs.svg';
import nodejs from '../assets/skills/nodejs.svg';
import postman from '../assets/skills/postman.svg';
import python from '../assets/skills/python.svg';
import react from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import tailwind from '../assets/skills/tailwind.svg';
import typescript from '../assets/skills/typescript.svg';

const skillItem = [
  // Frontend
  {
    imgSrc: html,
    label: "HTML",
    desc: "Markup Language"
  },
  {
    imgSrc: css,
    label: "CSS",
    desc: "Styling"
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Programming Language"
  },
  {
    imgSrc: react,
    label: "React",
    desc: "UI Library"
  },
  {
    imgSrc: redux,
    label: "Redux",
    desc: "State Management"
  },
  {
    imgSrc: tailwind,
    label: "TailwindCSS",
    desc: "Utility-first CSS"
  },
  {
    imgSrc: nextjs,
    label: "NextJS",
    desc: "React Framework"
  },

  // Backend
  {
    imgSrc: nodejs,
    label: "NodeJS",
    desc: "Runtime Environment"
  },
  {
    imgSrc: express,
    label: "Express",
    desc: "Backend Framework"
  },
  {
    imgSrc: mongo,
    label: "MongoDB",
    desc: "NoSQL Database"
  },
  {
    imgSrc: mysql,
    label: "MySQL",
    desc: "SQL Database"
  },
  {
    imgSrc: python,
    label: "Python",
    desc: "Programming Language"
  },
  {
    imgSrc: typescript,
    label: "TypeScript",
    desc: "Superset of JavaScript"
  },

  // Tools & Others
  {
    imgSrc: github,
    label: "GitHub",
    desc: "Version Control"
  },
  {
    imgSrc: postman,
    label: "Postman",
    desc: "API Testing"
  },
  {
    imgSrc: C,
    label: "C++",
    desc: "Language"
  }
];

function Skills() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Tech Stack</h2>
        <p className="text-zinc-400 mt-3 mb-8 mx-w-[50ch]">The tech stack on which i have experience working with</p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {
            skillItem.map(({imgSrc, label, desc},key) =>(
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Skills;
