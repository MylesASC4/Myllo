function Superhero(ID,supername,powers){
    this.id = ID
    this.hero =supername
    this.powers = powers
    this.talk = function (){
        console.log("Just your friendly neighborhood "+ supername)
    }
}

var spiderman = new Superhero("Peter Parker",'Spiderman', ['Web Slinging', 'Spidey Sense', 'Super Strength'] )
var spawn = new Superhero('Charlie','Spawn','')