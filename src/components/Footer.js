function Footer() {
  let styleC = {
    backgroundColor: "aqua",
    fontSize: "2rem",
    padding: "20px",
    textAlign: "center",
    color: "white",
    fontFamily: "inherit",
    position: "relative",
    top: "35px",
    alignItems: "center",
  };
  return (
    <div className="row" style={styleC}>
      <div className="col-auto offset-2" style={{ fontSize: "4rem" }}>
        The Generics
      </div>
      <div className="col-auto offset-4">
        <a href="#">facebook</a>
      </div>
      <div className="col-auto">
        <a href="#">YouTube</a>
      </div>
      <div className="col-auto">
        <a href="#">InstaGram</a>
      </div>
    </div>
  );
}
export default Footer;
