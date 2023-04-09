import { useState } from "react";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
function Item(props) {
  let cartc = useContext(CartContext);
  function funn(e) {
    let idm = e.target.id;

    cartc.removeItems(idm);
  }
  return (
    <tr>
      <td>{props.title} </td>
      <td>{props.price}</td>
      <td>
        <input defaultValue="1"></input>
        <button className="btn btn-danger" onClick={funn} id={props.id}>
          Remove
        </button>
      </td>
    </tr>
  );
}
export default Item;
