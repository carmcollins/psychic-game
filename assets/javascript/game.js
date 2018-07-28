var appChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";

var reset = function() {
    guessesLeft = 10;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    guessesSoFar = "";
    document.getElementById("guessesSoFar").textContent = guessesSoFar;
};

document.onkeyup = function(e) {
    //User chooses a letter
    var userGuess = e.key.toLowerCase();
    //App chooses a random letter
    var appGuess = appChoices[Math.floor(Math.random() * appChoices.length)];

    //If the user's choice is the same as the app's choice...
    if (userGuess === appGuess) {
        //Add 1 to Wins
        wins++;
        document.getElementById("wins").textContent = wins;
        //And reset the game
        reset();
    //If the user's choice is not the same as the app's choice...
    } else if (userGuess !== appGuess) {
        //Subtract 1 from Guesses Left
        guessesLeft--;
        document.getElementById("guessesLeft").textContent = guessesLeft;
        //Add the key that the user pressed to Guesses So Far
        guessesSoFar = guessesSoFar + " " + userGuess;
        document.getElementById("guessesSoFar").textContent = guessesSoFar;
    };

    //If Guesses So Far equals 0
    if (guessesLeft === 0) {
        //Add 1 to Losses
        losses++;
        document.getElementById("losses").textContent = losses;
        //And reset the game
        reset();
    };
};