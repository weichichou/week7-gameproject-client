import superagent from "superagent";
export const ADDEDROOM = "ADDEDROOM";

function addedroom(room) {
  return {
    type: ADDEDROOM,
    payload: room
  };
}

export const addroom = data => dispatch => {
  superagent
    .post("http://localhost:4000/room")
    .send(data)
    .then(res => {
      const action = addedroom(res.body);
      dispatch(action);
      console.log("add room res.body", res.body);
    })
    .catch(err => console.log(err));
};
