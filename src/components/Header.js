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
  let signIn = context.signIn;

  function fun() {
    props.show();
  }
  function fun1() {
    context.logout();
    localStorage.clear();
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

      <div div className="col-1 offset-5">
        {!login && !signIn && (
          <Link className="ram" to="/Auth">
            <button
              onClick={context.check}
              style={{
                background: "black",
                boxShadow: "0px 0px 0px transparent",
                position: "absolute",
                border: "0px solid transparent",
                textShadow: "10px  ",
                color: "white",
              }}
            >
              <div>If You have Acoount,Please SignIn!</div>
            </button>
          </Link>
        )}
        {!login && signIn && (
          <Link className="ram" to="/Auth">
            <button
              onClick={context.check}
              style={{
                background: "black",
                boxShadow: "0px 0px 0px transparent",
                position: "absolute",
                border: "0px solid transparent",
                textShadow: "10px ",
                color: "white",
              }}
            >
              If You haven't Acoount,Please SignUp!
            </button>
          </Link>
        )}
      </div>
      <div div className="col-1  ram">
        {login && (
          <button className="btn btn-primary" onClick={fun1}>
            logout
          </button>
        )}
      </div>
      {login && (
        <div className="col-auto ">
          <button onClick={fun} className="btn btn-primary">
            Cart {totalNumberOfItems}
          </button>
        </div>
      )}
    </div>
  );
}
export default Header;
