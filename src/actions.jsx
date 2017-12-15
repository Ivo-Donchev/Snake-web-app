const EDIT_NAME = 'EDIT_NAME';
const INCREMENT_SCORE = 'INCREMENT_SCORE';
const SHOW_GAME = 'SHOW_GAME';

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


export {
  EDIT_NAME,
  INCREMENT_SCORE,
  SHOW_GAME,
  editName,
  incrementScore,
  showGame
}
