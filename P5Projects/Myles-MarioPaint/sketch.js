function setup(){
    createCanvas(1325, 700,);
    background(75);
}

function mouseDragged() {
  fill(random(255), random(255), random(255))
  ellipse(mouseX, mouseY, random(350),random(300))
  rect(mouseX,mouseY, random(100),random(150))

  // prevent default
  return false;
}