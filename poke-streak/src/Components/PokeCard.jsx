import { handleClick } from "../HelperFunctions";
import '../Style/PokeCard.css';
import Reveal from "./Reveal";



export default function PokeCard({name, sprite, type, chosenMon, id, handleCorrect, handleIncorrect, delay}) { 

    let types = [type];
    let displayedTypes = [];

    if (types[0].length === 1) {
        displayedTypes.push(types[0][0].type.name);
    } else {
        displayedTypes.push(types[0][0].type.name);
        displayedTypes.push(types[0][1].type.name);
    } 

    return(
        <Reveal posX={200} delay={delay}>
            <div id="Reveal-content" onClick={() => handleClick(id, chosenMon, handleCorrect, handleIncorrect)} >
                   
                   <div id="name-container">
                        <h2>{name}</h2>
                   </div>

                   <div id="image-container">
                    <img src={sprite} alt="pokemon_sprite"/>
                   </div>

                   <div id="type-container">

                   </div>
            
            </div>
        </Reveal>

    )
}


/*  <div>{name}</div>
                    <img src={sprite} alt="pokemon_sprite"/>
                    <div>
                <p>{displayedTypes[0]}</p>
                {displayedTypes[1] ? <p>{displayedTypes[1]}</p> : null} */