import { useEffect } from "react";
import { portfolioProjects } from "../../data/portfolio.projects";
import PortfolioProject from "../PortfolioProject/PortfolioProject";
import Aos from "aos";

import "aos/dist/aos.css";
import "./Portfolio.scss";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade" id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__split-l">
          <h2 className="portfolio__header">Portfolio</h2>
        </div>
        <div className="portfolio__split-r">
          <p className="portfolio__text">
            Take a look at some of my work below. Nothing is more exciting than
            bringing new ideas to life and figuring out the most efficient way
            to do so!
          </p>
          <div className="portfolio__projects">
            {portfolioProjects.map((project) => (
              <PortfolioProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
