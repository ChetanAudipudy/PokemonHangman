var Letter = require('./letter.js');

var Word = function(inputWord){

	this.inputWord = inputWord; //Word to be guessed in a string format.
	this.targetWord = []; //Word to be guessed as an array.
	this.guessArr = []; //Array of guesses.

	//Function to grab the letter from the inputWord array, create an object of Letter from letter.js and push the new letter object into the targetWord array.
	this.grabLetters = function(){
		for(var i = 0; i <this.inputWord.length; i++){
			var newLetObj = new Letter(this.inputWord[i]);
			this.targetWord.push(newLetObj);

		}
	}
	this.grabLetters();

	//Function to check if the letter is present in the guess array.
	this.isLtrPresent = function(guessLetter){
		for(var i = 0; i <this.guessArr.length; i++){
			if(guessLetter == this.guessArr[i]){
				return true;
			}
		}
		console.log(guessLetter);
		this.guessArr.push(guessLetter);


	//Function to check if the input letter has already been guessed before.
		var isAdded = false;
		for(var i = 0; i <this.targetWord.length;i++){
			
			if(this.targetWord[i].letterCheck(guessLetter)){
				this.targetWord[i].guess = true;
				isAdded = true;
			} 
		}
		return isAdded;
	}

	//Function to compare the values in the wordholder and the target word.
	this.compare = function(){
		for(var i = 0; i < this.inputWord.length; i++){
			if(this.inputWord.charAt(i) != this.targetWord[i].wordHolder){
				return false;
			}
		}
				return true;
	}

	//Function to display the empty string.
	this.display = function(){

		var emptyString = "";
		for(var i = 0; i <this.targetWord.length; i++){
			emptyString += this.targetWord[i].wordHolder + " " ;
		}
		return emptyString;
	}
} 

module.exports = Word;