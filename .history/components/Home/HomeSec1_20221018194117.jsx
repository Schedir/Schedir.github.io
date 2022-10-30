import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'
import { Sticky } from 'react-scroll-motion';

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className="h-screen items-center justify-center my-auto mx-auto">
            <article ref={ref}>

                <div
                className='text-center text-red text-[40px] md:text-[80px] font-bold z-[20] '>
                    Intro testo di prova testo di prova testo di prova testo di prova
                </div>
                <div 
                // style={{scale:useTransform(scrollYProgress, [0, 1], [1, 2])}} 
                className={'mx-auto scale-['+ useTransform(scrollYProgress, [0, 1], [1, 2]) +']'}/>
            </article>

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1