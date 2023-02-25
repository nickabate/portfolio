import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
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
            Projects will be updated soon...
          </div>
        </div>
      </div>
    </section>
  );
}
