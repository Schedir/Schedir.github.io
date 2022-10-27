import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, MotionValue} from 'framer-motion'

const HomeSec = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };


  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  return (
    <AnimatePresence>

        <div className='flex h-screen items-center justify-center'>
            <motion.h1 
            style={{scale:useTransform(springscroll, [0, 1], [1, 3])}} 
            className='text-center text-transparent text-[40px] md:text-[80px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Intro</motion.h1>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec