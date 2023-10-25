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
      <div className="col-auto offset-1" style={{ fontSize: "4rem" }}>
        The Generics
      </div>
      <div className="col-auto offset-4">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://facebook.com"
          title="Link for Go on Facebook"
        >
          facebook
        </a>
      </div>
      <div className="col-auto">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://YouTube.com"
          title="Link for Go on YouTube"
        >
          YouTube
        </a>
      </div>
      <div className="col-auto">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://InstaGram.com"
          title="Link for Go on Instagram"
          target="_parent"
        >
          InstaGram
        </a>
      </div>
    </div>
  );
}
export default Footer;
