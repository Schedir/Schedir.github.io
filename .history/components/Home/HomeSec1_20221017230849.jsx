import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, MotionValue} from 'framer-motion'

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className='h-[1000px] sticky top-[8%] mx-auto ' style={{y}}>
            <article></article>
                <h2
                className='text-center text-[40px] md:text-[80px] font-bold'>Intro</h2>
                <div className='text-center text-schedir-green text-[1.5em]'>testo di prova</div>

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1