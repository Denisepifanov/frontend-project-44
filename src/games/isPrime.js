import makeWelcome from '../index.js';
import { getRandomInRange } from '../utils.js';

const GAMES_COUNT = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (checkingNumber) => {
  for (let j = 2; j < checkingNumber; j += 1) {
    if (checkingNumber % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const gameData = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const checkingNumber = getRandomInRange(2, 100);
  gameData.push({ question: checkingNumber, answer: isPrime(checkingNumber) });
}

export default () => {
  makeWelcome(gameData, gameDescription);
};
