import { INC_COUNT, DEC_COUNT, DISPLAY } from "./constants";

export const incCount = () => {
  //   console.log(number_data);
  return {
    type: INC_COUNT,
  };
};

export const decCount = () => {
  //   console.log(number_data);
  return {
    type: DEC_COUNT,
  };
};

export const display = (name) => {
  //   console.log(number_data);
  return {
    type: DISPLAY,
    name,
  };
};
