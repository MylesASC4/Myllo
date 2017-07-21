function setup(){
createCanvas(1330,500)
stroke("black")

}
    
x = 20
y = 40
speed = 15
speed2 = 10
function draw(){
    background("white")
    stroke("black")
    fill("black")
    ellipse(x,y,50)
    rect(mouseX,450, 150, 30)
    x = x + speed
    y = y + speed2
if(x < 0){ 
    speed = speed*-1
}
if(x > 1280){
    speed = speed*-1
}

if( y < 0 ){
    speed2 = speed2*-1
}
if(y <= 1){
   
    speed2 = speed2*-1
// alert("Game Over")
}

    console.log(mouseX, );
    
}
