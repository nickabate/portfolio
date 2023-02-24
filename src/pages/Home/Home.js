import "./Home.scss";

import github from "../../assets/images/socials/github.png";
import linkedin from "../../assets/images/socials/linkedin.png";
import twitter from "../../assets/images/socials/twitter.png";

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="/">Nick Abate</a>
        <a href="/">Home</a>
        <a href="/">Portfolio</a>
        <a href="/">Skills</a>
        <a href="/">Experience</a>
        <button>Contact Me</button>
      </header>

      <main>
        <section className="hero">
          <h1>Hi! 👋 Welcome to my page.</h1>
          <p>
            I'm a Full Stack Software Engineer who transitioned from working as
            a Chartered Professional Accountant in the world of accounting and
            finance.
          </p>
        </section>
        <section className="portfolio">
          <h2>Portfolio</h2>
          <p>Take a look at some of my work below.</p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <p>
            Some of the languages, frameworks and libraries I've worked with
            include the following:
          </p>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <p>I've worked as the following.</p>
        </section>
        <section className="blog">
          <h2>Writing</h2>
          <p>Here's some things which I've wrote about.</p>
        </section>
      </main>
      <footer>
        <h2>Get in touch with me!</h2>
        <img src={github} alt="github" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
      </footer>
    </>
  );
}
