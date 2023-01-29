import { SET_LIST } from "../constant";

export const listData = (data = [], action) => {
  switch (action.type) {
    case SET_LIST:
      return [...action.data];
    default:
      return data;
  }
};
