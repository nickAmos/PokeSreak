import {useNavigate} from 'react-router-dom';

export default function Home () {

    const navigation = useNavigate()

    return(
        <>
        <button onClick={() => {
            navigation('/MainGame')
        }}>Go to game</button>
        </>
    )
}