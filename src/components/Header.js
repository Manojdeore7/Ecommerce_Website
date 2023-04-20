import "./Header.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import { Link } from "react-router-dom";
function Header(props) {
  let cacrtC = useContext(CartContext);
  let totalNumberOfItems = cacrtC.items.length;
  function fun() {
    props.show();
  }
  return (
    <div className="row Header ">
      <div className="col-1 offset-4 ">
        <Link className="ram" to="http://localhost:3000/Home">
          Home
        </Link>
      </div>
      <div className="col-1">
        <Link className="ram" to="http://localhost:3000/">
          Store
        </Link>
      </div>
      <div div className="col-1">
        <Link className="ram" to="http://localhost:3000/About">
          About
        </Link>
      </div>
      <div div className="col-1">
        <Link className="ram" to="http://localhost:3000/Contact">
          Contact us
        </Link>
      </div>

      <div className="col-auto offset-3">
        <button onClick={fun} className="btn btn-primary">
          Cart {totalNumberOfItems}
        </button>
      </div>
    </div>
  );
}
export default Header;
