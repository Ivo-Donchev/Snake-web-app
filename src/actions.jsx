const EDIT_NAME = 'EDIT_NAME';
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const SHOW_GAME = 'SHOW_GAME';
const MOVE_LEFT = 'MOVE_LEFT';
const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_UP = 'MOVE_UP';
const MOVE_RIGHT = 'MOVE_RIGHT';
const CHANGE_DIRECTION = 'CHANGE_DIRECION';

const editName = (text) => ({
  type: EDIT_NAME,
  text
})

const incrementScore = () => ({
  type: INCREMENT_SCORE,
})

const showGame = () => ({
  type: SHOW_GAME,
})

const moveLeft = () => ({
  type: MOVE_LEFT
})

const moveDown = () => ({
  type: MOVE_DOWN
})

const moveUp = () => ({
  type: MOVE_UP
})


const moveRight = () => ({
  type: MOVE_RIGHT
})

const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction
})

export {
  EDIT_NAME,
  INCREMENT_SCORE,
  SHOW_GAME,
  MOVE_LEFT,
  MOVE_DOWN,
  MOVE_UP,
  MOVE_RIGHT,
  CHANGE_DIRECTION,
  editName,
  incrementScore,
  showGame,
  moveLeft,
  moveDown,
  moveUp,
  moveRight,
  changeDirection
}
