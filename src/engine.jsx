import _ from 'lodash';

import { getRandomArbitrary } from './utils';

const moveLeft = (oldSnakeCoordinates, tableSize, oldFoodCoordinates) => {
  const snakeCoordinates = oldSnakeCoordinates.slice();

  const newHeadCoordinates = snakeCoordinates[0].slice();
  newHeadCoordinates[1]--;

  if (newHeadCoordinates[1] < 0) {
    return false;
  }

  if (_.isEqual(newHeadCoordinates, oldFoodCoordinates)) {
    // eat an apple
    snakeCoordinates.unshift(newHeadCoordinates);

    return {
      snakeCoordinates: snakeCoordinates,
      foodCoordinates: [getRandomArbitrary(0, tableSize-1), getRandomArbitrary(0, tableSize-1)]
    };
  }

  const newCoordinates = snakeCoordinates.map((oldCoordinates, index) => {
    if (index == 0) {
      // Head
      return newHeadCoordinates;
    }
    return snakeCoordinates[index - 1];
  });
  return {
    snakeCoordinates: newCoordinates,
    foodCoordinates: oldFoodCoordinates.slice()
  };
};

const moveRight = (oldSnakeCoordinates, tableSize, oldFoodCoordinates) => {
  const snakeCoordinates = oldSnakeCoordinates.slice();

  const newHeadCoordinates = snakeCoordinates[0].slice();
  newHeadCoordinates[1]++;

  if (newHeadCoordinates[1] >= tableSize) {
    return false;
  }

  if (_.isEqual(newHeadCoordinates, oldFoodCoordinates)) {
    // eat an apple
    snakeCoordinates.unshift(newHeadCoordinates);

    return {
      snakeCoordinates: snakeCoordinates,
      foodCoordinates: [getRandomArbitrary(0, tableSize-1), getRandomArbitrary(0, tableSize-1)]
    };
  }

  const newCoordinates = snakeCoordinates.map((oldCoordinates, index) => {
    if (index == 0) {
      // Head
      return newHeadCoordinates;
    }
    return snakeCoordinates[index - 1];
  });
  return {
    snakeCoordinates: newCoordinates,
    foodCoordinates: oldFoodCoordinates.slice()
  };
};

const moveDown = (oldSnakeCoordinates, tableSize, oldFoodCoordinates) => {
  const snakeCoordinates = oldSnakeCoordinates.slice();

  const newHeadCoordinates = snakeCoordinates[0].slice();
  newHeadCoordinates[0]++;

  if (newHeadCoordinates[0] >= tableSize) {
    return false;
  }

  if (_.isEqual(newHeadCoordinates, oldFoodCoordinates)) {
    // eat an apple
    snakeCoordinates.unshift(newHeadCoordinates);

    return {
      snakeCoordinates: snakeCoordinates,
      foodCoordinates: [getRandomArbitrary(0, tableSize-1), getRandomArbitrary(0, tableSize-1)]
    };
  }

  const newCoordinates = snakeCoordinates.map((oldCoordinates, index) => {
    if (index == 0) {
      // Head
      return newHeadCoordinates;
    }
    return snakeCoordinates[index - 1];
  });
  return {
    snakeCoordinates: newCoordinates,
    foodCoordinates: oldFoodCoordinates.slice()
  };
};

const moveUp = (oldSnakeCoordinates, tableSize, oldFoodCoordinates) => {
  const snakeCoordinates = oldSnakeCoordinates.slice();

  const newHeadCoordinates = snakeCoordinates[0].slice();
  newHeadCoordinates[0]--;

  if (newHeadCoordinates[0] < 0) {
    return false;
  }

  if (_.isEqual(newHeadCoordinates, oldFoodCoordinates)) {
    // eat an apple
    snakeCoordinates.unshift(newHeadCoordinates);

    return {
      snakeCoordinates: snakeCoordinates,
      foodCoordinates: [getRandomArbitrary(0, tableSize-1), getRandomArbitrary(0, tableSize-1)]
    };
  }

  const newCoordinates = snakeCoordinates.map((oldCoordinates, index) => {
    if (index == 0) {
      // Head
      return newHeadCoordinates;
    }
    return snakeCoordinates[index - 1];
  });
  return {
    snakeCoordinates: newCoordinates,
    foodCoordinates: oldFoodCoordinates.slice()
  };
};

export {moveLeft, moveDown, moveUp, moveRight};
