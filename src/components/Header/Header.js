import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <header id="header" className="header">
      <div className="header__container">
        <Link className="header__home" href="/">
          &lt; &#47;&gt; Nick Abate
        </Link>
        <ul className="header__links">
          <li
            onClick={() => {
              handleClickScroll("portfolio");
            }}
            className="header__link"
          >
            Portfolio
          </li>
          <li
            onClick={() => {
              handleClickScroll("skills");
            }}
            className="header__link header__link--mid"
            href="/"
          >
            Skills
          </li>
          <li
            onClick={() => {
              handleClickScroll("experience");
            }}
            className="header__link"
            href="/"
          >
            Experience
          </li>
        </ul>

        <button
          onClick={() => {
            handleClickScroll("footer");
          }}
          className="header__btn"
        >
          Contact Me
        </button>
      </div>
    </header>
  );
}
