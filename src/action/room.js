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

export const ROOMS_FETCHED = "ROOMS_FETCHED";

const roomsFetched = events => ({
  type: ROOMS_FETCHED,
  payload: events
});

export const loadRooms = () => (dispatch, getState) => {
  // when the state already contains rooms, we don't fetch them again
  if (getState().rooms) return;

  // a GET /rooms request
  superagent("http://localhost:4000/")
    .then(response => {
      // dispatch an ROOMS_FETCHED action that contains the events
      dispatch(roomsFetched(response.body));
    })
    .catch(console.error);
};
