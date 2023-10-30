import Item from "./Itom";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
function Cart(props) {
  let cartC = useContext(CartContext);
  let productsArr = cartC.array;
  let totalAmount = cartC.totalAmount;

  function fun() {
    props.hide();
  }

  return (
    <div className="container cart">
      <div className="row">
        <div className="col-10 head">Cart</div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={fun}>
            X
          </button>
        </div>
      </div>

      <table className="table   table-hover">
        <thead className="table-dark">
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quntity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {productsArr.map((e) => {
            return (
              <Item
                price={e.price}
                title={e.title}
                id={e.id}
                key={e.id}
                quantity={e.quantity}
              ></Item>
            );
          })}
        </tbody>
      </table>
      <div className="row">
        <div className="col-12">Total Amount:{totalAmount}</div>
      </div>
    </div>
  );
}
export default Cart;
