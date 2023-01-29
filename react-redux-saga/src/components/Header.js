import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";
import { Link } from "react-router-dom";

const Header = (props) => {
  const result = useSelector((state) => state.cartData);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">Saga Store</h1>
      </Link>
      {props.activeSearch === "true" ? <Search /> : <div></div>}
      <Link to="/cart">
        <div className="cart-div">
          <span aria-label="Products Count">{result.length}</span>
          <img
          aria-label="Cart Img"
            src="https://th.bing.com/th/id/OIP.W7RIqUpb4s2JM86eZ3P5FQHaHa?pid=ImgDet&w=600&h=600&rs=1"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
