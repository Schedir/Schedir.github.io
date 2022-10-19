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
            {/* <div className="bg-[url('/media/sfondo.jpg')] bg-cover"> */}
                <motion.div className='sticky top-[30%] text-center text-red text-[40px] md:text-[80px] font-bold'>
                    <motion.span 
                    style={{baclkgr:useTransform(scrollYProgress, [0, 1], [1, 3])}} 
                    className='bg-scroll bg-clip-text bg-[url("/media/sfondosfumatura.jpg")] text-transparent'>
                      Sea of culture 
                    </motion.span>
                </motion.div> 
                {/* <img src='/media/sfondosfumatura.jpg'/> */}

            {/* </div> */}

        </div>

    </AnimatePresence>
  )
}

export default HomeSec3