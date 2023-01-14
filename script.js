console.log ('Hello World!');

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        console.log(choice);
        choice = 'Rock';
    } else if (choice < 0.66) {
        console.log(choice);
        choice = 'Paper';
    } else {
        console.log(choice);
        choice = 'Scissors';
    }
    console.log(choice);
}

