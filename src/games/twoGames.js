import makeWelcome from '../index.js';
import { numRandom } from './numRandom.js';

const gameDescription = 'What is the result of the expression?';
const GAMES_COUNT = 3;
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const firstNumber = numRandom(3, 30);
  const secondNumber = numRandom(2, 20);
  const signs = ['+', '-', '*'];
  const sign = signs[numRandom(0, 2)];
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
  arrGame.push({ question: questionCalc, answer: String(resultCalc) });
}

export default () => {
  makeWelcome(arrGame, gameDescription);
};
