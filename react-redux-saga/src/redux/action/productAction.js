import {
  PRODUCT_LIST,
  SEARCH,
  LIST,
  SET_PRODUCT_LIST,
} from "../constant";
let filteredData = [];

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const list = () => {
  return {
    type: LIST,
  };
};

export const search = (query, originalData) => {
  if (query.length === 0) {
    return {
      type: SEARCH,
      data: originalData,
    };
  } else {
    query = query.toLowerCase();
    filteredData = originalData.filter((data) => {
      return (
        data.name.toLowerCase().match(new RegExp(query, "g")) ||
        data.color.toLowerCase().match(new RegExp(query, "g")) ||
        data.category.toLowerCase().match(new RegExp(query, "g")) ||
        data.brand.toLowerCase().match(new RegExp(query, "g"))
      );
    });
    console.log("=== filtered Data =", filteredData);
    return {
      type: SET_PRODUCT_LIST,
      data: filteredData,
    };
  }
};
