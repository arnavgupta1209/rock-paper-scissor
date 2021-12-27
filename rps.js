function computerPlay() {
    count = Math.floor(Math.random()*3);
    switch (count) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}

function playRound() {
    let playerSelection = prompt("What will you choose?").toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log("Both choose %s", playerSelection);
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            console.log("you win! Rock beats scissor");
            return 1;
        } else {
            console.log("you lose! Paper beats rock");
            return 0;
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            console.log("you win! scissor beats paper");
            return 1;
        } else {
            console.log("you lose! rock beats scissor");
            return 0;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("you win! Paper beats rock");
            return 1;
        } else {
            console.log("you lose! scissor beats paper");
            return 0;
        }
    }
}

function game() {
    let playerCount = 0
    let compCount = 0
    for (let i = 0; i < 5; i++) {
        let cond = playRound()
        switch (cond) {
            case 0:
                compCount++;
            case 1:
                playerCount++;
        }
    }
    if (playerCount >= compCount) {
        console.log("player has won");
    } else {
        console.log("player has lost")
    }
    console.log(playerCount)
    console.log(compCount)
}

game()