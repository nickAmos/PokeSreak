import {useNavigate} from 'react-router-dom';


export default function Results() {

    const navigation = useNavigate();

    return(

        <>
        <button onClick={() => {
            navigation('/')
        }}>Go Home</button>
        </>
    )
}