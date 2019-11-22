import React, { Component } from "react";
import { connect } from "react-redux";
import { addroom } from "../action/room";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";
import "./RoomList.css";

class RoomListContainer extends Component {
  state = {
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
    let isLoggedIn = false;
    if (this.props.user && this.props.user.jwt) {
      isLoggedIn = true;
    }

    return (
      <div className="room-list">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rooms: state.room, user: state.user };
};

export default connect(mapStateToProps, { addroom })(RoomListContainer);
