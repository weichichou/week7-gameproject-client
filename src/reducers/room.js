//import { ADDEDROOM } from "../action/room";
//import { ROOMS_FETCHED } from "../action/room";

export default (state = null, action = {}) => {
  switch (action.type) {
    case 'ADDROOM':
      return [action.payload,
      ...state];
    case 'ROOMS':
      return action.payload;
    default:
      return state;
  }
};
