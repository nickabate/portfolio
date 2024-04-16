import { useEffect, useState } from "react";
import { skillsIcons } from "../../data/skills.icons";
import Aos from "aos";

import "aos/dist/aos.css";
import "./Skills.scss";

export default function Skills() {
  const [skilltext, setSkilltext] = useState("Click a skill below!");

  const skillDisplay = (e) => {
    setSkilltext(`I love to use... ${e.target.alt}!`);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade-left" id="skills" className="skills">
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

          <h3 className="skills__shout">{skilltext}</h3>
          <div className="skills__icons">
            {skillsIcons.map((skill) => (
              <img
                key={skill.name}
                className="skills__icon"
                src={skill.image}
                alt={skill.name}
                onClick={skillDisplay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
