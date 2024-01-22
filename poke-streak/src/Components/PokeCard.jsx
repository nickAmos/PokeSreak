export default function PokeCard({name, sprite, type, movepool, chosenMon, id}) { 

    let types = [type];
    let displayedTypes = [];
    let knownMoves = [];

    for (let i = 0; i < movepool.length; i++) {
        knownMoves.push(movepool[i].move.name)
    }


    const selectedMove = knownMoves[Math.floor(Math.random() * knownMoves.length )];


    if (types[0].length === 1) {
        displayedTypes.push(types[0][0].type.name);
    } else {
        displayedTypes.push(types[0][0].type.name);
        displayedTypes.push(types[0][1].type.name);
    } 

    return(
        <div style={{marginLeft: '50px'}}>
            <div>{(id === chosenMon) ? <p>ME</p> : null}</div>
            <div>{name}</div>
            <img src={sprite} alt="pokemon_sprite"/>
            <div>
                <p>{displayedTypes[0]}</p>
                {displayedTypes[1] ? <p>{displayedTypes[1]}</p> : null}
            </div>
            <div>{selectedMove}</div>
        
        </div>

    )
}