import {useNavigate} from 'react-router-dom';
import PokeCard from './PokeCard';


export default function Results({highscore, chosenMon}) {

    const navigation = useNavigate();

    return(

        <>
        <h2>{highscore}</h2>
        <button onClick={() => {
            navigation('/')
        }}>Go Home</button>
        </>
    )
}