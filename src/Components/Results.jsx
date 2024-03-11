import {useNavigate} from 'react-router-dom';
import PokeCard from './PokeCard';


export default function Results({highscore, chosenMon, styleResults}) {

    const navigation = useNavigate();

    return(

        <div style={styleResults}>
        <h2>{highscore}</h2>
        <button onClick={() => {
            navigation('/')
        }}>Go Home</button>
        </div>
    )
}