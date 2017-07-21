function setup() {
    createCanvas(1000, 600)
    background(20, 230, 255)

    textSize(32);

    text("Welcome to the typeTest", width / 2, 50);
    text("Can Anybody", 500, 300)
}

var canAnybody = "Can Anybody"
var typed = [""]

// function draw() {  // draw() loops forever, until stopped
//   yPos = yPos - 1;
//   if (yPos < 0) {
//     yPos = height;
//   }
function keyPressed() {
    if (keyCode == BACKSPACE) {
        typed.pop();
    }
    else{
        typed.push(key)
    }
       console.log(typed);

}



if (typed == canAnybody) {
    alert("You win")
}
