import React, {Component} from 'react';
import Welcome from './Components/Welcome';
import Game from './Components/Game';

import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.showGame ? <Game /> : <Welcome />}
      </div>
    );
  }
}

export default connect(state => ({showGame: state.showGame}))(
  App
);
