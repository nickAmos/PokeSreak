import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});

const fetchPokemon = async (num) => {
  try {
      const response = await client.get(`${num}`)
      return response.data;
  } catch (error) {
  console.log(error);
}}

let bulbasaur = fetchPokemon(1);

console.log(bulbasaur);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
