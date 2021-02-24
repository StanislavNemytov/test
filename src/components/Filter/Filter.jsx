import { connect } from "react-redux";
import { Btn } from "../../components";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./Filter.scss";

export function Filter({ categories, clickable = false, reducerAPI }) {
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
            clickable={clickable}
            notButton={reducerAPI.categoryId === id}
            variant="getProductsByCategoryId"
            id={id}
            text={name}
            classes={`btn btn-small btn-${variantsOfColor[id % 5]}`}
          />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  reducerAPI: selectorReducerApi(state),
});

export default connect(mapStateToProps)(Filter);
