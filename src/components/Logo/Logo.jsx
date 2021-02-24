import { NavLink } from "react-router-dom";
import "./Logo.scss";

export function Logo() {
  return (
    <NavLink to="/" className="header__logo">
      React
    </NavLink>
  );
}
