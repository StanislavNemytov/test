import "./Banner.scss";

export function Banner({ image, text }) {
  return (
    <a className="aside__banner" href="/">
      <div className="aside__banner__img">
        <img src={image} alt={text} />
        <p className="t-white">{text}</p>
      </div>
    </a>
  );
}
