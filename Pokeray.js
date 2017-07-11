var pokeList = ['Pikachu', 'Raichu','Gengar','Snorlax', 'Eevee'];
if( pokeList.length < 4)
{
    for(var n = 0; n < pokeList.length; n++)
    {
    console.log(pokeList[n])
    }
    for(var f = 0; f < pokeList.length; f++)
    {
    console.log("    ", pokeList.reverse()[f] )
    }
}