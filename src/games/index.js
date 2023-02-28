import readlineSync from 'readline-sync';

const GAMES_COUNT = 3;

const startGame = (arrGame, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < GAMES_COUNT; i += 1) {
    console.log(`Question: ${arrGame[i].question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = arrGame[i].answer;
    if (correctAnswer !== answerUser) {
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`;
      console.log(errorMessage);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
