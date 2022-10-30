import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'

const HomeSec3 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className="h-[1000px] items-center justify-center my-auto mx-auto">
            {/* <div className="bg-[url('/media/sfondo.jpg')] bg-cover"> */}
                <div className='text-center text-red text-[40px] md:text-[80px] font-bold'>
                    <div 
                    style={{scale:useTransform(scrollYProgress, [0, 1], [1, 3])}} 
                    className='text-schedir-yell'>
                      Sea of culture 
                    </span>
                </div> 
                {/* <img src='/media/sfondosfumatura.jpg'/> */}

            {/* </div> */}

        </div>

    </AnimatePresence>
  )
}

export default HomeSec3