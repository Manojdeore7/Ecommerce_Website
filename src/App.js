import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
let router = createBrowserRouter([
  { path: "", element: [<Store />] },
  { path: "/About", element: [<Header />, <About />, <Footer />] },
  { path: "/Home", element: [<Header />, <Home />, <Footer />] },
  { path: "/Contact", element: [<Header />, <ContactUs />, <Footer />] },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
