import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { url } from "../constant";
import "./CardCss.css";

class Card extends React.Component {

  state = {
    flipped: true,
    chosen: [],
    message: ''
  };

  
  
    
    handleClick = (event) => {
        var element = event.currentTarget;

        if (this.state.flipped) {
          element.style.transform = "rotateY(180deg)";
  
        const chosenPic = event.target.alt.toString()

        const newChosen = [...this.state.chosen, chosenPic]
        
        this.setState({ chosen: newChosen })

        if(newChosen[1] && newChosen[1]===newChosen[0]){
            this.isMatch()
        }else if(newChosen[1] && newChosen[1]!==newChosen[0]){
            this.setState({message:'Sorry, you did not get any point', chosen:[]})   
        }
        }
    }



    isMatch = async() => {
        this.setState({message: 'Congrats! you get one point'})
            const {user} = this.props
            const {jwt} = user
            await superagent
            .put(`${url}/card`)
            .set({
                authorization: `Bearer ${jwt}`
            })
        this.setState({
            chosen: []
        })
    }
  


 

  render() {
    return (
      <div className="game-container">
        <h3>{this.state.message}</h3>
        <div className="memory-game">

          <div
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
