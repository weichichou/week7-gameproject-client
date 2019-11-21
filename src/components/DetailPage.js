import React from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { url } from "../constant";
import Card from "../components/Card";
import { Link } from "react-router-dom";

class DetailPage extends React.Component {
  handleClick = async () => {
    const { rooms, user, match } = this.props;
    const { name } = match.params;
    const { jwt } = user;

    const response = await superagent.put(`${url}/join/${name}`).set({
      authorization: `Bearer ${jwt}`
    });
    const room = rooms.find(room => room.name === name)

    const updatecard = await superagent
    .put(`${url}/getroomid`)
    .send({roomId: room.id})

    /* const resetpresentvalue = await superagent
      .put(`${url}/resetpresent`)
      .send() */

    console.log("response test:", response);
    console.log('update card with roomId', updatecard);
    //console.log('reset present value', resetpresentvalue)
  };

  render() {
    // from demo
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    console.log("this.props", this.props);
    if (!this.props.rooms) {
      return "Loading...";
    }
    const room = rooms.find(room => room.name === name);
    if (!room) {
      return "This room does not exist";
    }
    const { users } = room;
    const list =
      users && users.length ? (
        users.map(user => (
          <p key={user.id}>
            {user.email}. Current score:{user.point}
          </p>
        ))
      ) : (
        <p>This room has no users</p>
      );
    console.log("room test", list);
    console.log("is this showing?");
    return (
      <div>
        <Link to={"/"}> Go back to homepage</Link>
        <h1>This is {name}</h1>
        <p>Users are {list}</p>
        <button onClick={this.handleClick}>Join</button>
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, rooms: state.room };
};

export default connect(mapStateToProps)(DetailPage);
