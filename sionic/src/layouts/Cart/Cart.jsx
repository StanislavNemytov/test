import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import bag from "../../assets/img/bag.png";
import cart from "../../assets/img/cart.png";
import discount from "../../assets/img/discount.png";
import { Btn, ProductCard } from "../../components";
import { getImages, getProduct } from "../../store/requests";
import "./Cart.scss";

const images = { bag, discount, cart };

function Cart({ reducerAPI, reducerCart }) {
  const { allProducts } = reducerAPI;
  const { cartProducts, cartCount } = reducerCart;

  const productsInCart = cartProducts.map((productInCart) => ({
    product: allProducts.find(
      (productData) => productData.id === productInCart.id
    ),
    count: productInCart.count,
  }));

  const subtotal = productsInCart.reduce(
    (sum, item) => sum + item.product.price || 123 * item.count,
    0
  );

  return (
    <section className="cart">
      <header className="content__header">
        <h4>Корзина</h4>
        {cartCount > 0 && (
          <Btn
            variant="removeAll"
            text="Очистить корзину"
            classes="btn btn-link-pink"
          />
        )}
      </header>
      <div className="cart__content">
        <div className="buy-box">
          <div className="subtotal">
            {cartCount > 0 ? (
              <>
                <p>Стоимость корзины:</p>
                <p>
                  <strong>{subtotal}₽</strong>
                </p>
              </>
            ) : (
              <p>Корзина пуста</p>
            )}
          </div>
          {cartCount > 0 && (
            <NavLink to="delivery" className="proceed-ot-checkout btn btn-blue">
              Оформить
            </NavLink>
          )}
          <div className="buy-box__images">
            {["bag", "cart", "discount"].map((p) => (
              <img
                key={p}
                className={`buy-box__image buy-box__image_${p}`}
                src={images[p]}
                alt={p}
              />
            ))}
          </div>
        </div>

        {productsInCart.length > 0 && (
          <ul className="cart__products">
            {productsInCart.map((data) => (
              <ProductCard key={data.product.name} data={data} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = { getProduct, getImages };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
