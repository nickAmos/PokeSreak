
import { useState, useEffect } from 'react';
import '../Style/App.css';
import Fetch from './fetch';
import PokeCard from './PokeCard';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
import '../Style/MainGame.css';
import '../Style/Results.css';

import { starters } from '../Starters';


export default function MainGame({styleMain, starter}) {

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
  const [newHighScore, setNewHighScore] = useState(false);
  const [loadQuestion, setLoadQuestion] = useState(false);

  const [styleMainState, setStyleMainState] = useState(styleMain);

  const navigation = useNavigate();


  const handleQuestionLoad = () => {
    setLoadQuestion(!loadQuestion);
  }
    

  let evo1;
  let evo2;
  let evo3;

  let evo1Comment = null;
  let evo2Comment = null;
  let evo3Comment = null;

if (streak < 3) {
  evo1Comment = <p>You can do better!</p>
} else if (streak > 2 && streak < 5) {
  evo2Comment = <p>Impressive!</p>
} else if (streak > 4) {
  evo3Comment = <p>That was epic</p>
}
 
if (starter === 'turtwig') {
  console.log('i ran');
  evo1 = <img alt='pokemon' src={starters[0]['url']}/>
  evo2 = <img alt='pokemon' src={starters[3]['url']}/>
  evo3 = <img alt='pokemon' src={starters[6]['url']}/>
}

if (starter === 'chimchar') {
  console.log('i ran');
  evo1 = <img alt='pokemon' src={starters[1]['url']}/>
  evo2 = <img alt='pokemon' src={starters[4]['url']}/>
  evo3 = <img alt='pokemon' src={starters[7]['url']}/>
}

if (starter === 'piplup') {
  console.log('i ran');
  evo1 = <img alt='pokemon' src={starters[2]['url']}/>
  evo2 = <img alt='pokemon' src={starters[5]['url']}/>
  evo3 = <img alt='pokemon' src={starters[8]['url']}/>
}
 
 
 

/*
function handleQuestionAnimate() {
  animate(scope.current, 
    {opacity:0},
    {
      duration: 0.5,
      type: "spring"  
      })
    setTimeout(() => {
      animate(scope.current,
      {opacity:1},
    {
      duration: 0.5,
      type: "spring"  
      })
    },2000)
} */

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
      setNewHighScore(true);
      setHighScore(streak);
  }
}
const handleReset = ( ) => {
  setPokemonOne(false);
  setPokemonTwo(false);
  setPokemonThree(false);
}

