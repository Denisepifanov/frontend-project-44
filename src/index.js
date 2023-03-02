import readlineSync from 'readline-sync';

const GAMES_COUNT = 3;

const makeWelcome = (gameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < GAMES_COUNT; i += 1) {
    console.log(`Question: ${gameData[i].question}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = gameData[i].answer;
    if (correctAnswer !== answerUser) {
      console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default makeWelcome;
