import ListItom from "./ListItom";
import "./Data.css";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Data() {
  return (
    <div className="row data">
      <div className="col-12 music">Music</div>
      <div className="row row-cols-2 ">
        {productsArr.map((e, i) => {
          return (
            <ListItom
              key={i}
              id={i}
              title={e.title}
              price={e.price}
              image={e.imageUrl}
              inedx={i}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Data;
