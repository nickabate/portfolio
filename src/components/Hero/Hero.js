import "./Hero.scss";
import nick from "../../assets/images/socials/nick-abate.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img className="hero__image" src={nick} alt="Nick Abate" />
      </div>
      <div className="hero__container">
        <h1 className="hero__greeting">Hi! Welcome to my page.</h1>
        <p className="hero__text">
          I'm Nick Abate, a software engineer and bootcamp graduate. I'm
          pursuing software engineering to come up with innovative solutions to
          everyday problems experienced by everyday people.
        </p>
      </div>
    </section>
  );
}
