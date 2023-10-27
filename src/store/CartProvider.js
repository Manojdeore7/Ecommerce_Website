import { useEffect, useReducer } from "react";
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
  } else if (action.type === "GetData") {
    return {
      items: action.items,
      totalAmount: action.total,
    };
  }
  return defaultState;
}

function CartProvider(props) {
  const [cartState, dispatch] = useReducer(fun, defaultState);
  let [array, setArray] = useState([]);
  let [email, setEmail] = useState("");
  let [Token, setToken] = useState(null);
  async function getdata() {
    let resp = await fetch(
      "https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData.json"
    );
    let data = await resp.json();
    let a = [];
    for (let key in data) {
      a.push({ key, ...data[key] });
    }

    for (let i = 0; i < a.length; i++) {
      console.log(email);
      if (a[i].email === email) {
        dispatch({
          type: "GetData",
          items: a[i].Items,
          total: a[i].totalAmount,
        });
      }
    }
    console.log(email);
    setArray(a);
  }

  function addToCartHandler(item) {
    dispatch({ type: "ADD", item: item });
  }
  function removeFromCartHandler(id) {
    dispatch({ type: "REMOVE", idm: id });
  }
  useEffect(() => {
    getdata();
  }, [Token, array]);
  let cart = {
    items: cartState.items,
    array: array,
    totalAmount: cartState.totalAmount,
    addItems: addToCartHandler,
    removeItems: removeFromCartHandler,
  };

  //auth

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
  let checkEmail = (e) => {
    setEmail(e);
  };
  let context = {
    token: Token,

    email: email,
    checkE: checkEmail,
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
