import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Data from "./components/Data";
import Cart from "./Cart/Cart";
import { useState } from "react";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";

function Store() {
  let [cart, setCart] = useState(false);
  let show = () => {
    setCart(true);
  };
  let hide = () => {
    setCart(false);
  };
  let styleC = {
    backgroundColor: "gray",
    fontSize: "5rem",
    padding: "30px",
    textAlign: "center",
    color: "white",
    fontFamily: "inherit",
    position: "relative",
    top: "35px",
  };
  return (
    <CartProvider>
      {cart && <Cart hide={hide} />}
      <Header show={show} />
      <div className="row" style={styleC}>
        <div className="col">The Generics</div>
      </div>
      <div className="container">
        <Data />
      </div>
      <Footer />
    </CartProvider>
  );
}

export default Store;
