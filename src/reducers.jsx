import {
  EDIT_NAME,
  INCREMENT_SCORE,
  SHOW_GAME,
  MOVE_LEFT,
  MOVE_DOWN,
  MOVE_UP,
  MOVE_RIGHT,
  CHANGE_DIRECTION
} from './actions';

import {LEFT, RIGHT, UP, DOWN} from './constants';

import {moveLeft, moveDown, moveUp, moveRight} from './engine'

const initialState = {
  name: '',
  score: 0,
  showGame: false,
  snakeCoordinates: [[1, 2], [1, 3], [1, 4]],
  foodCoordinates: [4, 5],
  direction: RIGHT,
  tableSize: 32
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_NAME:
      console.log('Editting name...');
      return Object.assign({}, state, {name: action.text});
    case INCREMENT_SCORE:
      console.log('Incrementing score...');
      return Object.assign({}, state, {score: state.score + 1});
    case SHOW_GAME:
      console.log('Show game...');
      return Object.assign({}, state, {showGame: true});
    case MOVE_LEFT:
      return Object.assign({}, state, {...moveLeft(
        state.snakeCoordinates,
        state.tableSize,
        state.foodCoordinates
      ),
        direction: LEFT
      });

    case MOVE_DOWN:
      return Object.assign({}, state, {...moveDown(
        state.snakeCoordinates,
        state.tableSize,
        state.foodCoordinates
      ),
        direction: DOWN
      });


    case MOVE_UP:
      return Object.assign({}, state, {...moveUp(
        state.snakeCoordinates,
        state.tableSize,
        state.foodCoordinates
      ),
        direction: UP
      });


    case MOVE_RIGHT:
      return Object.assign({}, state, {...moveRight(
        state.snakeCoordinates,
        state.tableSize,
        state.foodCoordinates
      ),
        direction: RIGHT
      });

    case CHANGE_DIRECTION:
      return Object.assign({}, state, {direction: action.direction})

    default:
      return state;
  }
};

export default appReducer;
