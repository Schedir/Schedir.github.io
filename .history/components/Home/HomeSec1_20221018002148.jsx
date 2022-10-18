import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <article className='h-[1000px] sticky top-[40%] mx-auto '>
            <div>
                <h2 
                className='text-center text-[40px] md:text-[80px] font-bold'>Intro</h2>
                <div className='text-center text-schedir-green text-[1.5em]'>testo di prova</div>
            </div>
            <textcont className='will-change-transform'>
                <img 
                
                src="/media/hero_background_medium.png"/>
            </textcont>
        </article>

    </AnimatePresence>
  )
}

export default HomeSec1