import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';
import SignupFormContainer from './components/SignupFormContainer';
import LoginForm from './components/LoginForm'

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <div>
          <h1>Game project</h1>
          <SignupFormContainer />
          <LoginForm />
        </div>
      </Provider>
    )
  }
}

export default App;
