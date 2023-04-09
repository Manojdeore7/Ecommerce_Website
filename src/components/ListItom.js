import "./ListItom.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
function ListItom(props) {
  let cartC = useContext(CartContext);
  function fun() {
    cartC.addItems({
      id: props.id,

      price: props.price,
      title: props.title,
      image: props.image,
    });
  }
  return (
    <div className="col Itom">
      <h1>{props.title}</h1>
      <img src={props.image} />
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
