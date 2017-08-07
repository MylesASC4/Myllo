var y = 500;
var ball;
var balls = [];
var p1X = 650;


function setup(){
    createCanvas(1330,625);
    invader = loadImage("Space Invaders Icon.png")
    alien = loadImage("invader.jpg")
    
} 

function draw() {
background("black");
    image(invader, 1250, 5, invader.width / 12, invader.height / 12)
    image(invader, 1175, 5, invader.width / 12, invader.height / 12)
    
 textSize(48)
    fill("white")
    text("Highscore:",50,50)
    text("Score:",550,50)
    text("Lives:",1050,50)
// Images
image(invader, p1X, 500, invader.width / 9, invader.height / 9)
    image(invader, p1X, 1500, invader.width / 9, invader.height / 9)
    image(invader, p1X, 500, invader.width / 9, invader.height / 9)
    image(alien, 50, 100, alien.width / 10, alien.height / 10)
    image(alien, 250, 100, alien.width / 10, alien.height / 10)
    image(alien, 450, 100, alien.width / 10, alien.height / 10)
    image(alien, 650, 100, alien.width / 10, alien.height / 10)
    image(alien, 850, 100, alien.width / 10, alien.height / 10)
    image(alien, 1050, 100, alien.width / 10, alien.height / 10)
    image(alien, 1250, 100, alien.width / 10, alien.height / 10)















for (var i = 0; i < balls.length; i++){
        balls[i].show()
        balls[i].move(-3)
    }
 if (keyIsDown(LEFT_ARROW))
    p1X-=10;

  if (keyIsDown(RIGHT_ARROW))
    p1X+=10;


}   
function keyPressed() {

    if (keyCode === UP_ARROW){
    balls.push(new Ball(p1X + 47.5, 500));
    balls.push(new Ball(p1X + 8.5, 550));
    balls.push(new Ball(p1X + 85, 550));
}
}
console.log(balls)

