import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([{ path: "", element: <Store /> }]);
function App() {
  return (
    <RouterProvider router={router}>
      <Store />
    </RouterProvider>
  );
}

export default App;
