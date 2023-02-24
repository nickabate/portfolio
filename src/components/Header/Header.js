import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <a className="header__home" href="/">
          Nick Abate
        </a>
        <div className="header__links">
          <a className="header__link" href="/">
            Portfolio
          </a>
          <a className="header__link" href="/">
            Skills
          </a>
          <a className="header__link" href="/">
            Experience
          </a>
        </div>
      </div>

      <button className="header__btn">Contact Me</button>
    </header>
  );
}
