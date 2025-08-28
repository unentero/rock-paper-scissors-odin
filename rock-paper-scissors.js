let humanScore
let computerScore
humanScore = 0
computerScore = 0
function getComputerChoice(){
   const randomNum = Math.floor(Math.random() * 3);
switch(randomNum){
    case 1: return 'Rock'
    case 2: return 'Paper'
    case 0: return 'Scissors'
}
}

function getHumanChoice(){
const choice = " "
prompt(choice)
return choice
}

console.log(getHumanChoice())