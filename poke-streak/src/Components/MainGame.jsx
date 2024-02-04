
import { useState, useEffect } from 'react';
import '../Style/App.css';
import Fetch from './fetch';
import PokeCard from './PokeCard';
import Question from './Question';
import Streak from './Steak';
import { useNavigate } from 'react-router-dom';


export default function MainGame({getHighScore, styleMain}) {

  const [pokemonOne, setPokemonOne] = useState(null);
  const [pokemonTwo, setPokemonTwo] = useState(null);
  const [pokemonThree, setPokemonThree] = useState(null);
  const [chosenMon, setChosenMon] = useState(null);
  const [streak, setStreak] = useState(0);
  const [refetch, setRefetch] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const navigation = useNavigate();


  useEffect(() => {
    const data = window.localStorage.getItem('HIGHSCORE');
    if (data !== null) {
    setHighScore(JSON.parse(data))
    }
  }, [])
  
    useEffect(() => {
        window.localStorage.setItem('HIGHSCORE', JSON.stringify(highScore));
    }, [highScore]);

  function getData(pokemonOne, pokemonTwo, pokemonThree, chosenMon) {
    setPokemonOne(pokemonOne);
    setPokemonTwo(pokemonTwo);
    setPokemonThree(pokemonThree);
    setChosenMon(chosenMon);
  }




const handleHighscore = (score) => {
    if (score > highScore) {
      console.log('handle highscore ran');
      setHighScore(streak);
      setTimeout(() => {
        getHighScore(highScore);
      },500);
  }
}
const handleReset = ( ) => {
  setPokemonOne(false);
  setPokemonTwo(false);
  setPokemonThree(false);
}

const handleAnswer = (answer, selection) => {
  if (answer === selection) {
    console.log('correct');
    setStreak(prev => prev + 1);
    setTimeout(() => {
      setRefetch(!refetch);
    },1000);
  } else {
    console.log('incorrect');
    handleHighscore(streak);
    setTimeout(() => {
      setStreak(0);
      navigation('/Results');
    },1000) 
  }
}
  

  const placeholder_style = {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
  
  const placeholder_style_child = {
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
  }
  
  return (
    <div className="App" style={styleMain}>
      
      <header className="App-header">
        <div onClick={() => setHighScore(0)}>reset highscore</div>
        
        <Streak streak={streak}/>
        <Fetch reset={handleReset} refetch={refetch} getData={getData}/>

        {pokemonThree ? <Question chosenMon={chosenMon} pokemonOne={pokemonOne.moves} pokemonTwo={pokemonTwo.moves} pokemonThree={pokemonThree.moves} /> : null}
        <div style={placeholder_style}>
        {(pokemonOne && pokemonTwo && pokemonThree) ? <PokeCard handleAnswer={handleAnswer}  delay={0}  chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokemonOne.moves} name={pokemonOne.name} sprite={pokemonOne.sprites.front_default} type={pokemonOne.types} /> : null}
        {(pokemonTwo && pokemonOne && pokemonThree )? <PokeCard handleAnswer={handleAnswer} delay={0.35} chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokemonTwo.moves} name={pokemonTwo.name} sprite={pokemonTwo.sprites.front_default} type={pokemonTwo.types} /> : null}
        {(pokemonThree && pokemonOne && pokemonTwo )? <PokeCard handleAnswer={handleAnswer} delay={0.7} chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokemonThree.moves} name={pokemonThree.name} sprite={pokemonThree.sprites.front_default} type={pokemonThree.types} /> : null}
        </div>

        <div>Highscore: {highScore}</div>
      </header>
    </div>
  );
}

