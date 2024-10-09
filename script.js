/* rock paper scissors game
 *
 * getcomputer choice function
 * must be random
 * assign values to rock paper scissors
 * use math.random to generate random numbers between 0-99 for computer choice
 * if getcomputer <= 33 return rock
 * else if getcomputer <= 66 return paper
 * else 
 * return scissors */

function getComputerChoice() {
  let run = Math.random() * 100;
  if (run <= 33) {
    console.log("rock");
  } else if (run <= 66) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
} 

//getComputerChoice();

/* getHumanChoice function
 * prompt user for input "rock" "paper" "scissors" */

function getHumanChoice() {
  let choice = prompt("rock, paper, scissors", "good luck");
  console.log(choice);
}




humanScore = 0;
computerScore = 0;

//plays a round of the game. first asking human choice. then displaying computer choice. adds labels to both.
///function calls gethumanchoice function then calls getcomputerchoice function logs both results then procee
///-ds to log name of player. Game is always played Human first.
//
//

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {

}

