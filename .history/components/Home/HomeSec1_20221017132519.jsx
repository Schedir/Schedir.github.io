import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, MotionValue} from 'framer-motion'

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
  

    const y = useParallax(scrollYProgress, 100);

  return (
    <AnimatePresence>

        <div className='flex items-center h-[1000px] bg-gradient-to-t from-schedir-blue via-schedir-yell to-schedir-schedir- '>
            <div className='container flex mx-5'>
                <motion.div
                    className='flex justify-center'>
                    <img 
                    src='media/box-1.jpg' width="50%"/>
                </motion.div>
                <motion.div 
                style={{y}}
                className='absolute left-[65%]'>
                    <h2 className=' text-schedir-blue bg-clip text-[3em] text-bold'>Testo</h2>
                    <span className='text-schedir-blue text-[1.5em]'>testo di prova</span>
                </motion.div>
            </div>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1