const buttons = document.querySelectorAll('button');
buttons.forEach(b => b.addEventListener('click', event => {
    playRound(event.target.id, getComputerChoice());
})); //get id
let userWins = 0, computerWins = 0, draws = 0;
//game();

function getComputerChoice(){
    const rndNumber = Math.ceil(Math.random() * 3);
    let computerChoice;
    switch(rndNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    // Made functions for keeping score and return results.
    // 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        keepScore('draw', playerSelection, computerSelection);
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            keepScore('computerWins', playerSelection, computerSelection);
        } else {
            keepScore('userWins', playerSelection, computerSelection);
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            keepScore('computerWins', playerSelection, computerSelection);
        } else {
            keepScore('userWins', playerSelection, computerSelection);
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            keepScore('computerWins', playerSelection, computerSelection);
        } else {
            keepScore('userWins', playerSelection, computerSelection);
        }
    }
}

// function game(){
//     /* 
//     Play five rounds, Ask for user input, Display score
//     */
//     let userInput;
//     let count = 0;
//     for (let i = 0;i < 5;i++){
//         userInput = prompt("Pick between rock, paper, or scissors");
//         while (confirmInput(userInput) != true){
//             userInput = prompt("Pick between rock, paper, or scissors");
//         }
//         playRound(userInput, getComputerChoice());
//     }

// }

function confirmInput(userInput){
    userInput = userInput.toLowerCase();
    if ((userInput != 'rock') && (userInput != 'paper') && (userInput != 'scissors')){
        return false;
    } else {
        return true;
    }
}

function keepScore(str, user, computer){
    switch(str){
        case 'draw':
            draws++;
            console.log('Draw! You both picked ' + user + '.');
            logResults();
            break;
        case 'userWins':
            userWins++;
            console.log('You win! ' + user + ' beats ' + computer + '.');
            logResults();
            break;
        case 'computerWins':
            computerWins++;
            console.log('You lose! ' + computer + ' beats ' + user + '.');
            logResults();
            break;
    }

}

function logResults(){
    console.log('User wins: ' + userWins + '\n' + 
    'Computer Wins: ' + computerWins + '\n' +
    'Draws: ' + draws);
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));