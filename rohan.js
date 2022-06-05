// Age Guessing Game

var startGame = confirm("Let's play a game \nI will guess your age");

// if player choose to continue

if (startGame) {
    // requesting player to input age
    var playerChoice = prompt("Please enter a number between 1 to 100");
    var playerInput = playerChoice && parseInt(playerChoice)
    // if player passes an input and click ok
    if (playerInput > 0 && playerInput <= 100) {

        // matching the player's input to check if anything else apart from expected input is not passed
            var computerInput = (Math.floor(Math.random() * 100) + 1);
            console.log('computer',computerInput)
            console.log('player',playerInput)

            // Add Result
            var result;

            // Running Game Logic
            if (playerInput < computerInput) {
            result = "oops..";
            alert("Please enter a higher number")
            prompt("please try again - less input")
            } 
            
            else if (playerInput > computerInput) {
            result = "oops..";
            alert("Please enter a lower number")
            prompt("please try again - greater input")
            } 
            
            else {
                result = "We won";
                alert(`YOO.. HOO.. Your age is ${computerInput}`)
            }

    } else {
        alert("Please pass in correct value")
    }

} else {

    // if player doesn't accept the request
    alert("Thanks!! Maybe Next Time.");
}

// sir i tried the game part and need some help as i was building an age guessing game.
// sir i have few questions.
// --> when i remove the result, it will just run for once and won't even show correct answer, why it is so?
// --> when i don't remove result, it is running for once then asking to increase/decrease number but it is showing correct result after that immediately.
// --> what should i do to run it until we guess the correct answer 
// --> can we do it without using "loop" and by using "if-else" only?