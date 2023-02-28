// eslint-disable-next-line import/named
import startGame from './index.js';
import { numRandom } from './numRandom.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (randomNumber) => (randomNumber % 2 === 0 ? 'yes' : 'no');
const GAMES_COUNT = 3;
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const randomNumber = numRandom(3, 111);
  arrGame.push({ question: randomNumber, answer: isEven(randomNumber) });
}

export default () => {
  startGame(arrGame, gameDescription);
};
