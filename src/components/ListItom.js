import "./ListItom.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";
import { AuthContext } from "../store/Cart-Context";
import { NavLink } from "react-router-dom";
function ListItom(props) {
  let linked = `http://localhost:3000/Details/:${props.id}`;
  let cartC = useContext(CartContext);
  let context = useContext(AuthContext);
  let funn = cartC.addItems;
  async function fun() {
    let v = false;
    let key = "";
    for (let i = 0; i < cartC.array.length; i++) {
      console.log(cartC.array[i].email + "|" + context.email);
      if (cartC.array[i].email == context.email) {
        v = true;
        key = cartC.array[i].key;

        break;
      }
    }

    if (!v) {
      let res = await fetch(
        `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData.json`,
        {
          method: "POST",
          body: JSON.stringify({
            email: context.email,
            totalAmount: cartC.totalAmount,
            Items: cartC.items,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
    } else {
      let res = await fetch(
        `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            email: context.email,
            totalAmount: cartC.totalAmount,
            Items: cartC.items,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
    }
    funn({
      id: props.id,
      price: props.price,
      title: props.title,
      image: props.image,
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
