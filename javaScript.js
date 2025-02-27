function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        choice = "rock";
    }
    else if (choice == 1){
        choice = "paper";
    }
    else if (choice == 2){
        choice = "scissors";
    }
    return choice.toLowerCase();
}


function userChoice() {
    let user = prompt("Please chose Rock, Paper, or Scissors");
    return user.toLowerCase();
}

function playRound(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        console.log("Its a tie!")
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log(`You win! ${userChoice} beats ${computerChoice}`)
        userScore ++
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        console.log(`You win! ${userChoice} beats ${computerChoice}`)
        userScore ++
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win! ${userChoice} beats ${computerChoice}`)
        userScore ++
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`)
        computerScore ++
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`)
        computerScore ++
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`)
        computerScore ++
    }
    else {
        console.log("Something went wrong");
    }
}

function playGame(){
    round = 5
    while (round > 0) {
        playRound(userChoice(), getComputerChoice())
        round --
    }
}

let computerScore = 0;
let userScore = 0;

playGame(); 