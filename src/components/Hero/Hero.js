import { useEffect } from "react";
import nick from "../../assets/images/socials/nick-abate.jpg";
import Aos from "aos";

import "aos/dist/aos.css";
import "./Hero.scss";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade" className="hero">
      <div className="hero__image-container">
        <img className="hero__image" src={nick} alt="Nick Abate" />
      </div>
      <div className="hero__container">
        <h1 className="hero__greeting">Hello! Welcome to my page.</h1>
        <p className="hero__text">
          I'm Nick Abate, a self-taught developer turned Software Engineering
          bootcamp graduate and former Chartered Professional Accountant. I'm
          pursuing software engineering to come up with innovative solutions to
          everyday problems experienced by everyday people.
        </p>
      </div>
    </section>
  );
}
