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

        <div className='flex items-center h-[1000px] '>
            <div ref={ref} className=' container justify-center flex mx-5'>
                <motion.article
                // style={{y}}
                className='sticky top-0 mx-auto'>
                    <h2
                    className='text-center text-[40px] md:text-[80px] font-bold'>Intro</h2>
                    <span className='text-schedir-green text-[1.5em]'>testo di prova</span>
                </motion.article>
            </div>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1