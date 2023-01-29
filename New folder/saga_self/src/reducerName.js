import { DISPLAY } from "./constants";
let name_initial = "My Counter";

const changeName = (state = name_initial, action) => {
  switch (action.type) {
    case DISPLAY:
      console.log("here action", action);
      console.log("here action.name", action.name);
      return action.name;
    default:
      return state;
  }
};

export default changeName;
