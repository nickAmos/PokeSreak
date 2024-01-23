
import './Style/App.css';
import { Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import MainGame from './Components/MainGame';
import Results from './Components/Results';

function App() {

  
  return (
    <div className="App"> 
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/MainGame' element={<MainGame/>} />
        <Route path='/Results' element={<Results/>} />
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