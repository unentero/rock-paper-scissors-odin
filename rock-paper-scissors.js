function getComputerChoice(choice){
   const randomNum = Math.floor(Math.random() * 3);
switch(randomNum){
    case 1: return choice = "rock"
    case 2: return choice = "paper"
    case 0: return choice = "scissors"
}
}
function getHumanChoice(choice){
    do {
        choice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    return choice;
}

function playRound(humanChoice,computerChoice){
let humanSelection = getHumanChoice(humanChoice)
let computerSelection = getComputerChoice(computerChoice)
if (humanSelection == computerSelection){
    console.log("It's a tie!")
    return winner = 0
} else if(
    (humanSelection == "scissors" && computerSelection == "paper") ||
    (humanSelection == "paper") && (computerSelection =="rock") || 
    (humanSelection == "rock") && (computerSelection == "scissors") 
){
    console.log("You won!")
    return winner = 1
} else {
    console.log("Computer won!")
    return winner = 2
}
}
function playGame(){
    let humanScore = 0
    let computerScore = 0
    let humanChoice
    let computerChoice
    for (var i = 0; i < 5 ; i++) {
        console.log("Score| human: " + humanScore + " | computer: " + computerScore + " |")
        winRound = playRound(humanChoice, computerChoice)      
        switch(winRound){
            case 2:
                computerScore += 1;
                break;
            case 1: 
                humanScore += 1;
                break;
            case 0:
                break;
        }
    }
    if (humanScore > computerScore){
        console.log("You won the game!")
    } else if (humanScore < computerScore){
        console.log("Computer won the game!")
    } else {
        console.log("It's a Tie!")
    }
    return "Game Over"
}
console.log(playGame())