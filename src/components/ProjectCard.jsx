import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  imgSrc,
  title,
  description,
  tags,
  liveLink,
  githubLink,
  classes = "",
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-1">{title}</h3>
          <p className="text-sm text-zinc-600 mb-3">{description}</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, idx) => (
              <span
                key={idx}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {liveLink && (
            <a
              href={liveLink.startsWith("http") ? liveLink : `https://${liveLink}`}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-500 transition-colors"
            >
              {/* Material arrow_outward icon */}
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg grid place-items-center bg-zinc-50/10 text-zinc-300 hover:text-white hover:bg-zinc-50/20 transition-colors"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  liveLink: PropTypes.string,   
  githubLink: PropTypes.string, 
  classes: PropTypes.string,
};

export default ProjectCard;
