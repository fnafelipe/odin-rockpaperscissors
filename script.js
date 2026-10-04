function getComputerChoice() {
  const sortedNumber = Math.floor(Math.random() * 3);
  switch (sortedNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Choose an option between: Rock, Paper or Scissors",
  );
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
