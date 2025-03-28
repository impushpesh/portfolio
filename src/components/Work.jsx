import ProjectCard from "./ProjectCard";
import sb from "../assets/projects/swiftbuy.png";
import tk from "../assets/projects/talky.png";
import tt from "../assets/projects/twitter.png";
import prt from "../assets/projects/prt.png";
import mgt from "../assets/projects/mgt.png";

const works = [
  {
    imgSrc: sb,
    title: "SwiftBuy - Full Stack eCommerce",
    description:
      "A MERN-based eCommerce app featuring React, Redux, JWT auth & PayPal integration.",
    tags: ["MERN", "eCommerce"],
    projectLink: "https://github.com/impushpesh/SwiftBuy",
  },
  {
    imgSrc: tt,
    title: "Twitter Clone",
    description:
      "A real-time social media app with JWT auth, post interactions & notifications.",
    tags: ["MERN", "Social", "Real-time"],
    projectLink: "https://github.com/impushpesh/twitterClone",
  },
  {
    imgSrc: tk,
    title: "Talky - Real-Time Chat App",
    description:
      "A chat application using MERN & Socket.IO for secure, real-time messaging.",
    tags: ["MERN", "Full stack", "Real-time"],
    projectLink: "https://github.com/impushpesh/Talky",
  },
  {
    imgSrc: mgt,
    title: "EduManager - Student Database Manager",
    description:
      "A backend platform for managing students, teachers & courses with role-based access.",
    tags: ["Backend", "API"],
    projectLink: "https://github.com/impushpesh/EduManager",
  },
  {
    imgSrc: prt,
    title: "Personal Portfolio",
    description:
      "A creative portfolio showcasing projects and skills with a modern, responsive design.",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/impushpesh/portfolio",
  },
];


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Works</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, description, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              description={description}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
