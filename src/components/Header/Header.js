import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <a className="header__home" href="/">
        Nick Abate
      </a>
      <div className="header__links">
        <a className="header__link" href="/">
          Portfolio
        </a>
        <a className="header__link header__link--mid" href="/">
          Skills
        </a>
        <a className="header__link" href="/">
          Experience
        </a>
      </div>

      <button className="header__btn">Contact Me</button>
    </header>
  );
}
