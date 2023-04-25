import "./App.css";
import Store from "./Store";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import DetailPage from "./components/DetailPage";
import AuthPage from "./Auth/AuthPage";
import { useContext } from "react";
import { AuthContext } from "./store/Cart-Context";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  let context = useContext(AuthContext);
  let login = context.isLoggedIn;
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Store />
        </Route>

        {login && (
          <Route path="/About">
            <About />
          </Route>
        )}
        {login && (
          <Route path="/Home">
            <Home />
          </Route>
        )}
        {login && (
          <Route path="/Contact">
            <ContactUs />
          </Route>
        )}
        {!login && (
          <Route path="/Auth">
            <AuthPage />
          </Route>
        )}
        {login && (
          <Route path="/Details/:PagId">
            <DetailPage />
          </Route>
        )}
        <Route path="*">
          <Redirect path="/Auth" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
