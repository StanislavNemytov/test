import "./Btn.scss";

export function Btn({ text, classes }) {
  return (
    <button className={classes} aria-label={text}>
      {text}
    </button>
  );
}
