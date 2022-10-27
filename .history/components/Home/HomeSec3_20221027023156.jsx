import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec3 = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [350, 0])

  return (
    <AnimatePresence>

        <div className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[30%] text-center text-red text-[40px] md:text-[60px] font-bold mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [0 + '%', 100 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
                  Sea of culture Sea of culture <br/> 
                  Sea of culture <br/> 
                  Sea of culture Sea of culture
              </motion.div>
          </div> 
        </div>

    </AnimatePresence>
  )
}

export default HomeSec3