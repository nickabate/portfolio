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
import html from "../../assets/images/tech/html.png";
import css from "../../assets/images/tech/css.png";
import figma from "../../assets/images/tech/figma.png";
import vscode from "../../assets/images/tech/vscode.png";
import npm from "../../assets/images/tech/npm.png";
import heroku from "../../assets/images/tech/heroku.png";
import netlify from "../../assets/images/tech/netlify.png";
import jira from "../../assets/images/tech/jira.png";
import github from "../../assets/images/tech/github.png";

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <h2 className="skills__header">Skills</h2>
        <p className="skills__text">
          Some of the software, languages, frameworks and libraries I've worked
          with on my journey include the following. I'm always looking to expand
          my toolset and learn something new!
        </p>
      </div>
      <div className="skills__icons">
        <img className="skills__icon" src={html} alt="html" />
        <img className="skills__icon" src={expressjs} alt="expressjs" />
        <img className="skills__icon" src={git} alt="git" />
        <img className="skills__icon" src={javascript} alt="javascript" />
        <img className="skills__icon" src={css} alt="css" />
        <img className="skills__icon" src={mysql} alt="mysql" />
        <img className="skills__icon" src={nodejs} alt="nodejs" />
        <img className="skills__icon" src={react} alt="react" />
        <img className="skills__icon" src={sass} alt="sass" />
        <img className="skills__icon" src={figma} alt="figma" />
        <img className="skills__icon" src={vscode} alt="vscode" />
        <img className="skills__icon" src={axios} alt="axios" />
        <img className="skills__icon" src={netlify} alt="netlify" />
        <img className="skills__icon" src={npm} alt="npm" />
        <img className="skills__icon" src={github} alt="github" />
        <img className="skills__icon" src={heroku} alt="heroku" />
        <img className="skills__icon" src={jira} alt="jira" />
      </div>
    </section>
  );
}
