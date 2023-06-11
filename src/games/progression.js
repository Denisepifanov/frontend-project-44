import makeWelcome from '../index.js';
import { getRandomInRange } from '../utils.js';

const ROUNDS_COUNT = 3;
const gameDescription = 'What number is missing in the progression?';
const gameData = [];
for (let i = 0; i < ROUNDS_COUNT; i += 1) {
  const startNumber = getRandomInRange(1, 100);
  const interval = getRandomInRange(3, 8);
  const progression = [];
  for (let j = 0; progression.length < 9; j += interval) {
    progression.push(startNumber + j);
  }
  const missingPosition = getRandomInRange(1, 8);
  const missingNumber = progression[missingPosition];
  const forGameProgression = progression;
  forGameProgression[missingPosition] = '..';
  gameData.push({ question: String(forGameProgression.join(' ')), answer: String(missingNumber) });
}

export default () => {
  makeWelcome(gameData, gameDescription);
};