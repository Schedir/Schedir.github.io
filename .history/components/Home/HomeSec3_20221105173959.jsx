import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec3 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

  return (
    <AnimatePresence>

        <div ref={ref} className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-center text-red text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 110 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
                  <div>
                    The breathe of balance
                  </div>
              </motion.div>
              
          </div> 
        </div>

    </AnimatePresence>
  )
}

export default HomeSec3