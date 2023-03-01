import "./Footer.scss";
import { Link } from "react-router-dom";

// Social images
import github from "../../assets/images/socials/github.png";
import linkedin from "../../assets/images/socials/linkedin.png";
import twitter from "../../assets/images/socials/twitter.png";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <h2>Get in touch with me!</h2>
      <div className="footer__socials">
        <Link target="_blank" to="https://github.com/nickabate">
          <img className="footer__icon" src={github} alt="github" />
        </Link>
        <Link target="_blank" to="https://www.linkedin.com/in/nick-abate/">
          <img className="footer__icon" src={linkedin} alt="linkedin" />
        </Link>
        <Link target="_blank" to="https://twitter.com/thatdevnick">
          <img className="footer__icon" src={twitter} alt="twitter" />
        </Link>
      </div>
      <p>Copyright &copy; 2023 | Nick Abate</p>
    </footer>
  );
}
