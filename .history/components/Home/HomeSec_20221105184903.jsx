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
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 110 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura2.png")] text-transparent'>
                  <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The breathe of balance
                  </div>
                  <div className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>
                  Muoversi grazie al vento è un viaggio verso le nostre radici,<br/> è un legame intimo con una Natura divina, <br/>misteriosa ed affascinante,<br/> quella stessa Natura da cui tutto si trasforma e continua a vivere, <br/>noi compresi.<br/>
                  Tutto è in sintonia quando la barca danza insieme al vento.
                  </div>
              </motion.div>
    </AnimatePresence>
  )
}

export default HomeSec