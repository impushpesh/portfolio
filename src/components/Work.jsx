import ProjectCard from "./ProjectCard";
import Me from "../assets/Me.png"

const works = [
  {
    imgSrc: Me,
    title: "SwiftBuy-Full stack eCommerce",
    tags: ["Development"],
    projectLink: "https://github.com/impushpesh/SwiftBuy",
  },
  {
    imgSrc: Me,
    title: "X clone",
    tags: ["API", "Development"],
    projectLink: "https://github.com/impushpesh/twitterClone",
  },
  {
    imgSrc: Me,
    title: "Talky- Realtime chat app",
    tags: ["Development", "API"],
    projectLink: "https://github.com/impushpesh/Talky",
  },
  {
    imgSrc: Me,
    title: "EduManager- Backend project to manage student database.",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/impushpesh/EduManager",
  },
  {
    imgSrc: Me,
    title: "Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/impushpesh/portfolio",
  },
];

const Work = () => {
  return(
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8"> My Works</h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default Work;
