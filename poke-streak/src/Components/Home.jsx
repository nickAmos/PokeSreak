import {useNavigate} from 'react-router-dom';
import '../Style/Home.css';
import { motion } from "framer-motion";
import { starters } from '../Starters';


export default function Home ({changeTheme, styleHome}) {

    const navigation = useNavigate()

    return(
        <div style={styleHome['primaryColor']} id='Home-mainsection'>
            <div id='left-side'>
                <div id='theme-name-container'>
                    <div id='change-theme-txt'>
                        <h2>Change theme below</h2>
                    </div>
                    <div id='poketheme-container'>
                        <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} id='theme-child' onClick={() => changeTheme('turtwig')}><img alt={'pokemon'} src={starters[0]['url']}/></motion.div>
                        <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} id='theme-child' onClick={() => changeTheme('chimchar')}><img alt={'pokemon'} src={starters[1]['url']}/></motion.div>
                        <motion.div whileHover={{scale: 1.1,transition: { type: "spring",stiffness: 260,damping: 20 },}}whileTap={{ scale: 0.9 }} id='theme-child' onClick={() => changeTheme('piplup')}><img alt={'pokemon'} src={starters[2]['url']}/></motion.div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: styleHome['tertiaryColor']['backgroundColor']}} id='right-side'>
                <div id='button-txt-container'>
                    <div id='button-container' 
                        onClick={() => {
                            navigation('/MainGame')}
                    }>
                        <button style={{backgroundColor: styleHome['secondaryColor']['backgroundColor'], border: styleHome['primaryColor']['border']}} id='newgame-button'>
                            <h3 style={{color: styleHome['tertiaryColor']['backgroundColor']}}>New Game</h3>
                            </button>
                    </div>
                    {/*only display number high score when width is low*/}
                    <div id='Contact-text-container'>
                            <p>Contact Developer</p>
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