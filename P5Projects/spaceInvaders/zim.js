function Ball(x, y){
    this.x = x
    this.y = y

    this.show = function(){
        fill("white")
        noStroke()
        // ellipse(this.x,this.y,20,20)
        rect(this.x,this.y, 5, 10)
    }
    this.move = function(dir){
        this.y += dir
    }
}