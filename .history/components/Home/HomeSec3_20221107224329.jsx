import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec3 = () => {
  
    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
    const y = useTransform(springscroll, [0, .3], [150, 0])
  return (
    <AnimatePresence>
      <div className='relative bg-schedir-blue'>
        <div ref={ref} className=" h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-right mx-[10%]'>
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
              
          </div> 
          <motion.div 
          className='max-w-lg max-h-lg mx-[10vw] mt-[40vh] 
                     rounded-md overflow-hidden object-cover backdrop-blur' style={{y}}>
            <motion.img 
            style={{opacity:useTransform(springscroll, [0, .5, 1], [0, 1, 0])}} src='/media/IMG_1367.png'/>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default HomeSec3