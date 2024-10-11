/* rock paper scissors game
 *
 * getcomputer choice function
 * must be random
 * assign values to rock paper scissors
 * use math.random to generate random numbers between 0-99 for computer choice
 * */

function getComputerChoice(rock, paper, scissors) {
  let run = Math.random() * 100;
  if (run <= 33) {
    return "rock";
  } else if (run <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
} 

function getHumanChoice(rock, paper, scissors) {
  let choice = prompt("rock paper scissors");
  if (choice.toLowerCase() === "rock") {
    return "rock";
  } else if (choice.toLowerCase() === "paper") {
    return "paper";
  } else if (choice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    alert("NO CHEATING!");
  }
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


/*function to play a round. human first then computer. determine winner. add 1 to score. alert win or loss*/
function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanSelection && computerSelection === "rock") {
    console.log("tie");
  }
}

playRound(humanSelection, computerSelection);
