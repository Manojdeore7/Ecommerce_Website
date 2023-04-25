import react, { useState } from "react";
let CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
});

let AuthContext = react.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});
export { AuthContext };
export default CartContext;
