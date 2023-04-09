function ListItom(props) {
  return (
    <div className="col-6 container">
      <h1>{props.title}</h1>
      <img src={props.image} />
      <h3>{props.price}</h3>
    </div>
  );
}
export default ListItom;
