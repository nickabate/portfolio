import "./Experience.scss";

// Resume
import resume from "../../assets/files/Nick-Abate-Resume.pdf";

export default function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <p className="experience__text">
        See my current resume{" "}
        <a className="experience__resume" href={resume}>
          here
        </a>
        .
      </p>
      <p className="experience__text">
        In another age I was working as a Chartered Professional Accountant in
        the world of audit and finance. Here's what I've been up to recently.
      </p>
    </section>
  );
}
