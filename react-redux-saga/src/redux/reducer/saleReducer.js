import { SET_SALE_LIST } from "../constant";

export const saleData = (data = [], action) => {
  switch (action.type) {
    case SET_SALE_LIST:
      return [...action.data];
    default:
      return data;
  }
};
