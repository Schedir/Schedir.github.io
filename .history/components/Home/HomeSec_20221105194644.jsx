import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  return (
    <AnimatePresence>

        <div className='flex h-[100vh] items-center justify-center'>
            <motion.h1 
            style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
            className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Exploring Life</motion.h1>
        </div>
        <div className="h-[200vh] items-center justify-center my-auto mx-auto mt-[-40vh]">
          <div className='sticky top-[35vh] text-right mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-20 + '%', 110 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura2.png")] text-transparent'>
                  <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold '>
                  Un viaggio inclusivo alla scoperta di storia, cultura, natura
                  </div>
              </motion.div>
              
          </div> 
        </div>
    </AnimatePresence>
  )
}

export default HomeSec