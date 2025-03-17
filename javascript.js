let playRoundButton = document.querySelector(".play-round");
const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");
const playerChoice = document.querySelector(".player-choice-span");
const computerChoice = document.querySelector(".computer-choice-span");
const playerScoreText = document.querySelector(".player-score-span");
const computerScoreText = document.querySelector(".computer-score-span");
const gameCountText = document.querySelector(".game-count-span");
let resultText = document.querySelector(".result-text");
let computerChoiceWord = document.querySelector(".computer-choice-span");

let playerScoreCount = 0;
let computerScoreCount = 0;
let gameCountCount = 0;

playRoundButton.addEventListener("click", playRound);
rock.addEventListener("click", PlayerChoseRock);
paper.addEventListener("click", PlayerChosePaper);
scissor.addEventListener("click", PlayerChoseScissor);

function playRound() {
  resultText.textContent = "Game Start! Chose either Rock, Paper, or Scissor!";

  // calculating computer choice
  let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  if (computerChoiceNum == 1) {
    return (computerChoiceWord = "Rock");
  } else if (computerChoiceNum == 2) {
    return (computerChoiceWord = "Paper");
  } else if (computerChoiceNum == 3) {
    return (computerChoiceWord = "Scissor");
  }
}
// function if player choses rock
function PlayerChoseRock() {
  computerChoice.textContent = computerChoiceWord;
  gameCountCount += 1;

  playerChoice.textContent = "Rock";

  if (computerChoiceWord == playerChoice.textContent) {
    resultText.textContent = "It's a tie!";
  } else if (computerChoiceWord == "Paper") {
    resultText.textContent = "Computer Wins, Paper Beats Rock!";
    computerScoreCount += 1;
  } else if (computerChoiceWord == "Scissor") {
    resultText.textContent = "Player Wins, Rock Beats Scissor!";
    playerScoreCount += 1;
  }
  return updateScores();
}

function PlayerChosePaper() {
  computerChoice.textContent = computerChoiceWord;
  gameCountCount += 1;

  playerChoice.textContent = "Paper";

  if (computerChoiceWord == playerChoice.textContent) {
    resultText.textContent = "It's a tie!";
  } else if (computerChoiceWord == "Scissors") {
    resultText.textContent = "Computer Wins, Scissors Beats Paper!";
    computerScoreCount += 1;
  } else if (computerChoiceWord == "Rock") {
    resultText.textContent = "Player Wins, Paper Beats Rock!";
    playerScoreCount += 1;
  }
  return updateScores();
}

function PlayerChoseScissor() {
  computerChoice.textContent = computerChoiceWord;
  gameCountCount += 1;

  playerChoice.textContent = "Scissor";

  if (computerChoiceWord == playerChoice.textContent) {
    resultText.textContent = "It's a tie!";
  } else if (computerChoiceWord == "Rock") {
    resultText.textContent = "Computer Wins, Rock Beats Scissors!";
    computerScoreCount += 1;
  } else if (computerChoiceWord == "Paper") {
    resultText.textContent = "Player Wins, Scissors Beats Paper!";
    playerScoreCount += 1;
  }
  return updateScores();
}

function updateScores() {
  playerScoreText.textContent = playerScoreCount;
  computerScoreText.textContent = computerScoreCount;
  gameCountText.textContent = gameCountCount;
}
