import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

function fun(state, action) {
  if (action.type === "ADD") {
    let arr = state.items.concat(action.item);
    let totalAmountM = state.totalAmount + action.item.price;
    return {
      items: arr,
      totalAmount: totalAmountM,
    };
  } else if (action.type === "REMOVE") {
    let arr = state.items.filter((e) => {
      return e.id != action.idm;
    });
    let totalAmountM = arr.reduce((sum, curr) => {
      return sum + curr.price;
    }, 0);
    return {
      items: arr,
      totalAmount: totalAmountM,
    };
  }
  return defaultState;
}
function CartProvider(props) {
  const [cartState, dispatch] = useReducer(fun, defaultState);

  function addToCartHandler(item) {
    dispatch({ type: "ADD", item: item });
  }
  function removeFromCartHandler(id) {
    dispatch({ type: "REMOVE", idm: id });
  }
  let cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addToCartHandler,
    removeItems: removeFromCartHandler,
  };
  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
}
export default CartProvider;
