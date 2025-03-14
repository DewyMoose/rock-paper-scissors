let playRoundButton = document.querySelector(".play-round");

playRoundButton.addEventListener("click", playRound);

function playRound() {
  let resultText = document.querySelector(".result-text");
  resultText.textContent = "Game Start! Chose either Rock, Paper, or Scissor!";
  const rock = document.querySelector(".Rock");
  const paper = document.querySelector(".Paper");
  const scissors = document.querySelector(".Scissors");
  const playerChoice = document.querySelector(".player-choice-span");
  const computerChoice = document.querySelector(".computer-choice-span");
  const playerScore = document.querySelector(".player-score-span");
  const computerScore = document.querySelector(".computer-score-span");
  const gameCount = document.querySelector(".game-count-span");

  rock.addEventListener("click", PlayerChoseRock);

  function PlayerChoseRock() {
    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    let computerChoiceWord;
    console.log(computerChoiceNum);
    if (computerChoiceNum == 1) {
      computerChoiceWord = "Rock";
    } else if (computerChoiceNum == 2) {
      computerChoiceWord = "Paper";
    } else if (computerChoiceNum == 3) {
      computerChoiceWord = "Scissor";
    }
    computerChoice.textContent = computerChoiceWord;

    playerChoice.textContent = "Rock";
    console.log(playerChoice.textContent);

    if (computerChoiceWord == playerChoice.textContent) {
      resultText.textContent = "It's a tie!";
    } else if (
      computerChoiceWord == "Paper" &&
      playerChoice.textContent == "Rock"
    ) {
      resultText.textContent = "Computer Wins, Paper Beats Rock!";
    }
  }
}
