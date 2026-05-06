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

function getHumanChoice() {
    return prompt("Rock Paper Scissors! Choose your play:").toLowerCase()
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {

            console.log(`Tie! Player and COM both chose ${capitalize(humanChoice)}.`);

        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock") {

            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
            computerScore += 1;

        } else {
            // This logic relies heavily on playRound having a STRICT function
            // domain of these 3 strings: "rock", "paper", "scissors".
            // If user is winning with whacky inputs like "gun" this is why.
            // I chose to forego input sanitation or extra checks here as
            // the assignment doesn't really require it.
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
            humanScore += 1;
        }
    }

    if (humanScore > computerScore) {

        console.log(`You win! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`);

    } else if (computerScore > humanScore) {

        console.log(`You lose! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`);

    } else {

        console.log(`Tie! Final score:
            Human: ${humanScore}
            COM: ${computerScore}`);

    }
}

playGame();
