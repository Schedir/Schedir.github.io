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
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(springscroll, -800);

    const boxAnimate={
    offscreen:{x:-100, opacity:0,
      transition: {
        ease: "easeInOut",
        duration: 0.8}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        type:"spring",
        bounce: 0.4,
        ease: "easeInOut",
        duration: 0.8}
    }}

    const txtAnimate={
      offscreen:{opacity:0,
        transition: {
          ease: "easeInOut",
          duration: 0.8}},
      onscreen:{
        opacity:1,
        transition: {
          type:"spring",
          bounce: 0.4,
          ease: "easeInOut",
          duration: 3.8}
      }}

      const boxAnimate2={
        offscreen:{x:80, opacity:0,
          transition: {
            ease: "easeInOut",
            duration: 0.8}},
        onscreen:{
          x:0, 
          opacity:1,
          transition: {
            type:"spring",
            bounce: 0.4,
            ease: "easeInOut",
            duration: 0.8}
        }}
      
    return (
    <>

      <div ref={ref} className='z-20 mt-[0vh] mb-[70vh] '>
            <div className='flex justify-end z-30 mb-[10vh] mr-[7%]'>
              <motion.div  
                className='fixed top-[23vh] left-[10vw]'
                style={{opacity:useTransform(scrollYProgress, 
                  [0, .4,.6, 1],
                  [0 + '%', 100 + '%',100 + '%', 0 + '%'])}} >
                  <motion.h2 
                  className='text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                  Sea of sharing cultures</motion.h2>
                  <motion.span 
                  className='text-transparent bg-clip-text text-left  background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] '>
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
            <div>
                <motion.div
                  className='mt-[-20vh] flex justify-end mx-[10vw] z-[10]'>
                    <div className='container h-[60vh] w-[20vw] bg-clip-padding bg-[url("/HomeMedia/IMG_2.png")] bg-bottom bg-cover'>
                    </div>
                </motion.div>
                <motion.div
                  className='mt-[-20vh] mr-[20vw]  z-[0]'>
                    <div className='container h-[30vh] w-[20vw] bg-clip-padding bg-[url("/HomeMedia/IMG_3.png")] bg-bottom bg-cover'>
                    </div>
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Homesec21