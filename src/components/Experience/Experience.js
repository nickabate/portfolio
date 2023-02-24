import "./Experience.scss";

// Resume
import resume from "../../assets/files/Nick-Abate-Resume.pdf";

export default function Experience() {
  return (
    <section className="experience">
      <div className="experience__container">
        <h2 className="experience__header">Experience</h2>
        <div>
          <p className="experience__text">
            <a className="experience__resume" href={resume}>
              Download my resume
            </a>{" "}
            to see my past work experience. Below is what I've been up to
            recently. I'm always searching to make meaningful connections which
            could lead to future opportunities!
          </p>
        </div>
      </div>
    </section>
  );
}
