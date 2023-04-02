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
    console.log(computerChoice);
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ("Draw! Both picked " + playerSelection);
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'scissors'){
            return "You lose! Scissors beats paper";
        } else {
            return "You win! Paper beats rock"
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper";
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));