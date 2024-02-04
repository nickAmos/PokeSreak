import {useNavigate} from 'react-router-dom';

export default function Home ({changeTheme, styleHome}) {

    const navigation = useNavigate()

    return(
        <div style={styleHome}>
        <div>
            <div onClick={() => changeTheme('turtwig')}>turtwig</div>
            <div onClick={() => changeTheme('piplup')}>piplup</div>
            <div onClick={() => changeTheme('chimchar')}>chimchar</div>
        </div>
        <button onClick={() => {
            navigation('/MainGame')
        }}>Go to game</button>
        </div>
    )
}