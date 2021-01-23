import { connect } from "react-redux";
import { Btn, ProductCard } from "../../components";
import { addProduct } from "../../store/dispState";
import "./Cart.scss";

function Cart({ reducerAPI, reducerCart, addProduct }) {
  const productsInCart = reducerCart.cartProducts.map((productInCart) => ({
    product: reducerAPI.products.find(
      (productData) => productData.id === productInCart.id
    ),
    count: productInCart.count,
  }));
  console.log(
    "🚀 ~ file: Cart.jsx ~ line 13 ~ productsInCart ~ productsInCart",
    productsInCart
  );

  const subtotal = productsInCart.reduce(
    (sum, item) => sum + item.product.price,
    0
  );

  return (
    <section className="content">
      <header className="content__header">
        <h4>Корзина</h4>
        <Btn text="Отчистить корзину" classes="btn btn-link-pink" />
      </header>

      <div className="subtotal">
        <p>Стоимость корзины:</p>
        <p>
          <strong>{subtotal}₽</strong>
        </p>
      </div>

      <Btn text="Оформить" classes="proceed-ot-checkout btn btn-blue" />

      {productsInCart &&
        productsInCart.map((data) => (
          <ProductCard key={data.name} data={data} />
        ))}
    </section>
  );
}

const mapStateToProps = (state) => ({ ...state });

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
