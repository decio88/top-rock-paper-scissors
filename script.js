const playerSelection = "rock";

let result;
let message;
let playerScore = 0;
let computerScore = 0;
let i = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resDiv = document.querySelector(".results");

btnRock.addEventListener("click", function () {
  playRound("rock");
  console.log(result);
  console.log(message);
});
btnPaper.addEventListener("click", function () {
  playRound("paper");
  console.log(result);
  console.log(message);
});
btnScissors.addEventListener("click", function () {
  playRound("scissors");
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

  ++i;

  if (playerSelection === computerSelection) {
    result = 0;
    message = `Draw, both players chose ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = 1;
    message = `You lose, ${computerSelection} beats ${playerSelection} !`;
    computerScore += 1;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = 2;
    message = `You win, ${playerSelection} beats ${computerSelection}!`;
    playerScore += 1;
  }

  showGameScore();
  showRoundResult(message);
  checkEndGame();
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

  

  console.log(playerScore, computerScore);
  return [playerScore, computerScore];
}*/

function showRoundResult(text) {
  let para = document.createElement("p");
  para.classList.add("roundResult");
  para.textContent = `Round ${i}: ` + text;
  resDiv.appendChild(para);
}

function showGameScore() {
  document.querySelector("#computerScore").textContent = computerScore;
  document.querySelector("#playerScore").textContent = playerScore;
}

function checkEndGame() {
  if (i < 5) {
    return;
  } else if (i === 5) {
    let endGameRes = document.createElement("h1");
    if (playerScore === computerScore) {
      endGameRes.textContent = "Draw!";
    } else if (playerScore > computerScore) {
      endGameRes.textContent = "You win!";
    } else {
      endGameRes.textContent = "You lose!";
    }
    resDiv.appendChild(endGameRes);
  } else {
    resetGame();
  }
}

function resetGame() {
  while (resDiv.firstChild) {
    resDiv.removeChild(resDiv.firstChild);
  }

  playerScore = 0;
  computerScore = 0;
  i = 0;
  showGameScore();
}
