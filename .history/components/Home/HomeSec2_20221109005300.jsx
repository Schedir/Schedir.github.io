import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, MotionValue} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
  

    const y = useParallax(scrollYProgress, 600);

  return (
    <>

        <div className='flex items-center bg-schedir-blue -z-20 my-[20vh]'>
            <div ref={ref} className='container flex mx-5 '>
                <motion.div
                    className='flex justify-center'>
                    <img 
                    src='LogMedia/box-1.jpg' width="50%"/>
                </motion.div>
                <motion.div 
                style={{y}}
                className='absolute left-[65%]'>
                    <h2 
                    className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[3em] text-bold'>
                      Testo</h2>
                    <span className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[3em] text-bold '>testo di prova</span>
                </motion.div>
            </div>
        </div>

    </>
  )
}

export default HomeSec2