import React, { Component } from "react";
//import superagent from "superagent";
import { connect } from "react-redux";
import { addroom } from "../action/room";
import { Link } from "react-router-dom";
// import { url } from '../constant'
import RoomList from "./RoomList";

class RoomListContainer extends Component {
  state = {
    //rooms: [],
    value: ""
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addroom({ name: this.state.value });
    this.setState({ value: "" });
  };

  // reset = () => {
  //   this.setState({ value: "" });
  // };

  render() {
    const { rooms } = this.props;
    if (!rooms) {
      return null;
    }

    const list = rooms.map(room => (
      <p key={room.name}>
        <Link to={`/rooms/${room.name}`}>{room.name}</Link>
      </p>
    ));

    const isLoggedIn = this.props.user;
    console.log("this.props.user", this.props.user);
    //const isLoggedIn = true;

    return (
      <div>
        {isLoggedIn ? (
          <RoomList
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            value={this.state.value}
            list={list}
          />
        ) : (
          "Please login to enter a game room"
        )}
        {/* <h1>Room List</h1>
        <div>
          <form onSubmit={props.handleSubmit}>
            <label>
              Room name:
              <input
                onChange={props.handleChange}
                type="text"
                name="roomName"
                value={props.value}
                required
              />
            </label>
            <button>Add room</button>
          </form>
        </div>
        {list} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rooms: state.room, user: state.user };
};

export default connect(mapStateToProps, { addroom })(RoomListContainer);
