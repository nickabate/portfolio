import "./Experience.scss";

// Resume
import resume from "../../assets/files/Nick-Abate-Resume.pdf";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <div className="experience__split-l">
          <h2 className="experience__header">Experience</h2>
        </div>
        <div className="experience__split-r">
          <p className="experience__text">
            <a className="experience__resume" href={resume}>
              Download my resume
            </a>{" "}
            to see my past work experience. Below is what I've been up to
            recently. I'm always searching to make meaningful connections which
            could lead to future opportunities!
          </p>
          <div className="experience__current">Description coming soon...</div>
        </div>
      </div>
    </section>
  );
}
