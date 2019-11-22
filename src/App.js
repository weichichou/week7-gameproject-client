import React from "react";
import store from "./store";
import { Provider } from "react-redux";

import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import RoomListContainer from "./components/RoomListContainer";
import { Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import { connect } from "react-redux";
import { url } from "./constant";

// global EventSource

class App extends React.Component {
  stream = new EventSource(`${url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const parsed = JSON.parse(data);

      this.props.dispatch(parsed);

      console.log("parsed test", parsed);
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          {/* <h1 className="title">MEMORY</h1> */}
          <Route path="/" exact component={SignupForm} />
          <Route path="/" exact component={LoginForm} />

          {/* <SignupForm /> */}
          {/* <LoginForm /> */}
          <Route path="/" exact component={RoomListContainer} />
          <Route path="/rooms/:name" component={DetailPage} />
        </div>
      </Provider>
    );
  }
}

//export default App;
export default connect()(App);
