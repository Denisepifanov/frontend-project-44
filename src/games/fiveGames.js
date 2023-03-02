import makeWelcome from '../index.js';
import { numRandom } from './numRandom.js';

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
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const checkingNumber = numRandom(2, 100);
  arrGame.push({ question: checkingNumber, answer: isPrime(checkingNumber) });
}

export default () => {
  makeWelcome(arrGame, gameDescription);
};
