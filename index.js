var prompt = require("prompt");
var listOfWords = require('./listofWords.js');
// var Word = require("./word.js")


var hangmanGame = new listOfWords();
var guessCount = 10;



//Start the prompt package.
	prompt.start();
	console.log("Welcome to Pokemon hangman! You've gotta catch em all!");
	console.log("----------------------------------------------");

	initiateGame(guessCount);

	//Function to run the game.
		function initiateGame(guessArr){
			
			console.log("Pokeballs left: " + guessArr);
			if(hangmanGame.currentWord.compare() == true){
				console.log("Congratulations!");
				console.log("You caught " + hangmanGame.currentWord.inputWord + "!");
				return;
			}

			if(guessArr <= 0){
				console.log("You ran out of Pokeballs!");
				console.log("The right pokemon was: " + hangmanGame.currentWord.inputWord);
				console.log("Better luck next time!");
				return;
			}

		console.log(hangmanGame.currentWord.display());

	prompt.get(["EnterLetter"], function(err, result){
		if(err){
			return err;
		}

		//Checking if the input is a number.
		if(isNaN(result.EnterLetter) === false){
			console.log("I'm certain there are no Pokemon with a number in their name. Please enter only letters, not numbers.\n")
		}

		//Checking if the input is more than a character.
		if(result.EnterLetter.length > 1){
			console.log("Please enter only 1 letter at a time.\n");
		}

		//Checking if the input letter is present in the word which needs to be guessed.
		if(hangmanGame.currentWord.isLtrPresent(result.EnterLetter.toLowerCase()) == false){
			guessArr --;
		}

		//Re-run the function with the input as the new guess array.
		initiateGame(guessArr);

	});
}


