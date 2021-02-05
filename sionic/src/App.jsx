import { useMemo } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import withCantRendering from "./components/withCantRendering/withCantRendering";
import {
  Aside,
  Cart,
  Content,
  Delivery,
  Footer,
  Header,
  OrdersHistory,
} from "./layouts";
import { getImages, getProduct } from "./store/requests";
import { setSavedData } from "./store/requests/request-cart";
import {
  selectorReducerApi,
  selectorReducerCart,
} from "./store/selectors/selector";

const CartWithCantRendering = withCantRendering(Cart);
const DeliveryWithCantRendering = withCantRendering(Delivery);

function App(props) {
  const { setSavedData } = props;

  useMemo(() => {
    setSavedData();
  }, [setSavedData]);

  return (
    <Router>
      <div className="container">
        <div className="content__base">
          <Header />
          <Switch>
            <Route path="/" exact={true}>
              <Content />
            </Route>
            <Route path="/cart" exact={true}>
              <CartWithCantRendering {...props} />
            </Route>
            <Route path="/delivery" exact={true}>
              <DeliveryWithCantRendering {...props} />
            </Route>
            <Route path="/history" exact={true}>
              <OrdersHistory />
            </Route>
          </Switch>
        </div>
        <Aside />
      </div>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: selectorReducerCart(state).cartProducts,
  allProducts: selectorReducerApi(state).allProducts,
});

const mapDispatchToProps = {
  getProduct,
  getImages,
  setSavedData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
