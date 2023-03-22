import "./Portfolio.scss";
import glucoast from "../../assets/images/projects/glucoast.png";
import github from "../../assets/images/tech/github.png";

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
            <div className="portfolio__showcase">
              <div className="portfolio__sample">
                <img
                  className="portfolio__image"
                  src={glucoast}
                  alt="GLUCOAST sample dashboard"
                />
              </div>
              <div className="portfolio__details">
                <h3>GLUCOAST</h3>
                <p className="portfolio__body">
                  GLUCOAST is an all-in-one dashboard to assist diabetics in
                  managing their glucose levels throughout the day.
                </p>
                <p className="portfolio__body">
                  Tech stack includes: HTML, Css, Js, Sass, React, Node, and
                  Express.
                </p>
                <div className="portfolio__repo">
                  <a
                    href="https://github.com/nickabate/glucoast-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="portfolio__github"
                      src={github}
                      alt="github repo link"
                    />
                  </a>
                  <a
                    className="portfolio__link"
                    href="https://github.com/nickabate/glucoast-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client source code
                  </a>
                  <a
                    className="portfolio__link portfolio__link--break"
                    href="https://github.com/nickabate/glucoast-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Server source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
