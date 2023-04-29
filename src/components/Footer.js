function Footer() {
  let styleC = {
    backgroundColor: "aqua",
    fontSize: "2rem",
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontFamily: "inherit",
    position: "fixed",
    bottom: "0px",
    alignItems: "center",
    width: "110%",
  };
  return (
    <div className="row" style={styleC}>
      <div className="col-auto offset-2" style={{ fontSize: "4rem" }}>
        The Generics
      </div>
      <div className="col-auto offset-4">
        <a href="facebook.com">facebook</a>
      </div>
      <div className="col-auto">
        <a href="facebook.com">YouTube</a>
      </div>
      <div className="col-auto">
        <a href="facebook.com">InstaGram</a>
      </div>
    </div>
  );
}
export default Footer;
