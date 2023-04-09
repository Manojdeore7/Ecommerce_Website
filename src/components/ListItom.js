function ListItom(props) {
  return (
    <div className="col-6 container">
      <h1>{props.title}</h1>
      <img src={props.image} />
      <div style={{ display: "flex" }}>
        <h3>{props.price}</h3>
        <button className="btn btn-primary offset-2"> Add to Cart</button>
      </div>
    </div>
  );
}
export default ListItom;
