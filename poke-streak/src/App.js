
import './Style/App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import MainGame from './Components/MainGame';
import Results from './Components/Results';
import { useState } from 'react';

function App() {

  /*Changeable themes */
  const defaultTheme = {
    'primaryColor':{backgroundColor: '#3b444b', border: ' 2px solid #3b444b'},
    'secondaryColor': {backgroundColor: 'white'},
    'tertiaryColor': {backgroundColor: 'aliceblue'}
  }
  const turtwigTheme = {
    'primaryColor':{backgroundColor: '#05472A', border: ' 2px solid #4B5320'},
    'secondaryColor': {backgroundColor: '#808000'},
    'tertiaryColor': {backgroundColor: '#BCB88A'}
  }
  const piplupTheme = {'primaryColor':{backgroundColor: '#191970', border: ' 2px solid #191970'},
  'secondaryColor': {backgroundColor: '#475877'},
  'tertiaryColor': {backgroundColor: '#B6D0E2'}}

  const chimcharTheme = {'primaryColor':{backgroundColor: '#CC5500', border: ' 2px solid #CC5500'},
  'secondaryColor': {backgroundColor: '#4d3b34',border: ' 2px solid #4d3b34'},
  'tertiaryColor': {backgroundColor: '#FFAE42'}}

  const [highscore, setHighscore] = useState(0);

  const [styleHome, setStyleHome] = useState(defaultTheme);
  const [styleMain, setStyleMain] = useState(defaultTheme);
  const [styleResults, setStyleResults] = useState(defaultTheme);


const sendHighScore = (highscore) => {
  setHighscore(highscore);
} 

  
const changeTheme = (theme) => {
  if (theme === 'turtwig') {
    setStyleHome(turtwigTheme);
    setStyleMain(turtwigTheme);
    setStyleResults(turtwigTheme);
    console.log('turtwig... ran')
  } else if (theme === 'piplup') {
    setStyleHome(piplupTheme);
    setStyleMain(piplupTheme);
    setStyleResults(piplupTheme);
    console.log('piplip... ran')
  } else if (theme === 'chimchar') {
    setStyleHome(chimcharTheme);
    setStyleMain(chimcharTheme);
    setStyleResults(chimcharTheme);
    console.log('chimchar... ran')
  }
}

 
  return (
    <div className="App"> 
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home highscore={highscore} styleHome={styleHome} changeTheme={changeTheme}/>} />
        <Route path='/MainGame' element={<MainGame styleMain={styleMain} sendHighScore={sendHighScore}/>} />
        <Route path='/Results' element={<Results styleResults={styleResults} highscore={highscore}/>} />
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