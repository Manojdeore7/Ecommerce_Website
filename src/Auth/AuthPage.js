import { useRef } from "react";
import { AuthContext } from "../store/Cart-Context";
import { useContext } from "react";
import classes from "./AuthForm.module.css";

const AuthPage = () => {
  let context = useContext(AuthContext);
  let emaill = useRef("");
  let passwordl = useRef("");
  let signIn = context.signIn;
  function submitHandler(e) {
    e.preventDefault();

    let enterEmail = emaill.current.value;
    let enterPassword = passwordl.current.value;
    let url;

    if (signIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD75n7Mrcm1q4ndl92CJNLqr61eLavjvhI";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterEmail,
        password: enterPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let mes = "AUTHENTICATION IS fAILED!";
          return res.json().then((data) => {
            mes = data.error.message;
            throw new Error(mes);
          });
        }
      })
      .then((data) => {
        context.login(data.idToken);

        let getToken = data.idToken;
        localStorage.setItem("Token", JSON.stringify(getToken));
      })
      .catch((er) => {
        alert(er.message);
      });
  }

  return (
    <section className={classes.auth}>
      {signIn && <h1>SignIn</h1>}
      {!signIn && <h1>SignUp</h1>}

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter Email</label>
          <input type="email" id="email" ref={emaill} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" ref={passwordl} />
        </div>
        {!signIn && (
          <div className={classes.control}>
            <label htmlFor="password">Confirmed Password</label>
            <input type="password" id="password" />
          </div>
        )}
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
