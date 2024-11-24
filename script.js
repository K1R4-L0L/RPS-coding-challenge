let playerScore = 0;
let computerScore = 0;

let playerChoiceValue = 0; // Store player's choice as a number
let computerChoiceValue = 0; // Store computer's choice as a number

// DOM elements to display choices and scores
let computerChoiceDisplay = document.querySelector(".comp-choice");
let playerChoiceDisplay = document.querySelector(".player-choice");
let playerScoreElement = document.querySelector(".score1");
let computerScoreElement = document.querySelector(".score2");

window.onload = () => {
    paperPick();
    scissorPick();
    rockPick();
};

// Function to generate computer's choice (randomly)
let generateComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    computerChoiceValue = randomNumber; // Store computer's choice
    console.log("Computer choice: ", randomNumber === 1 ? "rock" : randomNumber === 2 ? "paper" : "scissors");

    // Update the computer's choice display
    computerChoiceDisplay.textContent = randomNumber === 1 ? "Rock" : randomNumber === 2 ? "Paper" : "Scissors";
};

// Function to determine the outcome of the game
let determineOutcome = () => {
    if (playerChoiceValue === computerChoiceValue) {
        alert("It was a tie!");
    } else if (
        (playerChoiceValue === 1 && computerChoiceValue === 3) ||  // Rock beats Scissors
        (playerChoiceValue === 2 && computerChoiceValue === 1) ||  // Paper beats Rock
        (playerChoiceValue === 3 && computerChoiceValue === 2)     // Scissors beats Paper
    ) {
        playerScore += 1;
        playerScoreElement.textContent = "Player Score: " + playerScore;
        alert("You won!");
    } else {
        computerScore += 1;
        computerScoreElement.textContent = "Computer Score: " + computerScore;
        alert("You lost!");
    }
};

// Event listeners for picking rock, paper, or scissors
let rockPick = () => {
    let rock = document.querySelector(".rock");
    rock.addEventListener('click', () => {
        playerChoiceValue = 1; // Rock
        playerChoiceDisplay.textContent = "Rock"; // Show player's choice
        generateComputerChoice();
        determineOutcome();
    });
};

let paperPick = () => {
    let paper = document.querySelector(".paper");
    paper.addEventListener('click', () => {
        playerChoiceValue = 2; // Paper
        playerChoiceDisplay.textContent = "Paper"; // Show player's choice
        generateComputerChoice();
        determineOutcome();
    });
};

let scissorPick = () => {
    let scissor = document.querySelector(".scissor");
    scissor.addEventListener('click', () => {
        playerChoiceValue = 3; // Scissors
        playerChoiceDisplay.textContent = "Scissors"; // Show player's choice
        generateComputerChoice();
        determineOutcome();
    });
};