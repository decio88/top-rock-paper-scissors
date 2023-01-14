console.log ('Hello World!');

const computerSelection = getComputerChoice();
const playerSelection = 'rock';

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        console.log(choice);
        choice = 'rock';
        console.log(choice);
        return choice;
    } else if (choice < 0.66) {
        console.log(choice);
        choice = 'paper';
        console.log(choice);
        return choice;
    } else {
        console.log(choice);
        choice = 'scissors';
        console.log(choice);
        return choice;
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    let message;
    console.log(playerSelection);

    if (playerSelection === computerSelection) {
        result = 0;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'paper' && computerSelection === 'scissors') || 
    (playerSelection === 'scissors' && computerSelection === 'rock')){
        result = 1;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = 2;
    } else {
        alert('wrong input!');
    }

    if (result === 0) {
        message = `Draw, both players chose ${playerSelection}`;
    } else if (result === 1) {
        message = `You lose, ${computerSelection} beats ${playerSelection} !`;
    } else if (result === 2) {
        message = `You win, ${playerSelection} beats ${computerSelection}!`;
    }

    console.log(message);

    return result;
}