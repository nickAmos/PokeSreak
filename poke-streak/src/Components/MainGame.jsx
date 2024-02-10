
import { useState, useEffect } from 'react';
import '../Style/App.css';
import Fetch from './fetch';
import PokeCard from './PokeCard';
import Question from './Question';
import { useNavigate } from 'react-router-dom';
import '../Style/MainGame.css';
import '../Style/Results.css';
import { useAnimate } from "framer-motion"
import { starters } from '../Starters';


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
  const [newHighScore, setNewHighScore] = useState(false);

  const navigation = useNavigate();

  const [scope, animate] = useAnimate();

  let num1;
  let num2;
  let num3;

  if (styleMain === 'turtwig') {
      num1 = 1;
      num2 = 4;
      num3 = 7;
  } else if (styleMain === 'chimchar') {
      num1 = 2;
      num2 = 6;
      num3 = 8;
  } else {
      num1 = 3;
      num2 = 6;
      num3 = 9;
  }


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
}

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
  handleQuestionAnimate();
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
      <Fetch reset={handleReset} refetch={refetch} getData={getData}/>
      {!resultsPage ? 
      <div id='MainGame-Container' style={{backgroundColor: styleMain['tertiaryColor']['backgroundColor']}}>
        <div style={{color: styleMain['secondaryColor']['backgroundColor']}} id='Question-Container'>
          <div ref={scope}  id='questionComponentContainer'>
          {pokemonThree ? <Question chosenMon={chosenMon} pokemonOne={pokemonOne.moves} pokemonTwo={pokemonTwo.moves} pokemonThree={pokemonThree.moves} /> : null}
          {/* CORRECT! // INCORRECT! component to be animated in while Question is opacity 0, just reverse animations
          to give time for the next question to load.  */}
          </div>
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
           {streak}
          </div>
            
        </div>
      </div>

      :
      <div id='ResultsPage-Container' style={{backgroundColor: styleMain['tertiaryColor']['backgroundColor']}}>
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

          <div id='mons-container'>
            <div><img alt='pokemon' src={starters[1]['url']}/></div>
            <div><img alt='pokemon' src={starters[2]['url']}/></div>
            <div><img alt='pokemon' src={starters[3]['url']}/></div>
          </div>
         
          <div id='PlayAgain-Container'>
          <button style={{backgroundColor: styleMain['secondaryColor']['backgroundColor'], border: styleMain['primaryColor']['border']}} id='newgame-button-Main'  
           onClick={() => {
              setTimeout(() => {
                setStreak(0);
                navigation('/');
                setResultsPage(false);
                setNewHighScore(false);
              },2500)
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