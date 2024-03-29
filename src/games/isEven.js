// eslint-disable-next-line import/named
import makeWelcome from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');
const ROUNDS_COUNT = 3;
const gameData = [];
for (let i = 0; i < ROUNDS_COUNT; i += 1) {
  const randomNumber = getRandomInRange(3, 111);
  gameData.push({ question: randomNumber, answer: isEven(randomNumber) });
}

export default () => {
  makeWelcome(gameData, gameDescription);
};
