import CartContext from "./Cart-Context";
import { AuthContext } from "./Cart-Context";
import { useState } from "react";

function CartProvider(props) {
  let [totalAmount, setTotalAmount] = useState(0);
  let [array, setArray] = useState([]);
  let [email, setEmail] = useState("");
  let [Token, setToken] = useState(null);
  let [Id, setId] = useState("");
  let [key, setKey] = useState("");
  let userLoggedIn = !!Token;
  async function addToCartHandler(item) {
    let c = 0;
    let arr = array;
    let q = item.quantity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === item.id) {
        arr[i].quantity = arr[i].quantity + 1;
        q = arr[i].quantity;
        c++;
        let resp1 = await fetch(
          `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}/items.json`
        );
        let data = await resp1.json();
        let key1 = "";
        for (let kx in data) {
          if (data[kx].item.id === item.id) {
            key1 = kx;

            break;
          }
        }

        await fetch(
          `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}/items/${key1}/item.json`,
          {
            method: "PATCH",
            body: JSON.stringify({
              quantity: q,
            }),
            headers: {
              "Content-Type": "aplication/json",
            },
          }
        );
        break;
      }
    }

    if (c === 0) {
      arr.push(item);
      await fetch(
        `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}/items.json`,
        {
          method: "POST",
          body: JSON.stringify({
            item: item,
          }),
          headers: {
            "Content-Type": "aplication/json",
          },
        }
      );
    }

    let totalAmountM = totalAmount + item.price;
    await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          totalAmount: totalAmountM,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    );
    setArray(arr);
    setTotalAmount(totalAmountM);
  }
  async function removeFromCartHandler(id) {
    let arr = array.filter((e) => {
      return e.id !== id;
    });
    let totalAmountM = arr.reduce((sum, curr) => {
      return sum + curr.price * curr.quantity;
    }, 0);
    let resp1 = await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}/items.json`
    );

    let data = await resp1.json();
    let key1 = "";
    for (let kx in data) {
      if (data[kx].item.id === id) {
        key1 = kx;

        break;
      }
    }
    await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}/items/${key1}.json`,
      { method: "DELETE" }
    );

    await fetch(
      `https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData/${key}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          totalAmount: totalAmountM,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    );
    setArray(arr);
    setTotalAmount(totalAmountM);
  }
  async function getdata() {
    let resp = await fetch(
      "https://authenticate-app-70c08-default-rtdb.firebaseio.com/EcomData.json"
    );
    let data = await resp.json();

    for (let k in data) {
      if (data[k].uid === Id) {
        setKey(k);

        break;
      }
    }

    let x = [];

    for (let y in data[key].items) {
      x.push(data[key].items[y].item);
    }

    setArray(x);

    setTotalAmount(data[key].totalAmount);
  }

  let cart = {
    array: array,
    totalAmount: totalAmount,
    addItems: addToCartHandler,
    removeItems: removeFromCartHandler,
  };

  //auth

  let [signin, setSignin] = useState(false);

  let loggedInHandeler = (token, localId) => {
    setId(localId);
    setToken(token);
    getdata();
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
    key: key,
    Id: Id,
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
