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

        <div className='flex items-center bg-schedir-blue -z-20 my-[20vh] mx-[10%]'>
            <div ref={ref} className='container flex justify-start mx-5 '>

                <motion.div 
                style={{y}}
                className=' left-[10vw]'>
                    <h2 
                    className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The Importance of being FOREIGNERS</h2>
                    <span className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>testo di prova</span>
                </motion.div>
            </div>
            <motion.div
                    className='flex justify-center'>
                    <img 
                    src='LogMedia/box-1.jpg' width="70%"/>
                </motion.div>
        </div>

    </>
  )
}

export default HomeSec2