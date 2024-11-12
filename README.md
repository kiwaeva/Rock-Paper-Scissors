Step 1: Setup the project structure
Create a new Git repository for project.
Create a blank HTML document with a script tag.
Check if JavaScript is linked correctly:
Write console.log("Hello World") in JavaScript.
Check if “Hello World” is logged in the browser console once you open webpage.

This game is played entirely via the console.

Step 2: Write the logic to get the computer choice
The game will be played against the computer. Write a function that randomly returns “rock”, “paper” or “scissors”.

Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
The Math.random method returns a random number.
Game will be played by a human player. Write a function that takes the user choice and returns it.

Step 3: Write the logic to get the human choice.
The game will be played by a human player. You will write a function that takes the user choice and returns it.
Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
The prompt method to get the user’s input.
Test what function returns by using console.log.

Step 4: Declare the players score variables
Theame will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.

Step 5: Write the logic to play a single round
The game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

Step 6: Write the logic to play the entire game
The game will play 5 rounds. Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move playRound function and score variables so that they’re declared inside of the new playGame function

Play 5 rounds by calling playRound 5 times.
