import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';
import {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  changeDirection
} from '../actions';

import {
  LEFT,
  RIGHT,
  DOWN,
  UP
} from '../constants'

import Cell from './Cell';

import './Game.css';

class Game extends React.Component {
  generateTable = () => {
    const row = _.times(this.props.tableSize, () =>
      <Cell appleOn={false} snakeOn={false} />
    );
    const table = _.times(this.props.tableSize, () => row.slice());

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

  move = () => {
    switch(this.props.direction){
      case LEFT:
        return this.props.moveLeft();
      case RIGHT:
        return this.props.moveRight();
      case UP:
        return this.props.moveUp();
      case DOWN:
        return this.props.moveDown();
    }
  }
  handleKeyDown = (e) => {
    const left = 37,
          right = 39,
          up = 38,
          down = 40;

    switch (e.keyCode) {
      case(up):
        return this.props.changeDirection(UP)
      case(down):
        return this.props.changeDirection(DOWN)
      case(left):
        return this.props.changeDirection(LEFT)
      case(right):
        return this.props.changeDirection(RIGHT)
      default:
        return;
    }
  }

  componentDidMount() {
    setInterval(this.move, 300);
  }

  render() {
    let table = this.generateTable();
    table = this.renderSnake(table);
    table = this.renderFood(table);

    console.log(this.props.direction)
    return (
      <div className="game" onKeyDown={ this.handleKeyDown } tabIndex="0">
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
    foodCoordinates: state.foodCoordinates,
    tableSize: state.tableSize,
    direction: state.direction
  }),
  {
    moveLeft,
    moveRight,
    moveUp,
    moveDown,
    changeDirection
  }
)(Game);
