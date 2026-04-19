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
