
import { useState, useEffect } from 'react';
import '../Style/App.css';
import Fetch from './fetch';
import PokeCard from './PokeCard';
import Question from './Question';
import Streak from './Steak';
import { useNavigate } from 'react-router-dom';
import '../Style/MainGame.css';
import '../Style/Results.css';


export default function MainGame({sendHighScore, styleMain}) {

  const [pokemonOne, setPokemonOne] = useState(null);
  const [pokemonTwo, setPokemonTwo] = useState(null);
  const [pokemonThree, setPokemonThree] = useState(null);
  const [chosenMon, setChosenMon] = useState(null);
  const [streak, setStreak] = useState(0);
  const [refetch, setRefetch] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [resultsPage, setResultsPage] = useState(false);
  const [triggerOne, setTriggerOne] = useState(false);
  const [triggerTwo, setTriggerTwo] = useState(false);
  const [triggerThree, setTriggerThree] = useState(false);
  const navigation = useNavigate();




  useEffect(() => {
    const data = window.localStorage.getItem('HIGHSCORE');
    if (data !== null) {
    setHighScore(JSON.parse(data))
    sendHighScore(highScore);
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
    if (selection === 1) {
      setTriggerTwo(true);
      setTriggerThree(true);
    }
    if (selection === 2) {
      setTriggerOne(true);
      setTriggerThree(true);
    }
    if (selection === 3) {
      setTriggerTwo(true);
      setTriggerOne(true);
    }
    setStreak(prev => prev + 1);
    setTimeout(() => {
      setRefetch(!refetch);
      setTriggerOne(false);
      setTriggerTwo(false);
      setTriggerThree(false);

    },1000);
  } else {
    console.log('incorrect');
    handleHighscore(streak);
    setTimeout(() => {
      setResultsPage(true);
      setRefetch(!refetch);
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
    <div id='Main-Results-Container' style={{backgroundColor: styleMain['primaryColor']['backgroundColor']}}>
      <Fetch reset={handleReset} refetch={refetch} getData={getData}/>
      {!resultsPage ? 
      <div id='MainGame-Container' style={{backgroundColor: styleMain['tertiaryColor']['backgroundColor']}}>
        <div style={{color: styleMain['secondaryColor']['backgroundColor']}} id='Question-Container'>
          {pokemonThree ? <Question chosenMon={chosenMon} pokemonOne={pokemonOne.moves} pokemonTwo={pokemonTwo.moves} pokemonThree={pokemonThree.moves} /> : null}
        </div>
        <div id='PokeCard-Container' style={{color: styleMain['secondaryColor']['backgroundColor']}}>
          {(pokemonOne && pokemonTwo && pokemonThree) ? <div  id='card-container' > <PokeCard styleMain={styleMain} trigger={triggerOne} handleAnswer={handleAnswer}  delay={0}  chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokemonOne.moves} name={pokemonOne.name} sprite={pokemonOne.sprites.front_default} type={pokemonOne.types} /> </div> : null}
          {(pokemonTwo && pokemonOne && pokemonThree )? <div  id='card-container'> <PokeCard styleMain={styleMain} trigger={triggerTwo} handleAnswer={handleAnswer} delay={0.35} chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokemonTwo.moves} name={pokemonTwo.name} sprite={pokemonTwo.sprites.front_default} type={pokemonTwo.types} /> </div>: null}
          {(pokemonThree && pokemonOne && pokemonTwo )? <div  id='card-container'> <PokeCard styleMain={styleMain} trigger={triggerThree} handleAnswer={handleAnswer} delay={0.7} chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokemonThree.moves} name={pokemonThree.name} sprite={pokemonThree.sprites.front_default} type={pokemonThree.types} /> </div> : null}
        </div>
        <div id='Score-Container'>
          <div id='HighScore-Main'>
            <h3>Highscore: {highScore}</h3>
          </div>
          <div id='streak-container'>
           <Streak streak={streak}/>
          </div>
            
        </div>
      </div>

      :
      <div id='ResultsPage-Container'>
          <div id='Your-Score'><Streak streak={streak}/></div>
          <div id='Highscore-Container'></div>
          <div id='PlayAgain-Container'>
            <button onClick={() => {
              setTimeout(() => {
                setStreak(0);
                navigation('/');
                setResultsPage(false);
              },2500)
            }}>Try Again</button>
          </div>
      </div>
      }
    </div>
  );
}

