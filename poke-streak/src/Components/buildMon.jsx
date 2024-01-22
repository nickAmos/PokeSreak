



export function buildPokemon(name, speed, movepool) {
    
    let builtMon = [name, speed, movepool]

    let randNum = Math.floor(Math.random() * builtMon.movepool.length);
    let knownMoves = [];
    for (let i = 0; i < builtMon.movepool.length; i++) {
        knownMoves.push(movepool[i].move.name);
    }

    let selectedMove = builtMon.movepool[randNum].move.name;


    return (
        <>
        <div>{builtMon[0]}</div>
        </>
    )

   
}