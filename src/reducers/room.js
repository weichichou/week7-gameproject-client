import { ADDEDROOM } from "../action/room";
import { ROOMS_FETCHED } from "../action/room";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADDEDROOM:
      return [action.payload,
      ...state];
    case ROOMS_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
