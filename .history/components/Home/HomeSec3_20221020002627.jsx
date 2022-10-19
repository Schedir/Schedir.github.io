import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'

const HomeSec3 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className="h-[1000px] items-center justify-center my-auto mx-auto">

          <motion.span 
          style={{backgroundPositionY:useTransform(scrollYProgress, [0, 1], [3000 + 'px', 0 + 'px'])}} 
          className='bg-top bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
            <div className='sticky top-[30%] text-center text-red text-[40px] md:text-[80px] font-bold'>
              Sea of culture <br/> 
              Sea of culture
              Sea of culture <br/>
            </div>
          </motion.span>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec3