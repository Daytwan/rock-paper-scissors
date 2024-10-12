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



function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  let humanScore = 0;
  let computerScore = 0;
  playRound();
  playRound();
  function playRound(humanChoice, computerChoice) {
    if (humanSelection === "rock" && computerSelection === "rock") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("tie");
    } else if (humanSelection === "paper" && computerSelection === "paper") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("tie");
    } else if (humanSelection === "scissors" && computerSelection === "scissors") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("tie");
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You win! rock beats scissors");
      humanScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if (humanSelection === "rock" && computerSelection === "paper") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You lose! paper beats rock");
      computerScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You win! paper beats rock");
      humanScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You lose! scissors beats paper");
      computerScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You lose! rock beats scissors");
      computerScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      console.log(humanSelection);
      console.log(computerSelection);
      console.log("You win! scissors beats paper");
      humanScore++;
      console.log(`Your Score: ${humanScore}`);
      console.log(`Computer Score: ${computerScore}`);
    }
  }
}


playGame();
