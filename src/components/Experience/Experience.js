import { useEffect } from "react";
import Aos from "aos";

import resume from "../../assets/files/Nick-Abate-Resume.pdf";
import brainstation from "../../assets/images/icons/brainstation.png";

import "aos/dist/aos.css";
import "./Experience.scss";

export default function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade" id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__split-l">
          <h2 className="experience__header">Experience</h2>
        </div>
        <div className="experience__split-r">
          <p className="experience__text">
            <a
              className="experience__resume"
              href={resume}
              rel="noreferrer"
              target="_blank"
            >
              Download my resume
            </a>{" "}
            or check out{" "}
            <a
              className="experience__resume"
              href="https://www.linkedin.com/in/nick-abate/"
              target="_blank"
              rel="noreferrer"
            >
              my LinkedIn profile
            </a>{" "}
            to see my past work experience. Below is what I've been up to
            recently. I'm always searching to make meaningful connections which
            could lead to future opportunities and am currently looking for a
            Software Engineering role!
          </p>
          <div className="experience__current">
            <div className="experience__current-l">
              <a
                href="https://brainstation.io"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="experience__logo"
                  src={brainstation}
                  alt="brainstation-logo"
                />
              </a>
            </div>
            <div>
              <h3 className="experience__subhead">
                BrainStation - Software Engineering Bootcamp
              </h3>
              <h4 className="experience__subhead-det">
                Remote Teaching Assistant
              </h4>
              <p className="experience__details">
                Upon completion of my BrainStation Software Engineering
                Bootcamp, I was selected from a cohort of 30 students to work
                with BrainStation in guiding the next generation of software
                engineers by working as a Teaching Assistant. This was a remote
                full-time contract position which ended in May 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
