import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const Homesec2 = () => {    
  
    function useParallax(value, distance) {
      return useTransform(value, [0, 1], [-distance, distance]);
    };

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
    });
    const { scrollYProgress1 } = useScroll();
    
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(springscroll, -500);
    const y2 = useParallax(springscroll, 400);
      
    return (
    <>
      <div ref={ref} className='z-20 mt-[-50vh] lg:mt-[110vh] mb-[100vh]'>
        <div className='flex justify-center text-center z-30 mb-[0vh] lg:mr-[-13%]'>
          <motion.div  
            className='fixed top-[35vh] lg:top-[17vh]'
            style={{opacity:useTransform(scrollYProgress, 
              [0, .3, .8, 1],
              [0 + '%', 100 + '%',100 + '%', 0 + '%'])}} >
              <motion.h2 
              className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold leading-6'>
              The breathe<br/> &nbsp; &nbsp; 
              &nbsp; &nbsp; of balance</motion.h2>
              <motion.span 
              className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] '>
                  Moving together with the wind<br/> is a journey towards our roots.<br/>
                  It is an intimate bond with a divine,<br/>
                  mysterious and fascinating Nature.<br/>
                  The same Nature from which everything<br/> is transformed and keeps living,<br/> including us.<br/>
                  Everything is in harmony<br/> when the boat dances with the wind.
              </motion.span>
          </motion.div>
        </div>
            
      </div>
      <div className='mb-[50vh] mt-[-130vh] -z-10 '>
        <motion.div
          style={{y}} 
          className='flex justify-start mx-[5vw] lg:mx-[5vw]'>
            <div className='container h-[20vh] w-[40vw] lg:h-[40vh] lg:w-[25vw] bg-clip-padding bg-[url("/HomeMedia/IMG_2.png")] bg-right-bottom bg-cover'>
            </div>
        </motion.div>
        <motion.div
          className='flex justify-end lg:mr-[7vw] '>
            <motion.div 
              // style={{y2}} 
              className='container h-[30vh] w-[20vw] lg:h-[70vh] lg:w-[13vw] bg-clip-padding bg-[url("/HomeMedia/IMG_3.png")] bg-bottom bg-cover z-[10]'>
            </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Homesec2