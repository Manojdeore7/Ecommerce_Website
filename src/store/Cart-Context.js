import react from "react";
let CartContext = react.createContext({
  array: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
});

let AuthContext = react.createContext({
  token: "",
  email: "",
  Id: "",
  key: "",
  checkE: (email) => {},
  isLoggedIn: false,
  signIn: false,
  check: () => {},
  login: (token) => {},
  logout: (token) => {},
});
export { AuthContext };
export default CartContext;
