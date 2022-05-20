//Rock Paper Scissors Game

//Computer random choice
function computerChoice() {
  let compChoice = ["rock", "paper", "scissors"];
  return compChoice[Math.floor(Math.random() * compChoice.length)];
}

// Player input choice & play round
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("rock", computerChoice());
  }
});

paper.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("paper", computerChoice());
  }
});

scissors.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    playRound("scissors", computerChoice());
  }
});

//Scores
let playerScore = 0;
document.getElementById("playerResult").innerHTML = +playerScore;

let computerScore = 0;
document.getElementById("computerResult").innerHTML = +computerScore;

//Play round, add score and print log
function playRound(answer1, answer2) {
  if (answer1 === answer2) {
    console.log("Its a tie! You both picked " + answer1);
  }
  if (
    (answer1 === "rock" && answer2 === "scissors") ||
    (answer1 === "scissors" && answer2 === "paper") ||
    (answer1 === "paper" && answer2 === "rock")
  ) {
    playerScore++;
    console.log("You win! " + answer1 + " beats " + answer2);
    document.getElementById("playerResult").innerHTML = +playerScore;
  } else if (
    (answer2 === "rock" && answer1 === "scissors") ||
    (answer2 === "scissors" && answer1 === "paper") ||
    (answer2 === "paper" && answer1 === "rock")
  ) {
    computerScore++;
    console.log("You lose! " + answer2 + " beats " + answer1);
    document.getElementById("computerResult").innerHTML = +computerScore;
  }
}
