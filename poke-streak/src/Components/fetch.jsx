import axios from 'axios';
import { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import Question from './Question';

/* This component will perform the fetch and render all the seperate components that
will make up the web app. This will allow all the pokemon information to be passed 
to individual components without drilling too far. The chosenMon state will be used
to generate both the answer and question components (trigger through an onClick
  even in the PokeCards. */

export default function Fetch() {

/* All the State for the fetched mons and correct answer */
  const [pokeMonOne, setPokeMonOne] = useState(null);
  const [pokeMonTwo, setPokeMonTwo] = useState(null);
  const [pokeMonThree, setPokeMonThree] = useState(null);
  const [chosenMon, setChosenMon] = useState(null);


const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

const fetchPokemon = async (One, Two, Three) => {
  try {
      const responseOne = await client.get(`${One}`);
      if (responseOne.status === 200) {
        setPokeMonOne(responseOne.data);
      } 
      const responseTwo = await client.get(`${Two}`);
      if (responseTwo.status === 200) {
        setPokeMonTwo(responseTwo.data);
      }    
      const responseThree = await client.get(`${Three}`);
      if (responseThree.status === 200) {
        setPokeMonThree(responseThree.data);
      } 
    } catch (error) {
        console.log(error);
     }
};

/* Spawns in first gen of random numbers */
let [num1, num2, num3] = [Math.floor(Math.random() * 1000), 0, 0];
function gen3Num() {
    while (true) {
      num2 = Math.floor(Math.random() * 1000);
      if (num1 !== num2) {
        break;
        }
      }
    while (true) {
      num3 = Math.floor(Math.random() * 1000);
        if ((num3 !== num2) && (num3 !== num1)) {
          break;
          }
      }
    };
/* Chooses which mon will generate the correct answer. */
function getNumForSelected() {
  return Math.floor(Math.random() * 3);
};
function SetSelected() {
  let number = getNumForSelected();
  if (number === 0) {
    setChosenMon(1);
  } else if (number === 1) {
    setChosenMon(2);
  } else if (number === 2) {
    setChosenMon(3);
  }
};

/* On Mount the three random mons are generated (inc. the selected mon) */
useEffect(() => {
  SetSelected();
  gen3Num();
  fetchPokemon(num1, num2, num3);
}, []);

const placeholder_style = {
  display: 'flex', alignItems: 'center', justifyContent: 'center'
}

const placeholder_style_child = {
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
}
  return(
    <>
     {pokeMonThree ? <Question chosenMon={chosenMon} pokemonOne={pokeMonOne.moves} pokemonTwo={pokeMonTwo.moves} pokemonThree={pokeMonThree.moves} /> : null}
    <div style={placeholder_style}>
      {(pokeMonOne && pokeMonTwo && pokeMonThree) ? <PokeCard chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokeMonOne.moves} name={pokeMonOne.name} sprite={pokeMonOne.sprites.front_default} type={pokeMonOne.types} /> : null}
      {(pokeMonTwo && pokeMonOne && pokeMonThree )? <PokeCard chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokeMonTwo.moves} name={pokeMonTwo.name} sprite={pokeMonTwo.sprites.front_default} type={pokeMonTwo.types} /> : null}
      {(pokeMonThree && pokeMonOne && pokeMonTwo )? <PokeCard chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokeMonThree.moves} name={pokeMonThree.name} sprite={pokeMonThree.sprites.front_default} type={pokeMonThree.types} /> : null}
    </div>
    </>

  )
};
