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

        <div className='flex items-center h-[1000px] bg-schedir-blue'>
            <div ref={ref} className='container flex mx-5'>
                <motion.div
                style={{y}}
                className='justify-center items-center mx-auto'>
                    <h1 className='bg-clip-text 
                    bg-gradient-to-r from-schedir-red via-schedir-yell to-schedir-green 
                    text-trasparent text-[3em]'>Testwo</h1>
                    <span className='text-schedir-green text-[1.5em]'>testo di prova</span>
                </motion.div>
            </div>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1