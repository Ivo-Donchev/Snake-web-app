import {EDIT_NAME, INCREMENT_SCORE, SHOW_GAME} from './actions';

const initialState = {
  name: '',
  score: 0,
  showGame: false,
  snakeCoordinates: [[1, 2], [1, 3], [1, 4]],
  foodCoordinates: [4, 5]
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
    default:
      return state;
  }
};

export default appReducer;
