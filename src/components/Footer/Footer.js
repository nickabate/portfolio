import "./Footer.scss";

// Social images
import github from "../../assets/images/socials/github.png";
import linkedin from "../../assets/images/socials/linkedin.png";
import twitter from "../../assets/images/socials/twitter.png";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Get in touch with me!</h2>
      <img className="footer__icon" src={github} alt="github" />
      <img className="footer__icon" src={linkedin} alt="linkedin" />
      <img className="footer__icon" src={twitter} alt="twitter" />
    </footer>
  );
}
