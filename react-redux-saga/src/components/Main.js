import { addToCart, emptyCart, removeFromCart } from "../redux/action/action";
import { productList } from "../redux/action/productAction";
import { search } from "../redux/action/productAction";
import { list } from "../redux/action/productAction";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  const cartData = useSelector((state) => state.cartData);
  let originalData = useSelector((state) => state.productData);
  let apiData = useSelector((state) => state.listData);
  console.log("=== List =", originalData);

  // Find total amount
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  useEffect(() => {
    dispatch(productList());
    dispatch(list());
  }, []);

  return (
    <div className="body">
      <Header activeSearch={"true"} />
      <div>
        {50000 - amount > 0 && (
          <div className="msg">
            Add Items of {50000 - amount}/- to avail 50% Cashback
          </div>
        )}
      </div>
      <br />
      <button
        className="category"
        aria-label="Footwear Category"
        onClick={() => dispatch(search("rebook", apiData))}
      >
        Footwear
      </button>
      <button
        className="category"
        aria-label="Mobile Category"
        onClick={() => dispatch(search("mobile", apiData))}
      >
        Mobile
      </button>
      <button
        className="category"
        aria-label="Laptop Category"
        onClick={() => dispatch(search("laptop", apiData))}
      >
        Laptop
      </button>
      <button
        className="category"
        aria-label="Clothing Category"
        onClick={() => dispatch(search("clothing", apiData))}
      >
        Clothing
      </button>
      <h1>Exclusive Products</h1>
      <Link className="link" to="/sale">
        Browse Sale Products
      </Link>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <Link className="product_link" to={`/ProductDetails/${item.id}`}>
              <img src={item.photo} alt="" />
              <div>Name : {item.name} </div>
              <div>Category : {item.category} </div>
              <div>Brand : {item.brand} </div>
              <div>Price : {item.price} </div>
              <div>Color : {item.color} </div>
            </Link>
            <div>
              <button
                className="btn2"
                aria-label="Add to Cart"
                data-testid={item.id + item.name}
                onClick={() => dispatch(addToCart(item))}
              >
                Add to Cart
              </button>
              {cartData.find((obj) => obj.id === item.id) && (
                <button
                  className="btn2"
                  aria-label="Remove from Cart"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="btn"
          style={{ marginBottom: "20px auto" }}
          onClick={() => dispatch(emptyCart())}
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
}

export default Main;
