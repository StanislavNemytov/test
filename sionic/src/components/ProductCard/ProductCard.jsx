import { connect } from "react-redux";
import { Btn } from "..";
import { removeAllProduct } from "../../store/dispState";
import { selectorReducerApi } from "../../store/selectors/selector";
import "./ProductCard.scss";

function ProductCard({ data, removeAllProduct, dataOfState }) {
  const { product, count } = data;
  const { name, id, price } = product;
  const { images } = dataOfState;
  const img = images[id];

  return (
    <li className="product-card">
      <div className="product-card__image">
        <img
          className="product-card__image_img"
          src={`https://test2.sionic.ru${img[0].image_url}`}
          alt={img[0].image_name}
        />
      </div>

      <p className="product-card__name" >{name}</p>
      <span className="product-card__quantity">
        <Btn variant="remove" id={id} text="-" classes="btn btn-link-menu-blue" />
        {count}
        <Btn variant="add" id={id} text="+" classes="btn btn-link-menu-blue" />
      </span>

      <span className="h5">{price} ₽</span>

      <button
        onClick={() => removeAllProduct(id)}
        className="removeAllProduct btn btn-link-dark"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.99976 5.6665H4.4442H15.9998"
            stroke="#AEC2EA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.56717 5.8V4.4C6.56717 4.0287 6.72164 3.6726 6.9966 3.41005C7.27156 3.1475 7.64448 3 8.03333 3H10.9657C11.3545 3 11.7274 3.1475 12.0024 3.41005C12.2774 3.6726 12.4318 4.0287 12.4318 4.4V5.8M14.6311 5.8V15.6C14.6311 15.9713 14.4766 16.3274 14.2016 16.5899C13.9267 16.8525 13.5538 17 13.1649 17H5.83409C5.44523 17 5.07231 16.8525 4.79735 16.5899C4.52239 16.3274 4.36792 15.9713 4.36792 15.6V5.8H14.6311Z"
            stroke="#AEC2EA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.78906 9V13.6667"
            stroke="#AEC2EA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2102 9V13.6667"
            stroke="#AEC2EA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}
const mapStateToProps = (state) => ({ dataOfState: selectorReducerApi(state) });

const mapDispatchToProps = {
  removeAllProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
