import "./Home.css";
import Cart from "../Cart/Cart";
function Home(props) {
  return (
    <div className="container home">
      {props.cart && <Cart hide={props.hide} />}
      <h1>TOUR</h1>
      <table className="table table-dark">
        <tbody>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JULY 16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button className="btn btn-primary">BY the TICKETS</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Home;
