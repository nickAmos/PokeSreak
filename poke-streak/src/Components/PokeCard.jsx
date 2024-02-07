import { useEffect, useState } from "react";
import '../Style/PokeCard.css';
import Reveal from "./Reveal";
import { useAnimate } from "framer-motion"


export default function PokeCard({name, sprite, type, chosenMon, id, handleAnswer, delay, trigger}) { 


    const [scope, animate] = useAnimate()
    const [clickable, setClickable] = useState(true);

    let types = [type];
    let displayedTypes = [];

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
        <Reveal posX={200} delay={delay}>
            <div ref={scope} id="Reveal-content" 
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