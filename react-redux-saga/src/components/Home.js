import { addToCart, removeFromCart } from "../redux/action/action";
import { saleList } from "../redux/action/saleAction";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.saleData);
  // Find total amount
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  useEffect(() => {
    dispatch(saleList());
  }, []);

  return (
    <div className="home">
      <Header activeSearch={"false"} />
      {50000 - amount > 0 && (
        <div className="msg">
          Add Items of {50000 - amount}/- to avail 50% Cashback
        </div>
      )}
      <h1>Flash Sale</h1>
      <Link className="link" to="/">
        Browse All Products
      </Link>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <Link className="product_link" to={`/ProductDetails/${item.id}`}>
              <img src={item.photo} alt="" />
              <div>Name : {item.name} </div>
              <div>Category : {item.category} </div>
              <div>Brand : {item.brand} </div>
              <div>Color : {item.color} </div>
              <div>Price : {item.price} </div>
            </Link>
            <div>
              <button
                className="btn2"
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              {cartData.find((obj) => obj.id === item.id) && (
                <button
                  className="btn2"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
