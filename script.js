function computerChoice() 
{
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) 
{
    if (playerSelection === computerSelection) 
    {
        return ("It's a draw!");
      } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) 
      {
        playerScore++;
        return ("You win! Rock beats scissors");
      } else if (playerSelection === "Rock" && computerSelection === "Paper") 
      {
        computerScore++;
        return ("You lose! Paper beats rock");
      } else if (playerSelection === "Paper" && computerSelection === "Rock") 
      {
        playerScore++;
        return ("You win! Paper beats rock");
      } else if (playerSelection === "Paper" && computerSelection === "Scissors") 
      {
        computerScore++;
        return ("You lose! Scissors beat paper");
      } else if (playerSelection === "Scissors" && computerSelection === "Paper") 
      {
        playerScore++;
        return ("You win! Scissors beat paper");
      } else if (playerSelection === "Scissors" && computerSelection === "Rock") 
      {
        computerScore++;
        return ("You lose! Rock beats scissors");
      }
}

function Game()
{
    
    for (let i = 0; i < 5; i++) 
    {
        playerSelection = prompt("Rock, Paper or Scissors?: ");
        computerSelection = computerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore)
    {
        console.log("You win the battle");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lose the battle");
    }
    else 
    {   
        console.log("Stalemate!Rock");
    }    
}


let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;
Game();
console.log(`Player ${playerScore} Computer ${computerScore}`);

