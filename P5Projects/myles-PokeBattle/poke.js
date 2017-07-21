function setup(){
    createCanvas(1400,1400)
    background("red")
    fill('white')
    noStroke()
    rect(0,height/2,width,height/2)
    fill("white")
    stroke("black")
    rect(width/7,height/6, 1050,1050)
    line(400,height/6,400,1282)
    line(1050,height/6,1050,1282)
    line(width/7,600,(width/7)+200,600)
    line(1050,600,1250,600)
    fill("black")
    textSize(64)
    text("You",(width/7)+50,400)
    textSize(42)
    text("Opponent",1055,400)
    line((width/7)+200,750,1050,750)
    text("Your", (width/7)+50,700)
    text("Pokemon",(width/7)+15,750)
    text("Opponent",1055,700)
    text("Pokemon",1055,750)

    
}
function Pokemon(name, def, hp, legend, atk, type){
    this.name,
    this.atk = atk,
    this.def = def,
    this.hp = hp,
    this.legendary = legend,
    this.type = type
}

var Blastoise = new Pokemon(Blastoise, 100, 79, false, 93, "Water")
var Charizard = new Pokemon(Charizard,78, 78, false, 84, ['Fire', 'Flying'])
var Snorlax = new Pokemon(Snorlax, 65, 160, false, 110, 'Normal')
var Pikachu = new Pokemon(Pikachu, 40, 35, false, 55, "Electric")
var Solgaleo = new Pokemon(Solgaleo,107, 137, true, 137, ['Phychic', 'Steel'])
var Zekrom = new Pokemon(Zekrom,120, 100, true, 150, ["Dragon", 'Electric'])

var name = [ Blastoise, Charizard, Snorlax , Pikachu, Solgaleo, Zekrom ]  

function draw(){
    fill("red")
    rect(400,800,237,40)
    fill("green")
    for(i=0; i<10; i++){
        Blastoise.hp - 20
    }
    rect(400,800,Blastoise.hp*3,40)

}