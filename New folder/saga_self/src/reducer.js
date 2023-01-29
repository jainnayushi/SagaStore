import { INC_COUNT, DEC_COUNT } from "./constants";
const initialState = 0;

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNT:
      return state + 1;
    case DEC_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default changeCount;
