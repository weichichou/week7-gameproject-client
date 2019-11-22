import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { url } from "../constant";
import "./CardCss.css";

class Card extends React.Component {
  state = {
    flipped: true,
    chosenAlt: [],
    chosenStyle: [],
    message: ""
  };

  handleClick = event => {
    if (this.state.flipped) {
      event.currentTarget.style.transform = "rotateY(180deg)";
      const newStyle = [...this.state.chosenStyle, event.currentTarget];
      this.setState({ chosenStyle: newStyle });

      const targetAlt = event.target.alt.toString();
      const newAlt = [...this.state.chosenAlt, targetAlt];
      this.setState({ chosenAlt: newAlt });

      if (newAlt[1] && newAlt[1] === newAlt[0]) {
        this.isMatch();
        this.removeCard(event);
      } else if (newAlt[1] && newAlt[1] !== newAlt[0]) {
        function turnBack() {
          newStyle.forEach(card => (card.style.transform = "rotateY(0deg)"));
        }
        setTimeout(turnBack, 1000);
        this.setState({
          message: "Sorry, you did not get any point",
          chosenAlt: []
        });
      }
    }
  };

  removeCard = async event => {
    console.log("EVENT target in remove card", event.target.alt);
    await superagent.put(`${url}/remove`).send({ alt: event.target.alt });
  };

  isMatch = async () => {
    this.setState({ message: "Congrats! you get one point" });
    const { user } = this.props;
    const { jwt } = user;
    await superagent.put(`${url}/getonepoint`).set({
      authorization: `Bearer ${jwt}`
    });
    this.setState({
      chosenAlt: []
    });
  };

  render() {
    const currentRoomid = this.props.roomid;
    console.log("parent pass ?", this.props.roomid);
    //const { name } = this.props.match.params;
    //const { room } = this.props;
    // console.log("name", name);
    console.log("all rooms", this.props.room);
    const currentRoom = this.props.room.find(room => room.id === currentRoomid);
    console.log("currentroom", currentRoom.cards);
    const cardList = currentRoom.cards;
    return (
      <div className="game-container">
        <h3>{this.state.message}</h3>
        <div className="memory-game">
          {/* {!this.state.} */}
          <div
            id="1"
            className="memory-card"
            data-framework="green-card"
            onClick={this.handleClick}
          >
            <img
              alt="cat"
              className="front-face"
              src="https://www.dev-metal.com/wp-content/uploads/2014/01/github-logo-octocat-1-704x605.jpg"
            />
            <img
              alt="cat"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            id="2"
            className="memory-card"
            data-framework="green-card"
            onClick={this.handleClick}
          >
            <img
              alt="cat"
              className="front-face"
              src="https://www.dev-metal.com/wp-content/uploads/2014/01/github-logo-octocat-1-704x605.jpg"
            />
            <img
              alt="cat"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            id="3"
            className="memory-card"
            data-framework="yellow-card"
            onClick={this.handleClick}
          >
            <img
              alt="dog"
              className="front-face"
              src="https://spicesncurry.com/image/233894-full_oktobercat-github-octocat-transparent-png-896x896-free.png"
            />
            <img
              alt="dog"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            id="4"
            className="memory-card"
            data-framework="yellow-card"
            onClick={this.handleClick}
          >
            <img
              alt="dog"
              className="front-face"
              src="https://spicesncurry.com/image/233894-full_oktobercat-github-octocat-transparent-png-896x896-free.png"
            />
            <img
              alt="dog"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            id="5"
            className="memory-card"
            data-framework="yellow-card"
            onClick={this.handleClick}
          >
            <img
              alt="duck"
              className="front-face"
              src="https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg"
            />
            <img
              alt="duck"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            id="6"
            className="memory-card"
            data-framework="yellow-card"
            onClick={this.handleClick}
          >
            <img
              alt="duck"
              className="front-face"
              src="https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg"
            />
            <img
              alt="duck"
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, room: state.room };
};

export default connect(mapStateToProps)(Card);
