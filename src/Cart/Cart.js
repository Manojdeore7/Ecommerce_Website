import Item from "./Itom";

function Cart() {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <div
      className="container"
      style={{
        width: "50%",
        position: "fixed",
        zIndex: "10",
        backgroundColor: "aqua",
      }}
    >
      <div className="row">
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h1>Cart</h1>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">Item </div>
        <div className="col-4">Price</div>
        <div className="col-4">Quantity</div>
      </div>
      {productsArr.map((e) => {
        return <Item price={e.price} title={e.title}></Item>;
      })}
    </div>
  );
}
export default Cart;
