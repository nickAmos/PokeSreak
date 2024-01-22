import axios from 'axios';
import { useState, useEffect } from 'react';
import { starters } from './starters';

export default function Fetch() {

  const [pokeMonOne, setPokeMonOne] = useState(starters[0]);
  const [pokeMonTwo, setPokeMonTwo] = useState(starters[1]);
  const [pokeMonThree, setPokeMonThree] = useState(starters[2]);

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

let [num1, num2, num3] = [Math.floor(Math.random() * 1000), 0, 0];

function Gen3Num() {
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
        console.log(pokeMonOne);
      } 
      const responseTwo = await client.get(`${Two}`);
      if (responseTwo.status === 200) {
        setPokeMonTwo(responseTwo.data);
        console.log(pokeMonTwo);
      } 
      const responseThree = await client.get(`${Three}`);
      if (responseThree.status === 200) {
        setPokeMonThree(responseThree.data);
        console.log(pokeMonThree);
      } 
  } catch (error) {
    console.log(error);
}
};

useEffect(() => {

  Gen3Num();
  fetchPokemon(num1, num2, num3);

}, []);


return(
  <div>
    <p>{pokeMonOne.name}</p>
    <p>{pokeMonTwo.name}</p>
    <p>{pokeMonThree.name}</p>
  </div>
)

}
