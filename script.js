const playerSelection = "rock";

let result;
let message;
let playerScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resDiv = document.querySelector(".results");

btnRock.addEventListener("click", function () {
  playRound("rock");
  showRoundResult();
  console.log(result);
  console.log(message);
});
btnPaper.addEventListener("click", function () {
  playRound("paper");
  showRoundResult();
  console.log(result);
  console.log(message);
});
btnScissors.addEventListener("click", function () {
  playRound("scissors");
  showRoundResult();
  console.log(result);
  console.log(message);
});

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    console.log(choice);
    choice = "rock";
    console.log(choice);
    return choice;
  } else if (choice < 0.66) {
    console.log(choice);
    choice = "paper";
    console.log(choice);
    return choice;
  } else {
    console.log(choice);
    choice = "scissors";
    console.log(choice);
    return choice;
  }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    result = 0;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = 2;
  } else {
    alert("wrong input!");
  }

  if (result === 0) {
    message = `Draw, both players chose ${playerSelection}`;
  } else if (result === 1) {
    message = `You lose, ${computerSelection} beats ${playerSelection} !`;
  } else if (result === 2) {
    message = `You win, ${playerSelection} beats ${computerSelection}!`;
  }

  return result;
}

/*function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Choose rock, paper or scissors"));
    console.log(result, message);
    if (result === 1) {
      computerScore += 1;
    } else if (result === 2) {
      playerScore += 1;
    }
  }

  if (playerScore === computerScore) {
    console.log("Draw!");
  } else if (playerScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }

  console.log(playerScore, computerScore);
  return [playerScore, computerScore];
}*/

function showRoundResult() {
  resDiv.textContent = message;
}
