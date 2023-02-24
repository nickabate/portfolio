import "./Skills.scss";

// Tech images
import axios from "../../assets/images/tech/axios.png";
import expressjs from "../../assets/images/tech/expressjs.png";
import git from "../../assets/images/tech/git.png";
import javascript from "../../assets/images/tech/javascript.png";
import mysql from "../../assets/images/tech/mysql.png";
import nodejs from "../../assets/images/tech/nodejs.png";
import react from "../../assets/images/tech/react.png";
import sass from "../../assets/images/tech/sass.png";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <p className="skills__text">
        Some of the languages, frameworks and libraries I've worked with include
        the following.
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
  );
}
