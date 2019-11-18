import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Room from "./components/Room";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Game project</h1>
          <SignupForm />
          <LoginForm />
          <Room />
        </div>
      </Provider>
    );
  }
}

export default App;
