import React, { Component } from "react";
import superagent from "superagent";
//import { Link } from 'react-router-dom'
//import { url } from '../constant'

export default class Room extends Component {
  state = {
    rooms: [],
    value: ""
  };

  stream = new EventSource(
    //`${url}/stream`
    "http://localhost:4000/stream"
  );

  componentDidMount = () => {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        this.setState({
          rooms: parsed
        });
        console.log("this.state.room", this.state.rooms);
      } else {
        const rooms = [...this.state.rooms, parsed];
        this.setState({
          rooms: rooms
        });
        console.log("this.state.rooms", this.state.rooms);
      }
    };
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const postUrl = "http://localhost:4000/room";

    superagent
      .post(postUrl)
      .send({ name: value })
      .then(response => {});
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const list = this.state.rooms.map((room, index) => {
      return <p key={index}>{room.name}</p>;
    });
    return (
      <div>
        <h1>Room List</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Room name:
              <input
                onChange={this.handleChange}
                type="text"
                name="roomName"
                value={this.state.value}
                required
              />
            </label>
            <button>Add room</button>
          </form>
        </div>
        {list}
      </div>
    );
  }
}
