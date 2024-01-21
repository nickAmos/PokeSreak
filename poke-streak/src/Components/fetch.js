import axios from 'axios';

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

export const fetchPokemon = async (num) => {
  try {
      const response = await client.get(`${num}`)
      if (response.status === 200) {
        console.log(response.data.name);
        return response.data;
        //returns the data of the mon requested.
        //Assign this function to a variable.
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      };
     
  } catch (error) {
    console.log(error);
}}



