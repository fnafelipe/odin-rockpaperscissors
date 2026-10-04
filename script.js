function getComputerChoice() {
  let computerChoice;
  const sortedNumber = Math.floor(Math.random() * 3);
  switch (sortedNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Choose an option between: Rock, Paper or Scissors",
  ).toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    console.log("You won!, Rock beats Scissors.");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    console.log("You won!, Scissors beats Paper.");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    console.log("You won!, Paper beats Rock.");
  } else if (humanChoice == computerChoice) {
    console.log("You draw!, try picking a diferent one next round.");
  } else {
    computerScore++;
    console.log("You lost!, try again next round.");
  }
}

function playGame() {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore);
  console.log(computerScore);

  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore);
  console.log(computerScore);

  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore);
  console.log(computerScore);

  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore);
  console.log(computerScore);

  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore);
  console.log(computerScore);

  if (humanScore > computerScore) {
    console.log("You won the game!!!!!, Congratulations!!!!!!");
  } else if (humanScore == computerScore) {
    console.log("You draw the game!, try again!");
  } else {
    console.log("You lost the game!, i'm sorry, but feel free to try again!");
  }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

playGame();
