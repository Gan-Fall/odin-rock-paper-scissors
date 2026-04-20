let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let guess = Math.floor(Math.random() * 100) + 1;
    if (guess > 66) {
        return "scissors"
    } else if (guess < 33) {
        return "rock"
    } else {
        return "paper"
    }
}

function getHumanChoice() {
    return prompt("Rock Paper Scissors! Choose your play:").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie! Player and COM both chose ${humanChoice}.`);
    } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    }
}
