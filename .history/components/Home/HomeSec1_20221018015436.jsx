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

        <div className='h-[3000px] mx-auto'>
            {/* <div className={'translate-x-[' + scrollYProgress + ']'}>
                <img
                className='mx-auto'
                style={{width:'500px'}}
                src="/media/hero_background_medium.png"/>
                <img
                className='mx-auto rotate-180'
                style={{width:'500px'}}
                src="/media/hero_background_medium.png"/>
            </div> */}
            <article className='sticky top-[30%]'>
                <h2 
                className='text-center text-transparent text-[40px] md:text-[80px] font-bold '>Intro</h2>
                <div className='text-center text-schedir-green text-[1.5em]'>testo di prova testo di prova testo di prova testo di prova
                </div>
            </article>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1