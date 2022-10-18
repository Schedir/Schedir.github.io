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

        <article className='h-[1000px] mx-auto'>
                <div 
                    className='sticky top-1text-center text-transparent text-[40px] md:text-[80px] font-bold'>Intro testo di prova testo di prova testo di prova testo di prova
                </div>
        </article>

    </AnimatePresence>
  )
}

export default HomeSec1