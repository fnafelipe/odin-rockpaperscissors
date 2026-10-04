function getComputerChoice() {
  const NUMERO_SORTEADO = Math.floor(Math.random() * 3);
  switch (NUMERO_SORTEADO) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

console.log(getComputerChoice());
