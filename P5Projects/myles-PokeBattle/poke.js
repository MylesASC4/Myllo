var answer;
var poke1;
var poke2;
function setup() {
    answer = prompt("Which pokemon do you want")
if (answer == "Charizard") {
        poke1 = Charizard;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')
    }
if (answer == "Blastoise") {
        poke1 = Blastoise;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')}
if (answer == "Snorlax") {
        poke1 = Snorlax;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')}
if (answer == "Solgaleo") {
        poke1 = Solgaleo;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')}
if (answer == "Pikachu") {
        poke1 = Pikachu;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')}
if (answer == "Zekrom") {
        poke1 = Zekrom;
        console.log(poke1,+'I CHOOSE YOU!')
        console.log('')}
var name = [Blastoise, Charizard, Snorlax, Pikachu, Solgaleo, Zekrom]
poke2 = random(name)
    createCanvas(1400, 1400)
    background("red")
    fill('white')
    noStroke()
    rect(0, height / 2, width, height / 2)
    fill("white")
    stroke("black")
    textSize(84)
    text("WELCOME TO BATTLE", width / 5, 100)
    rect(width / 7, height / 6, 1050, 1050)
    line(400, height / 6, 400, 1282)
    line(1050, height / 6, 1050, 1282)
    line(width / 7, 600, (width / 7) + 200, 600)
    line(1050, 600, 1250, 600)
    fill("black")
    textSize(64)
    text("You", (width / 7) + 50, 400)
    textSize(42)
    text("Opponent", 1055, 400)
    line((width / 7) + 200, 750, 1050, 750)
    text("Your", (width / 7) + 50, 700)
    text("Pokemon", (width / 7) + 15, 750)
    text("Opponent", 1055, 700)
    text("Pokemon", 1055, 750)
    fill("red")
    rect(400, 800, poke2.hp, 40)


    p1 = loadImage("Ash.jpg")
    p2 = loadImage("game.png")
    ball = loadImage("pokeball.png")
    fill("green")
    rect(1050, 300, poke2.hp * -4, 40) *
    rect(400, 800, poke1.hp * 4, 40)
    fill('black')
    text(poke1.name + " " + poke1.hp + "Hp", 400, 835)
    text(poke2.name + " " + poke2.hp + "Hp",825 , 330)
}
function Pokemon(name, def, hp, legend, atk, type) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.legendary = legend;
    this.type = type;
}

var Blastoise = new Pokemon("Blastoise", 100, 79, false, 93, "Water")
var Charizard = new Pokemon("Charizard", 78, 78, false, 84, ['Fire', 'Flying'])
var Snorlax = new Pokemon("Snorlax", 65, 160, false, 110, 'Normal')
var Pikachu = new Pokemon("Pikachu", 40, 35, false, 55, "Electric")
var Solgaleo = new Pokemon("Solgaleo", 107, 137, true, 137, ['Phychic', 'Steel'])
var Zekrom = new Pokemon("Zekrom", 120, 100, true, 150, ["Dragon", 'Electric'])




// poke1 = Pokemon.name
// poke2 = Pokemon.name
function draw() {
    // rect(400,800,Solgaleo.hp*3,40)
    image(p1, width / 7 + 25, 450, p1.width / 3, p1.height / 3)
    image(p2, 1055, 420, p2.width / 3, p2.height / 3)

    image(ball, width / 7 + 25, 1000, ball.width / 3, ball.height / 3)
    image(ball, width / 7 + 75, 1000, ball.width / 3, ball.height / 3)
    image(ball, width / 7 + 125, 1000, ball.width / 3, ball.height / 3)
    image(ball, width / 7 + 25, 1100, ball.width / 3, ball.height / 3)
    image(ball, width / 7 + 75, 1100, ball.width / 3, ball.height / 3)
    image(ball, width / 7 + 125, 1100, ball.width / 3, ball.height / 3)

    image(ball, 1055, 1000, ball.width / 3, ball.height / 3)
    image(ball, 1105, 1000, ball.width / 3, ball.height / 3)
    image(ball, 1155, 1000, ball.width / 3, ball.height / 3)
    image(ball, 1055, 1100, ball.width / 3, ball.height / 3)
    image(ball, 1105, 1100, ball.width / 3, ball.height / 3)
    image(ball, 1155, 1100, ball.width / 3, ball.height / 3)


}