import "./Link.scss";

export function Link({ text, classes, href, target = "_self" }) {
  return (
    <a href={href} className={classes} target={target} aria-label={text}>
      {text}
    </a>
  );
}
