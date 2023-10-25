import react from "react";
let CartContext = react.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
});

let AuthContext = react.createContext({
  token: "",
  isLoggedIn: false,
  signIn: false,
  check: () => {},
  login: (token) => {},
  logout: (token) => {},
});
export { AuthContext };
export default CartContext;
