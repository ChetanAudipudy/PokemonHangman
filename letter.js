
var letter = function(ltr){

    this.ltr = ltr;
    this.guess = false;
    this.ltrRender = function(){
        if(this.ltr == ' '){
            this.appear = true;
        }

        if(this.guess === false){
            return '_';
        }else{
            return this.ltr;
        }

    }
}

module.exports = letter;

