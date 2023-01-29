import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";
import { saleData } from "./saleReducer";
import { listData } from "./listReducer";

export default combineReducers({
  cartData,
  productData,
  saleData,
  listData
});
