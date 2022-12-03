import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const Homesec21 = () => {    
  
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

    const y = useParallax(springscroll, -300);
    const y2 = useParallax(springscroll, 400);
      
    return (
    <>
      <div ref={ref} className='z-20 mt-[-50vh] lg:mt-[90vh] mb-[100vh]'>
        <div className='flex justify-center text-right z-30 mb-[0vh] mr-[-10%]'>
          <motion.div  
            className='fixed top-[35vh] lg:top-[23vh]'
            style={{opacity:useTransform(scrollYProgress, 
              [0, .3, .8, 1],
              [0 + '%', 100 + '%',100 + '%', 0 + '%'])}} >
              <motion.h2 
              className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
              Sea of sharing cultures</motion.h2>
              <motion.span 
              className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] '>
              Every land reached is the beginning of many lives:  <br/>
              the relationship between the new land and the foreigner  <br/> 
              is a mutual gift. <br/>
              New smells, new sounds, new flavors,<br/>
              new relationships, new stories.<br/>
              Arriving by sea in a new land and feeling like a foreigner <br/>
              is the privilege that allows us to be free,<br/>
              to include and to transform ourselves into something new.
              </motion.span>
          </motion.div>
        </div>
            
      </div>
      <div className='mb-[70vh] -z-10'>
        <motion.div
          style={{y}} 
          className='flex justify-start mx-[5vw] lg:mx-[5vw] mt-[-90vh]'>
            <div className='container h-[20vh] w-[40vw] lg:h-[40vh] lg:w-[15vw] bg-clip-padding bg-[url("/HomeMedia/IMG_2.png")] bg-right-bottom bg-cover'>
            </div>
        </motion.div>
        <motion.div
          className='flex justify-end mx-[5vw] lg:mx-[10vw] mt-[-20vh] mr-[20vw]'>
            <motion.div 
              style={{y2}} 
              className='container h-[30vh] w-[20vw] lg:h-[60vh] lg:w-[15vw] bg-clip-padding bg-[url("/HomeMedia/IMG_3.png")] bg-bottom bg-cover z-[10]'>
            </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Homesec21