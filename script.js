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
const logContainer = document.querySelector("#log");

const content = document.createElement("div");
content.classList.add("content");

function playRound(answer1, answer2) {
  if (answer1 === answer2) {
    content.textContent = "Its a tie! You both picked " + answer1;
    logContainer.appendChild(content);
  }
  if (
    (answer1 === "rock" && answer2 === "scissors") ||
    (answer1 === "scissors" && answer2 === "paper") ||
    (answer1 === "paper" && answer2 === "rock")
  ) {
    playerScore++;
    document.getElementById("playerResult").innerHTML = +playerScore;
    content.textContent = "You win! " + answer1 + " beats " + answer2;
    logContainer.appendChild(content);
  } else if (
    (answer2 === "rock" && answer1 === "scissors") ||
    (answer2 === "scissors" && answer1 === "paper") ||
    (answer2 === "paper" && answer1 === "rock")
  ) {
    computerScore++;
    document.getElementById("computerResult").innerHTML = +computerScore;
    content.textContent = "You lose! " + answer2 + " beats " + answer1;
    logContainer.appendChild(content);
  }
}
