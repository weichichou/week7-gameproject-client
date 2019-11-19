import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Room from "./components/Room";
import { Route } from 'react-router-dom';
import DetailPage from './components/DetailPage'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Game project</h1>
          <SignupForm />
          <LoginForm />
          <Route path ='/' exact component={Room} />
          <Route path='/rooms/:id' component={DetailPage} />
        </div>
      </Provider>
    );
  }
}

export default App;
