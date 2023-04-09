import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Data from "./components/Data";
import Cart from "./Cart/Cart";
import { useState } from "react";
function App() {
  let [cart, setCart] = useState(false);
  let show = () => {
    setCart(true);
  };
  let hide = () => {
    setCart(false);
  };
  return (
    <div>
      <Header show={show} />

      {cart && <Cart />}
      <Data />
    </div>
  );
}

export default App;
