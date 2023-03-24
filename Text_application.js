const readline = require('readline');

const questions = [
  {
    question: "What is the name of USA president?",
    choices: ["Kenyatta", "Joe Biden", "Kagame"],
    answer: "Joe Biden"
  },
  {
    question: "What is the largest ocean in the world?",
    choices: ["Atlsntic ocean", "Indian Ocean", "pacific ocean"],
    answer: "pacific ocean"
  },
  {
    question: "What is the capital city of Rwanda?",
    choices: ["Kampala",  "Bujumbura", "Kigali"],
    answer: "Kigali"
  }
];

// initialize the score to 0
let score = 0;

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function to display a random question
function displayQuestion() {
  // get a random question from the array
  const index = Math.floor(Math.random() * questions.length);
  const question = questions[index];

  // display the question and choices
  console.log(question.question);
  question.choices.forEach((choice, i) => console.log(`${i + 1}. ${choice}`));

  // ask the user for their answer
  rl.question("Enter your answer (1-3): ", (userAnswer) => {
    // check if the user's answer is correct
    if (userAnswer === (question.choices.indexOf(question.answer) + 1).toString()) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect.");
    }

    // display the next question or final score
    if (score < questions.length) {
      displayQuestion();
    } else {
      console.log(`You got ${score} out of ${questions.length} correct.`);
      rl.close();
    }
  });
}

// start the quiz
displayQuestion();