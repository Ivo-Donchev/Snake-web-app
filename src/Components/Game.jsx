import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {incrementScore} from '../actions';

import Cell from './Cell';

import './Game.css';

class Game extends React.Component {
  SIZE = 32;

  generateTable = () => {
    const row = _.times(this.SIZE, () =>
      <Cell appleOn={false} snakeOn={false} />
    );
    const table = _.times(this.SIZE, () => row.slice());

    return table;
  };

  renderSnake = oldTable => {
    const table = oldTable.slice();

    const {snakeCoordinates} = this.props;

    snakeCoordinates.forEach(coordinate => {
      const x = coordinate[0],
        y = coordinate[1];

      table[x][y] = <Cell appleOn={false} snakeOn={true} />;
    });

    console.log(table);
    return table;
  };

  renderFood = oldTable => {
    const table = oldTable.slice();
    const {foodCoordinates} = this.props;
    const x = foodCoordinates[0],
      y = foodCoordinates[1];

    table[x][y] = <Cell appleOn={true} snakeOn={false} />;

    return table;
  };

  render() {
    let table = this.generateTable();
    table = this.renderSnake(table);
    table = this.renderFood(table);

    return (
      <div className="game">
        <h1>Snake</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Score: {this.props.score}</h3>
        <div className="table">
          {table.map(row => row.map(cell => cell))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    name: state.name,
    score: state.score,
    showGame: state.showGame,
    snakeCoordinates: state.snakeCoordinates,
    foodCoordinates: state.foodCoordinates
  }),
  {incrementScore}
)(Game);
