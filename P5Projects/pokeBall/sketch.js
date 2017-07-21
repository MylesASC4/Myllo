function setup(){
    createCanvas(500, 500);
    background(255);
    // stroke sets color, some are predefined
    stroke("black")
    // strokeWeight is thickness
    strokeWeight(6);

    arc(width/2, height/2, 200, 200, 0, PI, CHORD);
    fill("red")
    arc(width/2, height/2, 200, 200, PI, 0, CHORD);
    fill("white")
    ellipse(width/2, height/2, 75, 75)
    fill("black")
    ellipse(width/2, height/2, 25, 25 )

}
