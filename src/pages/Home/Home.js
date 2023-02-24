import "./Home.scss";
// Tech images
import axios from "../../assets/images/tech/axios.png";
import expressjs from "../../assets/images/tech/expressjs.png";
import git from "../../assets/images/tech/git.png";
import javascript from "../../assets/images/tech/javascript.png";
import mysql from "../../assets/images/tech/mysql.png";
import nodejs from "../../assets/images/tech/nodejs.png";
import react from "../../assets/images/tech/react.png";
import sass from "../../assets/images/tech/sass.png";

// Social images
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
            I'm a Full Stack Software Engineer and BrainStation Software
            Engineering Bootcamp Alumni. In another age I was working as a
            Chartered Professional Accountant in the world of audit and finance.
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
          <img className="skills__icon" src={axios} alt="axios" />
          <img className="skills__icon" src={expressjs} alt="expressjs" />
          <img className="skills__icon" src={git} alt="git" />
          <img className="skills__icon" src={javascript} alt="javascript" />
          <img className="skills__icon" src={mysql} alt="mysql" />
          <img className="skills__icon" src={nodejs} alt="nodejs" />
          <img className="skills__icon" src={react} alt="react" />
          <img className="skills__icon" src={sass} alt="sass" />
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
      <footer className="footer">
        <h2>Get in touch with me!</h2>
        <img className="footer__icon" src={github} alt="github" />
        <img className="footer__icon" src={linkedin} alt="linkedin" />
        <img className="footer__icon" src={twitter} alt="twitter" />
      </footer>
    </>
  );
}
