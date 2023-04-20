import { useRef } from "react";
import "./ContactUs.css";
function ContactUs() {
  let nameRef = useRef("");
  let emailRef = useRef("");
  let phoneRef = useRef("");
  function submitHandler(e) {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      PhoneNo: phoneRef.current.value,
    };
    async function ram() {
      await fetch(
        "https://ecommerce-d85c0-default-rtdb.firebaseio.com/Data.json",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
    }
    ram();
  }
  return (
    <div className="container contact">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="title"
            ref={nameRef}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="email-id">EmailAddress</label>
          <input
            rows="5"
            type="email"
            className="form-control"
            ref={emailRef}
          ></input>
        </div>
        <div>
          <label htmlFor="Phone">Phone no</label>
          <input
            type="number"
            id="date"
            ref={phoneRef}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
export default ContactUs;
