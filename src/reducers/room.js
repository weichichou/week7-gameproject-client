import { ADDEDROOM } from "../action/room";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADDEDROOM:
      return action.payload;
    default:
      return state;
  }
};
