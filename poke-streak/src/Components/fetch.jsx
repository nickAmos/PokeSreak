import axios from 'axios';
import { useState, useEffect } from 'react';
import { starters } from './starters';
import PokeCard from './PokeCard';

export default function Fetch() {

  const [pokeMonOne, setPokeMonOne] = useState(null);
  const [pokeMonTwo, setPokeMonTwo] = useState(null);
  const [pokeMonThree, setPokeMonThree] = useState(null);
  const [chosenMon, setChosenMon] = useState(null);

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

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
    }

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

function getNum() {
  return Math.floor(Math.random() * 3);
}

function SetSelected() {
  let number = getNum();
  if (number === 0) {
    setChosenMon(1);
  } else if (number === 1) {
    setChosenMon(2);
  } else if (number === 2) {
    setChosenMon(3);
  }
}


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
  <div style={placeholder_style}>
    {pokeMonOne ? <PokeCard chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokeMonOne.moves} name={pokeMonOne.name} sprite={pokeMonOne.sprites.front_default} type={pokeMonOne.types} /> : null}
    {pokeMonTwo ? <PokeCard chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokeMonTwo.moves} name={pokeMonTwo.name} sprite={pokeMonTwo.sprites.front_default} type={pokeMonTwo.types} /> : null}
    {pokeMonThree ? <PokeCard chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokeMonThree.moves} name={pokeMonThree.name} sprite={pokeMonThree.sprites.front_default} type={pokeMonThree.types} /> : null}
  </div>
)

}
