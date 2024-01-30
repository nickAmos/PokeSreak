
import { useState, useEffect } from 'react';
import '../Style/App.css';
import Fetch from './fetch';
import PokeCard from './PokeCard';
import Question from './Question';
import Streak from './Steak';
import { useNavigate } from 'react-router-dom';


export default function MainGame() {

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



  function handleCorrect(id, chosenMon) {

    setStreak(prev => prev + 1);

    setTimeout(() => {
      setRefetch(!refetch);
    },200) 
  }

  function handleIncorrect(id, chosenMon) {
    console.log(`Wrong! ${chosenMon} was the correct answer.`)
    if (streak > highScore) {
      console.log('i Ran');
      setHighScore(streak);
    }
    setStreak(0);
    setTimeout(() => {
      setRefetch(!refetch);
    },200) 
    
  }


/*  const handleStreak = (result) => {
    if (result === 'correct') {
      setStreak(prevCount => prevCount + 1);
      setRefetch(!refetch);
      
    } else {
      
      if (streak > highScore) {
        console.log(`new highscore ${streak}`);
        let newhighScore = streak;
        setHighScore(newhighScore);
        console.log(highScore);
      }
      setStreak(0);
      setRefetch(!refetch);
      navigation('/Results');
      
      
      //Finish Page Logic
    }
    Generates new mons (this will only be placed in if result correct once
    page for results is created) */
    

const handleReset = ( ) => {
  setPokemonOne(false);
  setPokemonTwo(false);
  setPokemonThree(false);
}
  

  const placeholder_style = {
    display: 'flex', alignItems: 'center', justifyContent: 'center'
  }
  
  const placeholder_style_child = {
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
  }
  
  return (
    <div className="App">
      
      <header className="App-header">
        <Streak streak={streak}/>
        <Fetch reset={handleReset} refetch={refetch} getData={getData}/>

        {pokemonThree ? <Question chosenMon={chosenMon} pokemonOne={pokemonOne.moves} pokemonTwo={pokemonTwo.moves} pokemonThree={pokemonThree.moves} /> : null}
        <div style={placeholder_style}>
        {(pokemonOne && pokemonTwo && pokemonThree) ? <PokeCard  delay={0}  handleIncorrect={handleIncorrect} handleCorrect={handleCorrect} chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokemonOne.moves} name={pokemonOne.name} sprite={pokemonOne.sprites.front_default} type={pokemonOne.types} /> : null}
        {(pokemonTwo && pokemonOne && pokemonThree )? <PokeCard  delay={0.35} handleIncorrect={handleIncorrect} handleCorrect={handleCorrect} chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokemonTwo.moves} name={pokemonTwo.name} sprite={pokemonTwo.sprites.front_default} type={pokemonTwo.types} /> : null}
        {(pokemonThree && pokemonOne && pokemonTwo )? <PokeCard  delay={0.7} handleIncorrect={handleIncorrect} handleCorrect={handleCorrect} chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokemonThree.moves} name={pokemonThree.name} sprite={pokemonThree.sprites.front_default} type={pokemonThree.types} /> : null}
        </div>

        <div>Highscore: {highScore}</div>
      </header>
    </div>
  );
}

