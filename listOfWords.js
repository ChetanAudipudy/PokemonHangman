
var Word = require("./word.js");

var listOfWords = function(){

	this.answers = ["arceus","giratina","palkia","dialga","mew","gardevoir","arcanine"];
	this.randomWord = this.answers[ Math.floor(Math.random() * this.answers.length)];
	this.currentWord = new Word(this.randomWord);
	// console.log(this.currentWord);
}
module.exports = listOfWords;