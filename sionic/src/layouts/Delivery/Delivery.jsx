import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Btn from "../../components/Btn/Btn";
import { changeInput, saveOrder } from "../../store/dispDelForm";
import { removeAllProducts } from "../../store/dispState";
import { getImages, getProduct } from "../../store/requests";
import {
  selectorReducerApi,
  selectorReducerCart,
  selectorReducerDelForm,
} from "../../store/selectors/selector";
import "./Delivery.scss";

function Delivery({
  date,
  time,
  address,
  name,
  tel,
  changeInput,
  reducerCart,
  reducerAPI,
  saveOrder,
  removeAllProducts,
}) {
  const { cartProducts } = reducerCart;

  const history = useHistory();
  const [inputType, setInputType] = useState({ date: "text", time: "text" });



  if (cartProducts.length === 0) {
    history.push("/");
  }

  const changeType = ({ target, target: { name, value }, type }) => {
    if (
      (value.length === 0 && type === "blur") ||
      (type === "focus" && target.type === "text")
    ) {
      setInputType((prevState) => ({
        ...prevState,
        [name]: prevState[name] === "text" ? name : "text",
      }));
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    changeInput({ name, value });
  };

  const productsInCart = reducerCart.cartProducts.map((productInCart) => ({
    product: reducerAPI.allProducts.find(
      (productData) => productData.id === productInCart.id
    ),
    count: productInCart.count,
  }));

  const subtotal = productsInCart.reduce(
    (sum, item) => sum + item.product.price || 123 * item.count,
    0
  );

  const handlerSubmit = (e) => {
    e.preventDefault();
    saveOrder(productsInCart);
    history.push("/history");
    removeAllProducts();
  };

  return (
    <section className="delivery">
      <header className="content__header">
        <h4>Доставка</h4>
      </header>
      <form onSubmit={handlerSubmit} className="delivery__form">
        <div className="delivery__form__part delivery__form__part_left">
          <p className="double-input">
            <label>Когда доставить?</label>
            <input
              onFocus={changeType}
              onBlur={changeType}
              className="without-border"
              type={inputType.date}
              name="date"
              placeholder="Выберите дату"
              value={date}
              onChange={handleChange}
              required
            />
            <input
              onFocus={changeType}
              onBlur={changeType}
              className="without-border"
              type={inputType.time}
              name="time"
              placeholder="Выберите время"
              value={time}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="address">Куда доставить?</label>

            <i className="icon icon_address" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 9.68421L16 4L10.3158 16L9.05263 10.9474L4 9.68421Z"
                  stroke="#727280"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Выберите адрес доставки"
              value={address}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="tel">Телефон</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={tel}
              onChange={handleChange}
              required
            />
          </p>
        </div>

        <div className="delivery__form__part delivery__form__part_right">
          <div className="pay-description">
            <p>
              Стоимость товаров: <span>{`${subtotal}₽`}</span>
            </p>
            <p>
              Стоимость доставки: <span>200₽</span>
            </p>

            <p className="pay-description__price">
              <span>
                <b>{`${subtotal + 200}₽`}</b>
              </span>
            </p>
          </div>
          <Btn classes="btn btn-blue" text="Сделать заказ" />
        </div>
      </form>
    </section>
  );
}

const mapStateToProps = (state) => ({
  data: selectorReducerDelForm(state),
  reducerCart: selectorReducerCart(state),
  reducerAPI: selectorReducerApi(state),
});

const mapDispatchToProps = {
  changeInput,
  saveOrder,
  removeAllProducts,
  getProduct,
  getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
