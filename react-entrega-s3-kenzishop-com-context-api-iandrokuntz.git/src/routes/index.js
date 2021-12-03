import { Switch, Route } from "react-router-dom";
import CartPage from "../pages/CartPage"
import Home from "../pages/Home"

const Routes = () => {

  return(
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/cart">
        <CartPage/>
      </Route>
    </Switch>
  );
};

export default Routes;