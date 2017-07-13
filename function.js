// TASK
// create a rand() function
// takes a number
// returns a number between 0 and that number

// PSEUDOCODE
// multiply Math.random() by the given number
// remove the decimal part
// return the remaning integer

// function rand(num){
   // returns random integer between 0 and number
//    var randomNum = num * Math.random();
  

function randLetter(
    {
        var: alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z']
    }
)
function randWord(){
    var word = ""; 
    for(var i = 0; i<5; i++){
        word = word + randLetter();
    }
    return word;
}