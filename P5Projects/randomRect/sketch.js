function setup(){
    createCanvas(1325, 700,);
    background(75);
    fill("red")
    rect(0,0,50,1000)
    fill("blue")
    rect(50,0,50,1000)
    fill("yellow")
    rect(100,0,50,1000)   
}
function mousePressed() {
  if (mouseX <= 50) {
   c = "red"
}
else if (mouseX < 100 && mouseX > 50){
    c = "blue"
}
else{
    c = "yellow"
}
}
function mouseDragged() {
  fill(c)
  ellipse(mouseX, mouseY, random(350),random(300))
  rect(mouseX,mouseY, random(100),random(150))

  // prevent default
  return false;
}