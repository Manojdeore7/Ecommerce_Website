function Item(props) {
  return (
    <div className="row">
      <div className="col-4">{props.title} </div>
      <div className="col-4">{props.price}</div>
      <div className="col-4">1</div>
    </div>
  );
}
export default Item;
