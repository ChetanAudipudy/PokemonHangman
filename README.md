# Hangman
This a command line based hangman game using node and constructors.

Test your pokemon knowledge!

## Usage:
Run the game using this command in your command line:

    node index.js

## Packages Used:

[prompt](https://www.npmjs.com/package/prompt) - Prompts for the input.

## Concepts:
Uses Constructors for creating objects.

letter.js is a file with the constructor for creating letters.

word.js is a file with the constructor for creating word objects based on the letters from the objects of letter.js

listofWords.js is file which contains an array of words and a randomizing function.

index.js contains the prompt for the user input and the game is run from here.


## Key features:

* Takes in uppercase letters and converts them to lowercase.

* Gives a message if you input a number. You still lose number of chances (pokeballs).

* Gives a message if you input more than on character at a time. You still lose chances.

