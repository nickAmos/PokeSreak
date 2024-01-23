import { handleClick } from "../HelperFunctions";


export default function PokeCard({name, sprite, type, chosenMon, id, handleStreak}) { 

    let types = [type];
    let displayedTypes = [];

    if (types[0].length === 1) {
        displayedTypes.push(types[0][0].type.name);
    } else {
        displayedTypes.push(types[0][0].type.name);
        displayedTypes.push(types[0][1].type.name);
    } 

    return(
        <div onClick={() => handleClick(id, chosenMon, handleStreak)} style={{marginLeft: '50px'}}>
            
            <div>{name}</div>
            <img src={sprite} alt="pokemon_sprite"/>
            <div>
                <p>{displayedTypes[0]}</p>
                {displayedTypes[1] ? <p>{displayedTypes[1]}</p> : null}
            </div>
            
        
        </div>

    )
}