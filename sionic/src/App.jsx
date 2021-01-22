import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Aside, Content, Footer, Header } from "./layouts";

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
            <Content />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
