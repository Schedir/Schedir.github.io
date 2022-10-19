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

        <div ref={} className="h-[1000px] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[30%] text-center text-red text-[40px] md:text-[80px] font-bold mx-[4rem]'>
              <motion.span 
                style={{backgroundPositionY:useTransform(scrollYProgress, [0, 1], [0 + '%', 100 + '%'])}} 
                className='bg-cover bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
                  Sea of culture 
                  Sea of culture
                  Sea of culture
              </motion.span>
          </div> 
        </div>

    </AnimatePresence>
  )
}

export default HomeSec3