import { Btn } from "../../components";
import "./Filter.scss";

export function Filter({ categories }) {
  const variantsOfColor = [
    "blue",
    "green",
    "orange",
    "light-pink",
    "outline-pink",
  ];

  return (
    <ul className="filter">
      {categories.map(({ id, name }) => (
        <li className="filter__item" key={id}>
          <Btn
            text={name}
            classes={`btn btn-small btn-${variantsOfColor[id % 5]}`}
          />
        </li>
      ))}
    </ul>
  );
}
