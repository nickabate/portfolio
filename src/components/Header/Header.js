import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
        Nick Abate
      </a>
      <a className="header__link" href="/">
        Home
      </a>
      <a className="header__link" href="/">
        Portfolio
      </a>
      <a className="header__link" href="/">
        Skills
      </a>
      <a className="header__link" href="/">
        Experience
      </a>
      <button>Contact Me</button>
    </header>
  );
}
