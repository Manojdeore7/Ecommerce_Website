import "./Header.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import { AuthContext } from "../store/Cart-Context";
import { Link } from "react-router-dom";
function Header(props) {
  let cacrtC = useContext(CartContext);
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  let totalNumberOfItems = cacrtC.items.length;
  function fun() {
    props.show();
  }
  function fun1() {
    context.logout();
  }
  return (
    <div className="row Header ">
      <div className="col-1  ">
        {login && (
          <Link className="ram" to="/Home">
            Home
          </Link>
        )}
      </div>

      <div className="col-1">
        {login && (
          <Link className="ram" to="/">
            Store
          </Link>
        )}
      </div>

      <div div className="col-1">
        {login && (
          <Link className="ram" to="/About">
            About
          </Link>
        )}
      </div>

      <div div className="col-1">
        {login && (
          <Link className="ram" to="/Contact">
            Contact us
          </Link>
        )}
      </div>

      <div div className="col-1">
        {!login && (
          <Link className="ram" to="/Auth">
            Login
          </Link>
        )}
      </div>
      <div div className="col-1 ram">
        {login && (
          <button className="btn btn-primary" onClick={fun1}>
            logout
          </button>
        )}
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
