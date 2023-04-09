import "./Header.css";

function Header(props) {
  function fun() {
    props.show();
  }
  return (
    <div className="row Header">
      <div className="col-4"></div>
      <div className="col-2">
        <a>Home</a>
      </div>
      <div className="col-2">
        <a>Store</a>
      </div>
      <div className="col-2">
        <a>About</a>
      </div>

      <div className="col-2">
        <button onClick={fun}>Cart 0</button>
      </div>
    </div>
  );
}
export default Header;
