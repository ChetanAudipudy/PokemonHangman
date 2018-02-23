var Letter = function(ltr){

	this.character = ltr;
	this.guess = false;
	this.wordHolder = "_"; //A placeholder variable which defaults to an underscore.

	//A function to check if the letter has already been guessed.
	this.letterCheck = function(letter){
		if(this.character == letter){
			this.wordHolder = this.character; 
			return true;
		}
			return false;
	}
	
	//A function to render the letter replacing the underscore.
	this.ltrRender = function(){
		return this.wordHolder;
	}
};

module.exports = Letter;