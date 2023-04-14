import "./Header.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
function Header(props) {
  let cacrtC = useContext(CartContext);
  let totalNumberOfItems = cacrtC.items.length;
  function fun() {
    props.show();
  }
  return (
    <div className="row Header">
      <div className="col-1 offset-4">
        <a>Home</a>
      </div>
      <div className="col-1">
        <a href="http://localhost:3002/">Store</a>
      </div>
      <div className="col-1">
        <a href="http://localhost:3002/About">About</a>
      </div>

      <div className="col-auto offset-4">
        <button onClick={fun} className="btn btn-primary">
          Cart {totalNumberOfItems}
        </button>
      </div>
    </div>
  );
}
export default Header;
