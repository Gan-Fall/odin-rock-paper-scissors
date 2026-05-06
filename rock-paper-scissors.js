function capitalize( str ) {
    str = str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
    return str
}

function getComputerChoice() {
    let guess = Math.floor(Math.random() * 100) + 1; // Will return a number between 1-100
    if (guess > 66) {

        return "scissors"

    } else if (guess < 33) {

        return "rock"

    } else {

        return "paper"

    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {

        roundResult.textContent = `Tie! Player and COM both chose ${capitalize(humanChoice)}.`;

    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock") {

        roundResult.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
        computerScore += 1;

    } else {
        // This logic relies heavily on playRound having a STRICT function
        // domain of these 3 strings: "rock", "paper", "scissors".
        // If user is winning with whacky inputs like "gun" this is why.
        // I chose to forego input sanitation or extra checks here as
        // the assignment doesn't really require it.
        roundResult.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
        humanScore += 1;
    }
}

function checkScore() {
    if (humanScore < 5 && computerScore < 5) return
    if (humanScore > computerScore) {

        gameStatus.textContent = `You win! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`;

    } else if (computerScore > humanScore) {

        gameStatus.textContent = `You lose! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`;

    } else {

        gameStatus.textContent = `Tie! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`;

    }
}

let humanScore = 0;
let computerScore = 0;

const gameStatus = document.querySelector("#game-status");
const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#scoreboard");
scoreDisplay.textContent = "Player: 0 COM: 0";

const btns = document.querySelector("#Choices");
btns.addEventListener("click", (event) => {
    const target = event.target;
    switch (target.id) {
        case 'Rock':
            playRound("rock", getComputerChoice());
            break;
        case 'Paper':
            playRound("paper", getComputerChoice());
            break;
        case 'Scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
    scoreDisplay.textContent = `Player: ${humanScore} COM: ${computerScore}`;
    checkScore();
});
