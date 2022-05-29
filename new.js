/*

- offer to play this game
- if accepted, we can start the game
- once started, we will ask for an input from user
- take that input from user and store
- computer will choose a random option
- then we will use the logic to see who has won
- notify it to the user

logic:
1. rocks beats scissor
2. scissor beats paper
3. paper beats rock

To-DO:
1. increase the math value
2. use ternary in game logic part
3. add restart game option

*/
// Requesting to play game
var startGame = confirm("Let's play Rock Paper & Scissor?");

// if player accepts the request
if (startGame) {
  // Requesting an input from player
  var playerInput = prompt("Please choose Rock, Paper or Scissor");

  // If player passes an input and click ok
  if (playerInput !== null) {
    // changing the player's passed input to lowercase
    var playerChoice = playerInput.toLowerCase();

    // matching the player's input to check if user has passed anything else apart from expected input

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissor') {
        
        var computerChoice = Math.random();

      if (computerChoice < 0.33) {
        computerChoice = "rock";
      } else if (computerChoice > 0.33 && computerChoice < 0.66) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissor";
      }

      // Add Result
      var result;

      // Running Game Logic
      if (playerChoice === computerChoice) {
        result = "Match Tie";
      } else if (playerChoice === "rock" && computerChoice === "scissor") {
        result = "Player Wins";
      } else if (playerChoice === "paper" && computerChoice === "rock") {
        result = "Player Wins";
      } else if (playerChoice === "scissor" && computerChoice === "paper") {
        result = "Player Wins";
      } else {
        result = "Computer Wins";
      }

      // Displaying Result
      alert(
        `Player choose ${playerChoice} \nComputer Chose ${computerChoice}\n${result}`
      );
    } 
        else {
            alert("Please pass in a correct value");
        }
      
  } else {
    // If player clicks on cancel
    alert("Thanks!! Maybe Next Time.");
  }
} else {
  // if player doesn't accept the request
  alert("Thanks!! Maybe Next Time.");
}
