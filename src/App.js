import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

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
          <h1>Game project</h1>
          <SignupForm />
          <LoginForm />
          <Route path="/" exact component={RoomListContainer} />
          <Route path="/rooms/:name" component={DetailPage} />
        </div>
      </Provider>
    );
  }
}

//export default App;
export default connect()(App);
