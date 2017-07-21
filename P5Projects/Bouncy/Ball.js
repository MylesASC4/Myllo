function setup(){
    createCanvas(1330,700)

    
}
x = 20
y = 40
speed = 50
speed2 = 25
function draw(){
    background(color(random()*200,random()*255,random()*255))
    stroke("black")
    fill("black")
    ellipse(x,y,100)
    x = x + speed
    y = y + speed2
if(x < 0){ 
    speed = speed*-1
}
if(x > 1280){
    speed = speed*-1
}
if(y < 0){
    speed2 = speed2*-1
}
if(y > 700){
    speed2 = speed2*-1
}

}
