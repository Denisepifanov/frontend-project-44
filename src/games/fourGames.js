import startGame from './index.js';
import { numRandom } from './numRandom.js';

const GAMES_COUNT = 3;
const gameDescription = 'What number is missing in the progression?';
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const startNumber = numRandom(1, 100);
  const interval = numRandom(3, 8);
  const progression = [];
  for (let j = 0; progression.length < 9; j += interval) {
    progression.push(startNumber + j);
  }
  const missingPosition = numRandom(1, 8);
  const missingNumber = progression[missingPosition];
  const forGameProgression = progression;
  forGameProgression[missingPosition] = '..';
  arrGame.push({ question: String(forGameProgression.join(' ')), answer: String(missingNumber) });
}

export default () => {
  startGame(arrGame, gameDescription);
};
