import makeWelcome from '../index.js';
import { numRandom } from './numRandom.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const GAMES_COUNT = 3;
const gameData = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  let firstNumber = numRandom(30, 100);
  let secondNumber = numRandom(15, 100);
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
