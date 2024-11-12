let getComputerChoice = () => {
	let choice = Math.floor(Math.random() * 3 + 1);
	switch (choice) {
		case 1:
			return "rock";
			break;
		case 2:
			return "paper";
			break;
		case 3:
			return "scissors";
			break;
	}
};

// console.log(getComputerChoice());

let getHumanChoice = () => {
	let human = prompt("rock, paper or scissors: ?").toLowerCase();
	switch (human) {
		case "rock":
			return "rock";
			break;
		case "paper":
			return "paper";
			break;
		case "scissors":
			return "scissors";
			break;
	}
};

// console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let playGame = () => {
	let humanScore = 0;
	let computerScore = 0;

	let playRound = (humanChoice, computerChoice) => {
		if (humanChoice === "rock" && computerChoice === "scissors") {
			console.log("Rock beats scissors. You win!");
			humanScore += 1;
		} else if (humanChoice === "paper" && computerChoice === "rock") {
			console.log("Paper beats rock. You win!");
			humanScore += 1;
		} else if (humanChoice === "scissors" && computerChoice === "paper") {
			console.log("Scissors beat paper.You win!");
			humanScore += 1;
		} else if (humanChoice === "rock" && computerChoice === "paper") {
			console.log("Paper beats rock. You lost :(");
			computerScore += 1;
		} else if (humanChoice === "paper" && computerChoice === "scissors") {
			console.log("Scissors beat paper. You lost :(");
			computerScore += 1;
		} else if (humanChoice === "scissors" && computerChoice === "rock") {
			console.log("Rock beats scissors. You lost :(");
			computerScore += 1;
		} else if (humanChoice === "rock" && computerChoice === "rock") {
			console.log("Rock Rock. It's a tie!");
		} else if (humanChoice === "paper" && computerChoice === "paper") {
			console.log("Paper Paper. It's a tie!");
		} else if (humanChoice === "scissors" && computerChoice === "scissors") {
			console.log("Scissors Scissors. It's a tie!");
		}
	};
	// Loop to play 5 rounds
	for (let i = 0; i < 5; i++) {
		console.log(`Round ${i + 1}:`);
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
		console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}\n`);
	}

	// Display final results
	console.log("Game over!");
	console.log(`Final Scores: You - ${humanScore}, Computer - ${computerScore}`);
	if (humanScore > computerScore) {
		console.log("Congratulations, you won the game!");
	} else if (humanScore < computerScore) {
		console.log("You lost the game. Better luck next time!");
	} else {
		console.log("It's a tie game!");
	}
};

playGame();
