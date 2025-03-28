import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux, SiExpress, SiMongodb, SiMysql, SiNpm, SiPostman, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "React", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { name: "NPM", icon: <SiNpm color="#CB3837" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Git", icon: <FaGit color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
];

function Skills() {
  return (
    <div className="py-16 text-center px-6">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="text-4xl">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
