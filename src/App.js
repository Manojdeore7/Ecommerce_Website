import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

let router = createBrowserRouter([
  { path: "", element: [<Store />] },
  { path: "/About", element: [<Header />, <About />, <Footer />] },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
