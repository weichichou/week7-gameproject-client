import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <div>
          <h1>Game project</h1>
        </div>
      </Provider>
    )
  }
}

export default App;
