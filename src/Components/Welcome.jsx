import React from 'react';
import { connect } from 'react-redux';
import { incrementScore, showGame } from '../actions';

import './Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <h1>Snake game</h1>
        <h2>
          Hello {this.props.name}
        </h2>
        <h3>
          Your current score is {this.props.score}
        </h3>
        <div
          className="start-game-button"
          onClick={this.props.showGame}
        >Start new game</div>
        <div
          className="increment-score-button"
          onClick={this.props.incrementScore}
        >Increment Score</div>
      </div>
    );
  }
}

export default connect((state) => ({name: state.name, score: state.score}), {incrementScore, showGame})(Welcome);
