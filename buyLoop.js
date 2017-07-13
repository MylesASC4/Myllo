var promptSync = require('prompt-sync')();

var p1Money = 3000
var Stuff = ["BF Sword = 1300", "Bamis Cinder = 1100", "Boots = 300", 'Dagger = 300']

while(p1Money > 299)
{
    console.log(Stuff)
    console.log('')
    console.log("You have", p1Money, "coins")
    console.log('')
    var answer = promptSync('what do you want to buy?')
    if(answer == "BF Sword")
    {
       p1Money = p1Money - 1300
       console.log('You bought the BF Sword, plus Attack Damage')
       console.log('')
    }
    else if (answer == "Bamis Cinder")
    {
        p1Money = p1Money - 1100
        console.log('You bought Bami`s Cinder!, plus AOE Damage')
        console.log('')
    }
    else if (answer == "Boots")
    {
        p1Money = p1Money - 300 
        console.log('You Got Boots, plus Movement Speed!!') 
        console.log('')
    }
    else if (answer == 'Dagger')
    {
        p1Money = p1Money - 300
        console.log('You bought the Dagger, plus Attack Speed')
        console.log('')
    }
    else 
    {
        console.log('Sorry I dont have that, dude!')
        console.log('')
    }
}
if (p1Money <300)
{
    console.log('You have', p1Money, 'coins but thats not enough money for any of my items')
}