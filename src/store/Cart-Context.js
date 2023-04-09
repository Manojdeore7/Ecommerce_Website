import { createContext } from "react";
let CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItems: () => {},
});
export default CartContext;
