import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Aside, Cart, Content, Footer, Header } from "./layouts";

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
          </Switch>
        </div>
        <Aside />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
