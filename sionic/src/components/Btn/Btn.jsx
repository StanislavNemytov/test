import { connect } from "react-redux";
import {
  addProduct,
  removeAllProducts,
  removeProduct,
} from "../../store/dispState";
import {
  getProducts,
  getNextProducts,
  getProductsByCategoryId,
  removeCategoryId,
} from "../../store/requests";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./Btn.scss";

function Btn({
  text,
  classes,
  addProduct,
  removeProduct,
  removeAllProducts,
  getProductsByCategoryId,
  nextRange,
  id = "",
  variant = "default",
  clickable,
  notButton,
  removeCategoryId,
  getProducts,
  getNextProducts,
  reducerAPI,
}) {
  let range;

  const { currentRange } = reducerAPI;
  if (nextRange) {
    range = currentRange.map((number) => number + 25);
    if (range[0] === 100) {
      return null;
    }
  }

  const variantOfAction = {
    add: addProduct,
    remove: removeProduct,
    removeAll: removeAllProducts,
    getProductsByCategoryId,
    nextProducts: () => {
      getNextProducts(range, id);
    },
    removeCategoryId: () => {
      removeCategoryId();
      getProducts([0, 24]);
    },
    default: () => {},
  };

  const onClick = variantOfAction[variant];

  if (notButton) {
    return (
      <span className={classes}>
        <span>{text}</span>

        {clickable && (
          <button
            className="remove-filter btn btn-link-blue"
            onClick={variantOfAction.removeCategoryId}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-trash"
            >
              <path
                d="M2.99976 5.6665H4.4442H15.9998"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.56717 5.8V4.4C6.56717 4.0287 6.72164 3.6726 6.9966 3.41005C7.27156 3.1475 7.64448 3 8.03333 3H10.9657C11.3545 3 11.7274 3.1475 12.0024 3.41005C12.2774 3.6726 12.4318 4.0287 12.4318 4.4V5.8M14.6311 5.8V15.6C14.6311 15.9713 14.4766 16.3274 14.2016 16.5899C13.9267 16.8525 13.5538 17 13.1649 17H5.83409C5.44523 17 5.07231 16.8525 4.79735 16.5899C4.52239 16.3274 4.36792 15.9713 4.36792 15.6V5.8H14.6311Z"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.78906 9V13.6667"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.2102 9V13.6667"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }

  return (
    <button onClick={() => onClick(id)} className={classes} aria-label={text}>
      <span>{text}</span>
    </button>
  );
}

const mapStateToProps = (state) => ({ reducerAPI: selectorReducerApi(state) });

const mapDispatchToProps = {
  addProduct,
  getNextProducts,
  getProducts,
  getProductsByCategoryId,
  removeAllProducts,
  removeCategoryId,
  removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Btn);
