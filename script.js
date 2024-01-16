let rock = 1;
let paper = 2;
let scissors = 3;

let result = document.querySelector('#result');
let score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

function getComputerChoice(max) {
    return Math.floor(Math.random() * max) + 1;
}

function playRound(playerSelection) {
    if (gameEnded) {
        return;
    }

    let computerSelection = getComputerChoice(3);

    if (playerSelection === rock && computerSelection === 2) {
        result.textContent = "Match result : You Lose! Paper beats Rock";
    } else if (playerSelection === rock && computerSelection === 3) {
        result.textContent = "Match result : You Win! Rock beats Scissors";
    } else if (playerSelection === rock && computerSelection === 1) {
        result.textContent = "Match result : It's a Tie! Try again!";
    } else if (playerSelection === paper && computerSelection === 3) {
        result.textContent = "Match result : You Lose! Scissors beats Paper";
    } else if (playerSelection === paper && computerSelection === 1) {
        result.textContent = "Match result : You Win! Paper beats Rock";
    } else if (playerSelection === paper && computerSelection === 2) {
        result.textContent = "Match result : It's a Tie! Try again!";
    } else if (playerSelection === scissors && computerSelection === 1) {
        result.textContent = "Match result : You Lose! Rock beats Scissors";
    } else if (playerSelection === scissors && computerSelection === 2) {
        result.textContent = "Match result : You Win! Scissors beats Paper";
    } else if (playerSelection === scissors && computerSelection === 3) {
        result.textContent = "Match result : It's a Tie! Try again!";
    } else {
        result.textContent = "Something went wrong...";
    }
    
    updateScore();
}

function updateScore() {
    if (result.textContent.includes("You Win")) {
        playerScore++;
    } else if (result.textContent.includes("You Lose")) {
        computerScore++;
    }

    score.textContent = `Score : Player ${playerScore} - Computer ${computerScore}`;

    if (playerScore === 5) {
        result.textContent = "Congratulations! You won the game!";
        gameEnded = true;
    } else if (computerScore === 5) {
        result.textContent = "Sorry! Computer won the game. Try again!";
        gameEnded = true;
    }
}

let playerSelection = document.querySelector('.choices');
playerSelection.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'Rock' :
            playRound(rock);
            break;
        case 'Paper' :
            playRound(paper);
            break;
        case 'Scissors' :
            playRound(scissors);
            break;
        }
    });