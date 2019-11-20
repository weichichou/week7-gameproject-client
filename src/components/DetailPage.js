import React from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import { url } from "../constant";
import { Link } from "react-router-dom";

class DetailPage extends React.Component {
  /* handleClick = () => {
        console.log('Got Clicked?')
        console.log('this.props.user.id', this.props.user.id)
        superagent
            .put(`${url}/join/${this.props.match.params.id}`)
            .send({userId: this.props.user.id})
            .then(res => console.log(res.body))
    } */

  handleClick = async () => {
    const { user, match } = this.props;
    // const jwt = this.props.jwt
    // const match = this.props
    const { name } = match.params;
    const { jwt } = user;

    // const {
    //     user: { jwt },
    //     match: { params: { name } }
    // } = this.props

    const response = await superagent.put(`${url}/join/${name}`).set({
      authorization: `Bearer ${jwt}`
    });

    console.log("response test:", response);
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
        users.map(user => <p key={user.id}>{user.email}</p>)
      ) : (
        <p>This room has no users</p>
      );
    return (
      <div>
        <h1>Room: {name}</h1>
        <p>Users are: {list}</p>
        <button onClick={this.handleClick}>Join</button>
        <div>
          <Link to={"/"}> Go back to homepage</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, rooms: state.room };
};

export default connect(mapStateToProps)(DetailPage);
