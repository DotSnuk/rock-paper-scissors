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
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return ("Draw! Both picked" + playerSelection);
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors!"
        }
    }
}
getComputerChoice();