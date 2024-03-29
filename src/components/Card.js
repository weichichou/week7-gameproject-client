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
    message: "",
    cards: []
  };

  componentDidMount() {
    const roomId = this.props.roomId;
    superagent
      .get(`${url}/cards`)
      .query({ roomId: roomId })
      .then(res => {
        console.log(res);
        this.setState({
          cards: res.body
        });
      });
  }

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
        setTimeout(turnBack, 500);
        this.setState({
          message: "Sorry, you did not get any point",
          chosenAlt: []
        });
      }
    }
  };

  removeCard = async event => {
    console.log("EVENT target in remove card", event.target.alt);
    await superagent
      .put(`${url}/remove`)
      .send({ alt: event.target.alt, roomId: this.props.roomId });
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

  altToImgurl = alt => {
    const toImgurl = {
      cat:
        "https://www.dev-metal.com/wp-content/uploads/2014/01/github-logo-octocat-1-704x605.jpg",
      dog:
        "https://spicesncurry.com/image/233894-full_oktobercat-github-octocat-transparent-png-896x896-free.png",
      duck:
        "https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg",
      pig: "https://octodex.github.com/images/scubatocat.png",
      bird: "https://octodex.github.com/images/saint_nictocat.jpg",
      fish: "https://octodex.github.com/images/dinotocat.png",
      sun: "https://octodex.github.com/images/spidertocat.png",
      moon: "https://octodex.github.com/images/waldocat.png"
    };

    return toImgurl[alt];
  };

  render() {
    const currentRoom = this.props.room.find(r => r.id === this.props.roomId);

    if (!currentRoom || !currentRoom.cards) {
      return <p>Loading...</p>;
    }
    const sortCards = currentRoom.cards.sort(function(a, b) {
      return a.id - b.id;
    });
    const gameIsOver = currentRoom.cards.every(card => card.present === false);

    console.log('Current players', currentRoom.users)
    let currentUsers = currentRoom.users
    let sortUsers = currentUsers.sort(function (a, b){
      return b.point - a.point
    })
    console.log('What is sortUsers?', sortUsers) 
    let winnerMsg =''

    if (sortUsers[1] && sortUsers[0].point !== sortUsers[1].point){
      let winner = sortUsers[0]
      console.log('Winner?', winner)
      winnerMsg = `Winner is ${winner.username}`
    }else{
      winnerMsg = 'It is a tie game'
    }

    return (
      <div className="game-container">
        <h2 className="message">
          {gameIsOver ? `Game is over, thanks for playing. ${winnerMsg}!` : this.state.message}
        </h2>
        
        <div className="memory-game">
          {sortCards.map(card => {
            return (
              <div
                id={card.id}
                className={`memory-card ${!card.present ? "hidden" : ""}`}
                
                data-framework="green-card"
                onClick={this.handleClick}
              >
                <img
                  alt={card.alt}
                  className="front-face"
                  src={this.altToImgurl(card.alt)}
                />
                <img
                  alt={card.alt}
                  className="back-face"
                  src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, room: state.room };
};

export default connect(mapStateToProps)(Card);
