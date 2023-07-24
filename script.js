let computerChoice;
let playerScore = 0;
let computerScore = 0;

ComputerChoice();
console.log(`Computer: ${computerScore} Player: ${playerScore}`)
console.log(Game());
console.log(`Computer: ${computerScore} Player: ${playerScore}`)
console.log(Game());
console.log(`Computer: ${computerScore} Player: ${playerScore}`)
console.log(Game());
console.log(`Computer: ${computerScore} Player: ${playerScore}`)
console.log(Game());
console.log(`Computer: ${computerScore} Player: ${playerScore}`)
console.log(Game());
console.log(`Computer: ${computerScore} Player: ${playerScore}`)



function ComputerChoice() {
    const randNumber = Math.floor(Math.random() * 3 + 1)
    switch(randNumber){
        case 1:
            computerChoice = "Rock"            
        break;            
        case 2: 
            computerChoice =  "Paper"            
        break;
        case 3:
            computerChoice =  "Scissor"            
        break;
    }
}

function Game () {
    const playerChoice = prompt("Choose Rock, Paper or Scissor: ");
    playRound(computerChoice,playerChoice);
    if (playerScore > computerScore) {
        return "Player Wins";
    }
    else if (playerScore < computerScore){
        return "Computer Wins";
    }
    else{
        return "Nobody Wins";
    }
}

function playRound(computerChoice, playerChoice) {
    if (playerChoice == computerChoice){
        
        return "Draw";
    }
    else if (computerChoice == "Rock") {      
        
        return (playerChoice == "Paper")? playerScore++: computerScore++;
    }
    else if (computerChoice == "Paper") {
        
        return (playerChoice == "Scissor")? playerScore++: computerScore++;
    }
    else if (computerChoice == "Scissor") {
        
        return (playerChoice == "Rock")? playerScore++: computerScore++;
    }    
}

