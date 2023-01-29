// Search
   <input
          type="text"
          onBlur={(event) => {
            return dispatch(productSearch(event.target.value, originalData));
          }}
          placeholder="Search Product"
        /> 

// -------------------------------------------------------------------------------------------------------
  
// saleAction.js

import { SALE_LIST, SALE_SEARCH } from "./constant";

export const saleList = () => {
  // console.warn("1");
  return {
    type: SALE_LIST,
  };
};

export const saleSearch = (query) => {
  console.warn("query in sale", query);
  return {
    type: SALE_SEARCH,
    query,
  };
};

//saleReducer.js
import { SET_SALE_LIST } from "./constant";

export const saleData = (data = [], action) => {
  switch (action.type) {
    case SET_SALE_LIST:
      // console.warn("SALE_LIST condition ", action);
      return [...action.data];
    default:
      return data;
  }
};

// saleSaga.js

import { takeEvery, put } from "redux-saga/effects";
import { SALE_LIST, SALE_SEARCH, SET_SALE_LIST } from "./constant";
import Main from "./components/Main";

function* getSaleProducts() {
  // console.warn("3");
  let data = yield fetch("http://localhost:3500/products_sale");
  data = yield data.json();
  yield put({ type: SET_SALE_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(
    `http://localhost:3500/products_sale?q=${data.query}`
  );
  result = yield result.json();
  // console.warn("action is called", result);
  yield put({ type: SET_SALE_LIST, data: result });
}

function* saleSaga() {
  // console.warn("2");
  yield takeEvery(SALE_LIST, getSaleProducts);
  yield takeEvery(SALE_SEARCH, searchProducts);
}

export default saleSaga;
// ------------------------------------------------------------------
<input
  type="text"
  onBlur={(event) => {
    return dispatch(productSearch(event.target.value, originalData));
  }}
  placeholder="Search Product"
/>;
{
  /* <input
          type="text"
          onChange={(event) => {
            // return dispatch(search(event.target.value, originalData));
            setEvent(event.target.value);
          }}
          placeholder="Type to Search Products"
        />
        <button
          className="searchBtn"
          onClick={()=>dispatch(search(event, originalData))}
        >Search</button> */
}


// Main.js
// -----------------------------------------------------------------------------------------------------------------
import { addToCart, emptyCart, removeFromCart } from "../redux/action/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/action/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  const cartData = useSelector((state) => state.cartData);

  // Find total amount
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      {50000 - amount > 0 && (
        <div className="msg">
          Add Items of {50000 - amount}/- to avail 50% Cashback
        </div>
      )}
      <h1>Exclusive Products</h1>
      <Link className="link" to="/">
        Browse Sale Products
      </Link>

      <div className="product-container">
        {data.map((item) => (
          <div key={item.id}>
            <Link className="product_link" to={`/ProductDetails/${item.id}`}>
              <div className="product-item">
                <img src={item.photo} alt="" />
                <div>Name : {item.name} </div>
                <div>Color : {item.color} </div>
                <div>Price : {item.price} </div>
                <div>Category : {item.category} </div>
                <div>Brand : {item.brand} </div>
              </div>
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

      <div>
        <button className="btn" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </button>
      </div>
    </div>
  );
}

export default Main;
