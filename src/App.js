
import './Style/App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import MainGame from './Components/MainGame';

import { useState, useEffect } from 'react';
import { starters } from './Starters';

function App() {

  const turtwigTheme = {
    'primaryColor':{backgroundColor: '#05472A', border: ' 2px solid #4B5320'},
    'secondaryColor': {backgroundColor: '#808000'},
    'tertiaryColor': {backgroundColor: '#BCB88A'},
    'evo1': starters[1],
    'evo2': starters[4],
    'evo3': starters[7]
  }
  const piplupTheme = {'primaryColor':{backgroundColor: '#191970', border: ' 2px solid #191970'},
  'secondaryColor': {backgroundColor: '#475877'},
  'tertiaryColor': {backgroundColor: '#B6D0E2'},
  'evo1': starters[3],
  'evo2': starters[6],
  'evo3': starters[9]}

  const chimcharTheme = {'primaryColor':{backgroundColor: '#CC5500', border: ' 2px solid #CC5500'},
  'secondaryColor': {backgroundColor: '#4d3b34',border: ' 2px solid #4d3b34'},
  'tertiaryColor': {backgroundColor: '#FFAE42'},
  'evo1': starters[2],
  'evo2': starters[5],
  'evo3': starters[8]}

  const [highscore, setHighscore] = useState(0);


  const [styleHome, setStyleHome] = useState(turtwigTheme);
  const [styleMain, setStyleMain] = useState(turtwigTheme);
  const [starter, setStarter] = useState(null);


  useEffect(() => {
    const data = window.localStorage.getItem('STYLEHOME');
    if (data !== null) {
    setStyleHome(JSON.parse(data))
   
    }
  }, [])
  
    useEffect(() => {
        window.localStorage.setItem('STYLEHOME', JSON.stringify(styleHome));
    }, [styleHome]);


const sendHighScore = (highscore) => {
  setHighscore(highscore);
} 


  
const changeTheme = (theme) => {
  if (theme === 'turtwig') {
    setStarter('turtwig');
    setStyleHome(turtwigTheme);
    setStyleMain(turtwigTheme);

    console.log('turtwig... ran')
  } else if (theme === 'piplup') {
    setStyleHome(piplupTheme);
    setStarter('piplup');
    setStyleMain(piplupTheme);

    console.log('piplip... ran')
  } else if (theme === 'chimchar') {
    setStyleHome(chimcharTheme);
    setStarter('chimchar');
    setStyleMain(chimcharTheme);

    console.log('chimchar... ran')
  }
}

 
  return (
    <div className="App"> 
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home highscore={highscore} styleHome={styleHome} changeTheme={changeTheme}/>} />
        <Route path='/MainGame' element={<MainGame starter={starter} styleMain={styleMain} sendHighScore={sendHighScore}/>} />
      </Routes>
  
      </header>
    </div>
  );
}

export default App;

/*
<div className="App">
      <Routes>
        <Route  path='/' element={<Home cart={cart} pushCart={pushCart} changeShoe={changeShoe}filterCart={filterCart} subtotal={subtotal} />}/>
        <Route path='/selectedShoe' element={<SelectedShoe pushCart={pushCart} changeShoe={changeShoe} cart={cart} shoe={selectedShoe}/>} />
        <Route path='/checkout' element={<Checkout cart={cart} filterCart={filterCart} subtotal={subtotal} changeShoe={changeShoe}/>}/>
      </Routes>

    </div> */