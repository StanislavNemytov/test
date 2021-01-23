import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Aside, Cart, Content, Footer, Header } from "./layouts";

function App() {
  return (
    <Router>
      <div className="container">
        <Aside />
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
      <Footer />
    </Router>
  );
}

export default App;
