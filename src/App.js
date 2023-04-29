import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useContext, useState } from "react";
import Store from "./components/Store";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import DetailPage from "./components/DetailPage";
import AuthPage from "./Auth/AuthPage";
import CartContext, { AuthContext } from "./store/Cart-Context";
import { Redirect } from "react-router-dom";

function App() {
  let context = useContext(AuthContext);
  let token = localStorage.getItem("Token") || null;
  context.login(token);
  let login = context.isLoggedIn;
  setTimeout(() => {
    context.logout();
  }, 1000 * 60 * 5);
  let [cart, setCart] = useState(false);
  let show = () => {
    setCart(true);
  };
  let hide = () => {
    setCart(false);
  };
  return (
    <>
      <Header show={show} />
      <Switch>
        {login && (
          <Route path="/" exact>
            <Store hide={hide} cart={cart} />
          </Route>
        )}
        {login && (
          <Route path="/About">
            <About hide={hide} cart={cart} />
          </Route>
        )}
        {login && (
          <Route path="/Home">
            <Home hide={hide} cart={cart} />
          </Route>
        )}
        {login && (
          <Route path="/Contact">
            <ContactUs hide={hide} cart={cart} />
          </Route>
        )}
        {!login && (
          <Route path="/Auth">
            <AuthPage />
          </Route>
        )}
        {login && (
          <Route path="/Auth">
            <Redirect to="/" />
          </Route>
        )}
        {login && (
          <Route path="/Details/:PagId">
            <DetailPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/Auth" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
