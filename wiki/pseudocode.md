FUNCTION getComputerChoice 
    random number from [0 to 1)
        if number < 0.33 return Rock
        else if number < 0.66 return Paper
        else return Scissor

FUNCTION playRound(playerSelection, computerSelection)
    make playerSelection case insensitive
    if playerSelection === computerSelection
        return 'draw, both player chose' playerSelection
    else if playerSelection === 'rock' AND computerSelection === 'paper'
        return 'You lose, paper beats rock!'
    else if playerSelection === 'rock' AND computerSelection === 'scissors'
        return 'You win, rock beats scissors!'
    else if playerSelection === 'paper' AND computerSelection === 'scissors'
        return 'You lose, scissors beats paper!'
    else if playerSelection === 'paper' AND computerSelection === 'rock'
        return 'You win, paper beats rock!'
    else if playerSelection === 'scissors' AND computerSelection === 'paper'
        return 'You win, scissors beats paper!'
    else if playerSelection === 'scissors' AND computerSelection === 'rock'
        return 'You lose, rock beats scissors!'
    else 
        return 'Wrong input!'
    
        