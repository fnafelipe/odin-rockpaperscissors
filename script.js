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

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(computerChoice);

playRound(humanChoice, computerChoice);
console.log(humanScore);
console.log(computerScore);
