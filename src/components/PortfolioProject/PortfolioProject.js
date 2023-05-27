import githubIcon from "../../assets/images/icons/github.png";
import linkIcon from "../../assets/images/icons/link.png";
import "./PortfolioProject.scss";
import { v4 } from "uuid";

const PortfolioProject = ({ project }) => {
  const { title, description, tech, github, link, image } = project;
  return (
    <article className="portfolio__showcase">
      <div className="portfolio__sample">
        <img
          className="portfolio__image"
          src={image}
          alt="GLUCOAST sample dashboard"
        />
      </div>
      <div className="portfolio__details">
        <h3 className="portfolio__subhead">{title}</h3>
        <p className="portfolio__body">{description}</p>
        <div className="portfolio__skills">
          {tech.map((item) => (
            <span key={v4()} className="portfolio__skill">
              {item}
            </span>
          ))}
        </div>
        <div className="portfolio__links">
          <div className="portfolio__deployed">
            <a href={link} target="_blank" rel="noreferrer">
              <img
                className="portfolio__icon"
                src={linkIcon}
                alt="active site link"
              />
            </a>
            <a
              className="portfolio__link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Deployed Site
            </a>
          </div>
          <div className="portfolio__repo">
            <a href={github} target="_blank" rel="noreferrer">
              <img
                className="portfolio__icon"
                src={githubIcon}
                alt="github repo link"
              />
            </a>
            <a
              className="portfolio__link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioProject;
