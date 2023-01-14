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
    
FUNCTION game using playRound to play a 5 round game and keeping the score
    for i 1 to 5
        increment i
        playRound
        set playersScore and computerScore variables based on round result (0 draw, 1 win pc, 2 win player)
        log the results after each round and at the end determine the winner