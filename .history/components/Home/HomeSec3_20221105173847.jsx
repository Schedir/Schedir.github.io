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

              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 110 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
                  The breathe of balance
              </motion.div>
              
          </div> 
        </div>

    </AnimatePresence>
  )
}

export default HomeSec3