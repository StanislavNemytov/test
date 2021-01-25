import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import {
  Aside,
  Cart,
  Content,
  Delivery,
  Footer,
  Header,
  OrdersHistory,
} from "./layouts";

function App() {
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
              <Cart />
            </Route>
            <Route path="/delivery" exact={true}>
              <Delivery />
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

export default App;
