//Rock Paper Scissors Game

//Computer random choice
function computerChoice() {
  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

//Player input choice
function playerChoice() {
  let choice = prompt("Pick Rock / Paper / Scissors");
  return choice.toLowerCase();
}

//Play round & keep score
let playerScore = 0;
let computerScore = 0;

function playRound(answer1, answer2) {
  if (answer1 === answer2) {
    return "Its a tie! You both picked " + answer1;
  }
  if (
    (answer1 == "rock" && answer2 == "scissors") ||
    (answer1 == "scissors" && answer2 == "paper") ||
    (answer1 == "paper" && answer2 == "rock")
  ) {
    playerScore++;
    return "You win! " + answer1 + " beats " + answer2;
  } else {
    computerScore++;
    return "You lose! " + answer2 + " beats " + answer1;
  }
}

//Repeat round until winner declared
function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    console.log(playRound(playerChoice(), computerChoice()));
    console.log(playerScore, computerScore);
  }
  if (playerScore == 5) {
    console.log("Player Wins! - Refresh to play again.");
  }
  if (computerScore == 5) {
    console.log("Computer Wins! - Refresh to play again.");
  }
}

playGame();
