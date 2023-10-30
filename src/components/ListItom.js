import "./ListItom.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import { AuthContext } from "../store/Cart-Context";
import { NavLink } from "react-router-dom";
function ListItom(props) {
  let linked = `http://localhost:3000/Details/:${props.id}`;
  let cartC = useContext(CartContext);
  let context = useContext(AuthContext);

  async function fun() {
    cartC.addItems({
      id: props.id,
      price: props.price,
      title: props.title,
      image: props.image,
      quantity: 1,
    });
  }
  return (
    <div className="col Itom">
      <h1>{props.title}</h1>
      <NavLink to={linked}>
        <img src={props.image} alt="" />
      </NavLink>

      <div>
        <h3 className="offset-3">{`$${props.price}`}</h3>
        <button className="btn btn-primary offset-3" onClick={fun}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ListItom;
