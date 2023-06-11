import makeWelcome from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const gameData = [];
const ROUNDS_COUNT = 3;
for (let i = 0; i < ROUNDS_COUNT; i += 1) {
  let firstNumber = getRandomInRange(30, 100);
  let secondNumber = getRandomInRange(15, 100);
  const questionGreatestDivisor = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  gameData.push({ question: questionGreatestDivisor, answer: String(firstNumber) });
}

export default () => {
  makeWelcome(gameData, gameDescription);
};
