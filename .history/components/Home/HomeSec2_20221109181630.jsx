import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <div>
      <motion.img 
            style={{translateX:useTransform(springscroll, [0,.8], [0, 0])}} src='/HomeMedia/IMG_costa_2.png' className='sticky bottom-0 mt-[-50vh] z-30'/>
            
      </div>
        <div className=' bg-schedir-blue -z-20 mt-[40vh] mb-[-40vh] mx-[10%]'>

        </div>

    </>
  )
}

export default HomeSec2