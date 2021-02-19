import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__navigation">
        <NavLink
          to="/error-browser/electrical"
          activeClassName="header__link_active"
          className="header__link link"
        >
          Электрика
        </NavLink>
        <NavLink
          to="/error-browser/mechanical"
          activeClassName="header__link_active"
          className="header__link link"
        >
          Механика
        </NavLink>
        <NavLink
          to="/"
          className="header__link link"
        >
          На главную
        </NavLink>
      </nav>
      <label className="burger">
        <input
          type="checkbox"
          id="checkbox"
          className="burger__hidden-checkbox hidden"
        />
        <div className="burger__stripe"></div>
        <div className="burger__stripe"></div>
        <div className="burger__stripe"></div>
      </label>
    </header>
  );
}

export default Header;
