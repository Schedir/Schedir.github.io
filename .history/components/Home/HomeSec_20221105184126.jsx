import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  return (
    <AnimatePresence>

        <div className='flex h-screen items-center justify-center'>
            <motion.h1 
            style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
            className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Exploring Life</motion.h1>
        </div>
        <div className='text-center bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell \\bg-clip-text text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>
              Un viaggio inclusivo alla scoperta di storia, cultura, natura
        </div>
    </AnimatePresence>
  )
}

export default HomeSec