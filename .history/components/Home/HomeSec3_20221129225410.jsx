import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec3 = () => {
  
    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useTransform(springscroll, [0, 1], [350, 0])
    
  return (
    <>
      <div className='relative'>
        <div ref={ref} className=" h-[200vh] my-auto mx-auto mt-[-70vh]">
          <div className='sticky top-[30vh] text-left mx-[10%] mt-[30vh] -z-30'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 110 + '%'])}} 
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura2.png")] text-transparent'>
                  <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The breathe of balance
                  </div>
                  <div className='text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px]'>
                  Moving together with the wind is a journey towards our roots.<br/>
                  It is an intimate bond with a divine,<br/>
                  mysterious and fascinating Nature.<br/>
                  The same Nature from which everything is transformed and keeps living,<br/> including us.<br/>
                  Everything is in harmony when the boat dances with the wind.
                  </div>
              </motion.div>
          </div> 

          {/* <div className='flex justify-end'>
            <motion.div 
            className=' max-w-lg max-h-lg mx-[10vw] mt-[60vh] 
                      rounded-md overflow-hidden object-cover' 
                      style={{y}}>
              <motion.img 
              style={{opacity:useTransform(springscroll, [0, .5, 1], [0, 1, 0])}} src='/HomeMedia/IMG_1.png'/>
            </motion.div>
          </div> */}

        </div>
      </div>
      <motion.div style={{scaleX:-1}}>
        <motion.img 
        style={{translateX:useTransform(springscroll, [0,.8], [0, 0])}} src='/HomeMedia/IMG_costa_2.png' className='sticky bottom-[-20vh] mt-[-90vh] z-30'/>
      </motion.div>
    </>
  )
}

export default HomeSec3