import React from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { url } from "../constant";
import "./CardCss.css";

class Card extends React.Component {
  state = {
    flipped: true
  };

  // flip = () => {
  //   this.setState({
  //     flipped: true
  //   });
  // };
  flip = event => {
    console.log("I was clicked, event.currentTarget:", event.currentTarget);
    console.log(event.currentTarget.dataset.framework);
    var element = event.currentTarget;

    if (this.state.flipped) {
      element.style.transform = "rotateY(180deg)";
    }
    // if (element.className === "memory-card") {
    //   if (element.style.transform == "rotateY(180deg)") {
    //     element.style.transform = "rotateY(0deg)";
    //   } else {
    //     element.style.transform = "rotateY(180deg)";
    //   }
    // }
  };

  handleClick = async () => {
    const { user } = this.props;
    const { jwt } = user;
    const response = await superagent.put(`${url}/card`).set({
      authorization: `Bearer ${jwt}`
    });
    console.log("response test:", response);
  };

  render() {
    // let isFlipped = this.state.flipped;
    // console.log("what is local state?", this.state);
    return (
      <div className="game-container">
        <div className="memory-game">
          <div
            className="memory-card"
            data-framework="green-card"
            onClick={event => this.flip(event)}
          >
            <img
              alt=""
              className="front-face"
              src="https://www.dev-metal.com/wp-content/uploads/2014/01/github-logo-octocat-1-704x605.jpg"
            />
            <img
              alt=""
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            className="memory-card"
            data-framework="green-card"
            onClick={event => this.flip(event)}
          >
            <img
              alt=""
              className="front-face"
              src="https://www.dev-metal.com/wp-content/uploads/2014/01/github-logo-octocat-1-704x605.jpg"
            />
            <img
              alt=""
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            className="memory-card"
            data-framework="yellow-card"
            onClick={event => this.flip(event)}
          >
            <img
              alt=""
              className="front-face"
              src="https://spicesncurry.com/image/233894-full_oktobercat-github-octocat-transparent-png-896x896-free.png"
            />
            <img
              alt=""
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
          <div
            className="memory-card"
            data-framework="yellow-card"
            onClick={event => this.flip(event)}
          >
            <img
              alt=""
              className="front-face"
              src="https://spicesncurry.com/image/233894-full_oktobercat-github-octocat-transparent-png-896x896-free.png"
            />
            <img
              alt=""
              className="back-face"
              src="https://www.akinfurniture.com/wp-content/uploads/2017/10/62658_Ink-2.jpg"
            />
          </div>
        </div>
      </div>
      //   <div onClick={this.flip} className="flip-card-container">
      //     {isFlipped ? (
      //       <div className="flip-card-back">
      //         <img
      //           src="https://image.flaticon.com/icons/png/512/9/9310.png"
      //           alt="Avatar"
      //           className="image"
      //         ></img>
      //       </div>
      //     ) : (
      //       <div className="flip-card-front"></div>
      //     )}
      //   </div>

      //   <div>
      //     <img
      //       className="card"
      //       onClick={this.handleClick}
      //       width="150px"
      //       src="https://www.osp.osaka-info.jp/upload/facility_shop/149/20180324_111149_481228.jpg"
      //     />
      //   </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, room: state.room };
};

export default connect(mapStateToProps)(Card);
