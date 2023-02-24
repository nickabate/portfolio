import "./Hero.scss";
import nick from "../../assets/images/socials/nick-abate.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero__image" src={nick} alt="Nick Abate" />
      <div className="hero__container">
        <h1 className="hero__greeting">Hi 👋 ! Welcome to my page.</h1>
        <p className="hero__text">
          I'm a Full Stack Software Engineer and BrainStation Software
          Engineering Bootcamp Alumni. I chose to pursue Software Engineering to
          come up with innovative solutions to everyday problems experienced by
          everyday people.
        </p>
      </div>
    </section>
  );
}
