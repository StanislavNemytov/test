import { useLocation } from "react-router-dom";
import "./Banner.scss";

export function Banner({ image, text }) {
  const location = useLocation();
  if (location.pathname === "/delivery") {
    return null;
  }
  return (
    <a className="aside__banner" href="/">
      <div className="aside__banner__img">
        <img src={image} alt={text} />
        <p className="t-white">{text}</p>
      </div>
    </a>
  );
}
