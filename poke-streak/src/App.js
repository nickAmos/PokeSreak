
import './Style/App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import MainGame from './Components/MainGame';
import Results from './Components/Results';
import { useState } from 'react';

function App() {

  /*Changeable themes */
  const defaultTheme = {backgroundColor: 'grey'}
  const turtwigTheme = {backgroundColor: 'green'}
  const piplupTheme = {backgroundColor: 'blue'}
  const chimcharTheme = {backgroundColor: 'orange'}

  const [highscore, setHighscore] = useState(0);

  const [styleHome, setStyleHome] = useState(defaultTheme);
  const [styleMain, setStyleMain] = useState(defaultTheme);
  const [styleResults, setStyleResults] = useState(defaultTheme);

  
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



  const getHighScore = (highscore) => {
      setHighscore(highscore);
  }

  
  return (
    <div className="App"> 
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home styleHome={styleHome} changeTheme={changeTheme}/>} />
        <Route path='/MainGame' element={<MainGame styleMain={styleMain} getHighScore={getHighScore}/>} />
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