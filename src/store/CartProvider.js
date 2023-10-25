import { useReducer } from "react";
import CartContext from "./Cart-Context";
import { AuthContext } from "./Cart-Context";
import { useState } from "react";
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
      return e.id !== action.idm;
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

  //auth

  let [Token, setToken] = useState(null);
  let [signin, setSignin] = useState(false);
  let userLoggedIn = !!Token;
  let loggedInHandeler = (token) => {
    setToken(token);
  };
  let loggedOutHandeler = () => {
    setToken(null);
  };
  let checking = () => {
    setSignin(!signin);
  };
  let context = {
    token: Token,
    isLoggedIn: userLoggedIn,
    signIn: signin,
    check: checking,
    login: loggedInHandeler,
    logout: loggedOutHandeler,
  };

  return (
    <CartContext.Provider value={cart}>
      <AuthContext.Provider value={context}>
        {props.children}
      </AuthContext.Provider>
    </CartContext.Provider>
  );
}
export default CartProvider;
