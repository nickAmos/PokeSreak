import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import '../Style/PokeCard.css';



export default function Reveal({ children, posX, posY, delay}) {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});
    const mainControl = useAnimation();


    useEffect(() => {
        if (isInView) {
            mainControl.start({opacity: 1, y: 0, x: 0})
        } 
    }, [isInView]);

    return (
      <div ref={ref} id="clickable-container">
        <motion.div
          initial= {{opacity:0, y: posY, x: posX}}
          animate= {mainControl}
          transition={{
            duration: 0.8, 
            ease: [0, 0.71, 0.2, 1.01],
            delay: delay
            }}
            
        >
          {children}
        </motion.div>
      </div>
    );
  }