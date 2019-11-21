import React from "react";
//import CreateFormContainer from "./CreateFormContainer";

export default function List(props) {
  //const isLoggedIn = props.user;
  console.log("props", props);
  return (
    <div>
      <h1>Room List</h1>
      <div>
        <form onSubmit={props.handleSubmit}>
          <label>
            Room name:
            <input
              onChange={props.handleChange}
              //type="text"
              name="roomName"
              value={props.value}
              required
            />
          </label>
          <button>Add room</button>
        </form>
      </div>
      {props.list}
    </div>
  );
}
