import { skillsIcons } from "../../data/skills.icons";

import "./Skills.scss";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div className="skills__split-l">
          <h2 className="skills__header">Skills</h2>
        </div>
        <div className="skills__split-r">
          <p className="skills__text">
            Some of the software, languages, frameworks and libraries I've
            worked with on my journey include the following. I'm always looking
            to expand my toolset and learn something new!
          </p>
          <div className="skills__icons">
            {skillsIcons.map((skill) => (
              <img
                className="skills__icon"
                src={skill.image}
                alt={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
