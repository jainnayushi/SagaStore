import { combineReducers } from "redux";
import changeCount from "./reducer";
import changeName from "./reducerName";

const reducer = combineReducers({ changeCount: changeCount, changeName });

export default reducer;
