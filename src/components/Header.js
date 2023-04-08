import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div class="list">
        <div>
          <a>Home</a>
        </div>
        <div>
          <a>Store</a>
        </div>
        <div>
          <a>About</a>
        </div>
      </div>
      <div>
        <button>Cart 0</button>
      </div>
    </div>
  );
}
export default Header;
