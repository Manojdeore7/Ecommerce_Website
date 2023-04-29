import "../App.css";
import Data from "./Data";
import Cart from "../Cart/Cart";

function Store(props) {
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
    <>
      {props.cart && <Cart hide={props.hide} />}

      <div className="row" style={styleC}>
        <div className="col">The Generics</div>
      </div>
      <div className="container">
        <Data />
      </div>
    </>
  );
}

export default Store;
