
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

function printRoster(name){
    for(var i = 0; i < 7; i++){
    console.log("")
    console.log(name[i])
    }
}    
