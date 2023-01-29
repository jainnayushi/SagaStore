import { takeEvery, put } from "redux-saga/effects";
import {
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
  SALE_LIST,
  SET_SALE_LIST,
  LIST,
  SET_LIST,
} from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products");
  // let data = yield fetch(
  //   "https://api.jsonbin.io/v3/b/6372435b65b57a31e6b73db3"
  // );
  data = yield data.json();
  // data = data.record.products;
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* getList() {
  let data = yield fetch("http://localhost:3500/products");
  // let data = yield fetch(
  //   "https://api.jsonbin.io/v3/b/6372435b65b57a31e6b73db3"
  // );
  data = yield data.json();
  // data = data.record.products;
  yield put({ type: SET_LIST, data });
}

// For sale
function* getSaleProducts() {
  let data = yield fetch("http://localhost:3500/products_sale");
  // let data = yield fetch(
  //   "https://api.jsonbin.io/v3/b/6372435b65b57a31e6b73db3"
  // );
  data = yield data.json();
  // data = data.record.products_sale;
  yield put({ type: SET_SALE_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SALE_LIST, getSaleProducts);
  yield takeEvery(LIST, getList);
}

export default productSaga;
