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

        <div className='flex h-[3000px] linear-text'>
            <div ref={ref} className='container justify-center flex mx-5'>
                <motion.div
                style={{y}}
                className='fixed linear-text top-10 mx-auto'>
                    <h2
                    className='text-center text-[40px] md:text-[80px] font-bold'>Intro</h2>
                    <span className='text-schedir-green text-[1.5em]'>testo di prova</span>
                </motion.div>
            </div>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1