
var letter = function(ltr){

    this.ltr = ltr;
    this.guess = false;
    this.guessStatus = function(){
        if(this.ltr == ' '){
            this.guess = true;
        }
    }
    this.letterCheck = function(guessLetter){
        if(guessLetter == this.ltr){
            this.guess = true;
        }
    }
    this.ltrRender = function(){
            if(this.guess === false){
            return '_';
        }else{
            return this.ltr;
        }
    }
}

module.exports = letter;

