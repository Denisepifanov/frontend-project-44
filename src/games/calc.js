import makeWelcome from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const ROUNDS_COUNT = 3;
const gameData = [];
for (let i = 0; i < ROUNDS_COUNT; i += 1) {
  const firstNumber = getRandomInRange(3, 30);
  const secondNumber = getRandomInRange(2, 20);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInRange(0, 2)];
  const questionCalc = `${firstNumber} ${sign} ${secondNumber}`;

  let resultCalc;
  switch (sign) {
    case '+':
      resultCalc = firstNumber + secondNumber;
      break;
    case '-':
      resultCalc = firstNumber - secondNumber;
      break;
    case '*':
      resultCalc = firstNumber * secondNumber;
      break;
    default:
      resultCalc = null;
  }
  gameData.push({ question: questionCalc, answer: String(resultCalc) });
}

export default () => {
  makeWelcome(gameData, gameDescription);
};
