import { useEffect, useState } from "react";
import '../Style/PokeCard.css';
import Reveal from "./Reveal";
import { useAnimate } from "framer-motion"


export default function PokeCard({name, sprite, type, chosenMon, id, handleAnswer, delay, trigger, styleMain}) { 


    const [scope, animate] = useAnimate()
    const [clickable, setClickable] = useState(true);

    let types = [type];
    let displayedTypes = [];
    let typeOne;
    let typeTwo;

        if (types[0][0].type.name === 'water') {
            typeOne = <img src={require('../Images/WATER.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'bug') {
            typeOne = <img src={require('../Images/BUG.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'dark') {
            typeOne = <img src={require('../Images/DARK.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'dragon') {
            typeOne = <img src={require('../Images/DRAGON.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'fighting') {
            typeOne = <img src={require('../Images/FIGHTING.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'fairy') {
            typeOne = <img src={require('../Images/FAIRY.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'electric') {
            typeOne = <img src={require('../Images/ELECTRIC.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'fire') {
            typeOne = <img src={require('../Images/FIRE.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'flying') {
            typeOne = <img src={require('../Images/FLYING.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'ghost') {
            typeOne = <img src={require('../Images/GHOST.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'ice') {
            typeOne = <img src={require('../Images/ICE.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'ground') {
            typeOne = <img src={require('../Images/GROUND.png')} alt='waterType'/>
        }
        if (types[0][0].type.name === 'grass') {
            typeOne = <img src={require('../Images/GRASS.png')} alt='waterType'/>
        }if (types[0][0].type.name === 'normal') {
            typeOne = <img src={require('../Images/NORMAL.png')} alt='waterType'/>
        }if (types[0][0].type.name === 'poison') {
            typeOne = <img src={require('../Images/POISON.png')} alt='waterType'/>
        }if (types[0][0].type.name === 'psychic') {
            typeOne = <img src={require('../Images/PSYCHIC.png')} alt='waterType'/>
        }if (types[0][0].type.name === 'steel') {
            typeOne = <img src={require('../Images/STEEL.png')} alt='waterType'/>
        }if (types[0][0].type.name === 'rock') {
            typeOne = <img src={require('../Images/ROCK.png')} alt='waterType'/>
        }

    if (types[0].length === 2) {
        if (types[0][1].type.name === 'water') {
            typeTwo = <img src={require('../Images/WATER.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'bug') {
            typeTwo = <img src={require('../Images/BUG.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'dark') {
            typeTwo = <img src={require('../Images/DARK.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'dragon') {
            typeTwo = <img src={require('../Images/DRAGON.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'fighting') {
            typeTwo = <img src={require('../Images/FIGHTING.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'fairy') {
            typeTwo = <img src={require('../Images/FAIRY.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'electric') {
            typeTwo = <img src={require('../Images/ELECTRIC.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'fire') {
            typeTwo = <img src={require('../Images/FIRE.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'flying') {
            typeTwo = <img src={require('../Images/FLYING.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'ghost') {
            typeTwo = <img src={require('../Images/GHOST.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'ice') {
            typeTwo = <img src={require('../Images/ICE.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'ground') {
            typeTwo = <img src={require('../Images/GROUND.png')} alt='waterType'/>
        }
        if (types[0][1].type.name === 'grass') {
            typeTwo = <img src={require('../Images/GRASS.png')} alt='waterType'/>
        }if (types[0][1].type.name === 'normal') {
            typeTwo = <img src={require('../Images/NORMAL.png')} alt='waterType'/>
        }if (types[0][1].type.name === 'poison') {
            typeTwo = <img src={require('../Images/POISON.png')} alt='waterType'/>
        }if (types[0][1].type.name === 'psychic') {
            typeTwo = <img src={require('../Images/PSYCHIC.png')} alt='waterType'/>
        }if (types[0][1].type.name === 'steel') {
            typeTwo = <img src={require('../Images/STEEL.png')} alt='waterType'/>
        }if (types[0][1].type.name === 'rock') {
            typeTwo = <img src={require('../Images/ROCK.png')} alt='waterType'/>
        }
    }

    useEffect(() => {
        if (trigger) {
            animate(scope.current,
                {opacity: 0},
                {duration: 0.5, type: "spring"})
        }
    },[trigger])



    function handleAnimate() {
        if (chosenMon === id) {
            
            animate(scope.current,  
                {y: -100, backgroundColor: 'Green' }, 
                {
                duration: 0.7,
                type: "spring"  
                });
        } else {
           
            animate(scope.current,  
                {rotate: [0, 5, 0 ,-5, 0],
                backgroundColor: 'Red' }, 
                {
                duration: 0.3,
                
                  
                });
        }
        
    }



    if (types[0].length === 1) {
        displayedTypes.push(types[0][0].type.name);
    } else {
        displayedTypes.push(types[0][0].type.name);
        displayedTypes.push(types[0][1].type.name);
    } 

    //proc animation in here 

    return(
        <Reveal style={{backgroundColor: styleMain['primaryColor']['backgroundColor']}} posX={200} delay={delay}>
            <div  ref={scope} id="Reveal-content" 
            onClick={() => {
                handleAnswer(chosenMon, id);
                handleAnimate();
            }} >
                   
                   <div id="name-container">
                        <h2>{name}</h2>
                   </div>

                   <div id="image-container">
                    <img src={sprite} alt="pokemon_sprite"/>
                   </div>

                   <div id="type-container">
                        {typeOne}
                        {typeTwo ? typeTwo : null}
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