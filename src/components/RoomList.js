import React from "react";
//import CreateFormContainer from "./CreateFormContainer";

export default function List(props) {
  //const isLoggedIn = props.user;
  console.log("props", props);
  return (
    <div>
      {/* {isLoggedIn ? <CreateFormContainer /> : "please login to submit an image"}
      <h1>All images</h1>
      {props.images.map(image => (
        <div key={image.id}>
          <p>{image.title}</p>
          <img src={image.url} alt=""></img>
        </div>
      ))} */}
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