const handleAnswer = (answer, selection) => {
  //handleQuestionAnimate();
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
    setRefetch(!refetch);
    setTimeout(() => {
      setTriggerOne(false);
      setTriggerTwo(false);
      setTriggerThree(false);
    },1000);
  } else {
    console.log('incorrect');
    handleHighscore(streak);
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
    setTimeout(() => {
      setResultsPage(true);
      setRefetch(!refetch);
    },2000);
  }
}
  
  const placeholder_style_child = {
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
  }
  
  return (
    <div id='Main-Results-Container' style={{backgroundColor: styleMain['primaryColor']['backgroundColor']}}>
      <Fetch handleQuestionLoad={handleQuestionLoad}  reset={handleReset} refetch={refetch} getData={getData}/>
      {!resultsPage ? 
      <div id='MainGame-Container' style={{backgroundColor: styleMain['tertiaryColor']['backgroundColor']}}>
        <div id='questionComponentContainer'>
        {loadQuestion ? 
        <div style={{color: styleMain['secondaryColor']['backgroundColor']}} id='Question-Container'>
          
          {pokemonThree ? <Question chosenMon={chosenMon} pokemonOne={pokemonOne.moves} pokemonTwo={pokemonTwo.moves} pokemonThree={pokemonThree.moves} /> : null}
          {/* CORRECT! // INCORRECT! component to be animated in while Question is opacity 0, just reverse animations
          to give time for the next question to load.  */}
          
        </div>
        : 
        <div id='poke-ball-container'><img id='spinningBall' alt='pokeball' src={require('../Images/pokeBall.png')} /></div>}
        </div>
        <div id='PokeCard-Container' style={{color: styleMain['secondaryColor']['backgroundColor']}}>
          {(pokemonOne && pokemonTwo && pokemonThree) ? <div onClick={() => handleQuestionLoad()}  id='card-container' > <PokeCard styleMain={styleMain} trigger={triggerOne} handleAnswer={handleAnswer}  delay={0}  chosenMon={chosenMon} id={1} style={placeholder_style_child} movepool={pokemonOne.moves} name={pokemonOne.name} sprite={pokemonOne.sprites.front_default} type={pokemonOne.types} /> </div> : null}
          {(pokemonTwo && pokemonOne && pokemonThree )? <div onClick={() => handleQuestionLoad()}  id='card-container'> <PokeCard styleMain={styleMain} trigger={triggerTwo} handleAnswer={handleAnswer} delay={0.35} chosenMon={chosenMon} id={2} style={placeholder_style_child} movepool={pokemonTwo.moves} name={pokemonTwo.name} sprite={pokemonTwo.sprites.front_default} type={pokemonTwo.types} /> </div>: null}
          {(pokemonThree && pokemonOne && pokemonTwo )? <div onClick={() => handleQuestionLoad()}  id='card-container'> <PokeCard styleMain={styleMain} trigger={triggerThree} handleAnswer={handleAnswer} delay={0.7} chosenMon={chosenMon} id={3} style={placeholder_style_child} movepool={pokemonThree.moves} name={pokemonThree.name} sprite={pokemonThree.sprites.front_default} type={pokemonThree.types} /> </div> : null}
        </div>
        <div id='Score-Container'>
          <div id='HighScore-Main'>
            <h3>Highscore: {highScore}</h3>
          </div>
          <div id='streak-container'>
            <h3>Current Streak: {streak}</h3>
          </div>
            
        </div>
      </div>

      :
      <div id='ResultsPage-Container' style={{backgroundColor: styleMain['tertiaryColor']['backgroundColor']}}>
        <div id='mons-container'>
            <div id='evo1'>
              {evo1}
              {evo1Comment ? <div id='evo1Comment'>{evo1Comment}</div> : null}
              </div>
            <div id='evo2'>
              {evo2}
              {evo2Comment ? <div id='evo2Comment'>{evo2Comment}</div> : null}
              </div>
            <div id='evo3'>
              {evo3}
              {evo3Comment ? <div id='evo3Comment'>{evo3Comment}</div> : null}
              </div>
          </div>
        {!newHighScore ? 
          <div id='Your-Score'>
            <h3>You scored: {streak}</h3>
            <h3>Highscore: {highScore}</h3>
          </div>
          :
          <div id='Your-Score'>
          <h3>New highscore is {streak}!</h3>
        </div>
           }

          
         
          <div id='PlayAgain-Container'>
          <button style={{backgroundColor: styleMain['secondaryColor']['backgroundColor'], border: styleMain['primaryColor']['border']}} id='newgame-button-Main'  
           onClick={() => {
           
                setStreak(0);
                navigation('/');
                setResultsPage(false);
                setNewHighScore(false);
             
            }}>Return home</button>
          </div>
      </div>
      }
    </div>
  );
}


/* new feat 
 <button style={{backgroundColor: styleMain['secondaryColor']['backgroundColor'], border: styleMain['primaryColor']['border']}} id='newgame-button-Main'  
              onClick={() => {
                setTimeout(() => {
                  setStreak(0);
                  setNewHighScore(false);
                  navigation('/');
                },2500)}}>
                  <h3 style={{color: styleMain['tertiaryColor']['backgroundColor']}}>New Game</h3>
            </button>

            <button style={{backgroundColor: styleMain['secondaryColor']['backgroundColor'], border: styleMain['primaryColor']['border']}} id='newgame-button-Main'>
            <h3 style={{color: styleMain['tertiaryColor']['backgroundColor']}}>Return Home</h3>
            </button> */