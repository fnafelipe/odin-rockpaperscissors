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

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    roundWinner.textContent = "You won!, Rock beats Scissors.";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    roundWinner.textContent = "You won!, Scissors beats Paper.";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    roundWinner.textContent = "You won!, Paper beats Rock.";
  } else if (humanChoice == computerChoice) {
    roundWinner.textContent =
      "You draw!, try picking a diferent one next round.";
  } else {
    computerScore++;
    roundWinner.textContent = "You lost!, try again next round.";
  }

  humanScoreOut.textContent = `Human: ${humanScore}`;
  computerScoreOut.textContent = `Computer: ${computerScore}`;

  if (humanScore === 5) {
    gameWinner.textContent = "You won the game!";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    gameWinner.textContent = "You lost the game!";
    humanScore = 0;
    computerScore = 0;
  }
}

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

const humanScoreOut = document.getElementById("human-score");
const computerScoreOut = document.getElementById("computer-score");
const roundWinner = document.getElementById("round-winner");
const gameWinner = document.getElementById("game-winner");
