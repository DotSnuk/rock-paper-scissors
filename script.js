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
getComputerChoice();