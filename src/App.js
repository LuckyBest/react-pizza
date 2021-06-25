import "./scss/app.scss";
import { Header, Home, Cart } from "./Components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" render={() => <Home />} exact />
          <Route path="/cart" render={() => <Cart />} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
