import {useNavigate} from 'react-router-dom';
import '../Style/Home.css';
export default function Home ({changeTheme, styleHome}) {

    const navigation = useNavigate()

    return(
        <div style={styleHome} id='Home-mainsection'>
            <div id='left-side'>
                <div id='theme-name-container'>
                    <div id='change-theme-txt'>
                        <p>Change theme below</p>
                    </div>
                    <div id='poketheme-container'>
                        <div id='theme-child' onClick={() => changeTheme('turtwig')}>turtwig</div>
                        <div id='theme-child' onClick={() => changeTheme('piplup')}>piplup</div>
                        <div id='theme-child' onClick={() => changeTheme('chimchar')}>chimchar</div>
                    </div>
                </div>
            </div>

            <div id='right-side'>
                <div id='button-txt-container'>
                    <div id='button-container'>
                            button will fill this space
                    </div>
                    {/*only display number high score when width is low*/}
                    <div id='HighScore-text-container'>
                            high score here
                    </div>
                </div>
         
            </div>
        </div>
    )
}



/*   OLD BUTTON
 <button onClick={() => {
                navigation('/MainGame')
            }}>Go to game</button> */