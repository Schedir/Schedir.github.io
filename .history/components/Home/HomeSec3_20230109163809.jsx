import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const HomeSec3 = () => {

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

        <div ref={ref} className='z-20 mt-[30vh] mb-[10vh] '>
              <div className='flex justify-end z-30 mb-[10vh] mr-[7%]'>
                <motion.div  
                  className='fixed top-[50vw] lg:top-[23vh] lg:left-[50vw]'
                  style={{opacity:useTransform(scrollYProgress, 
                    [0, .2,.9, 1],
                    [0 + '%', 100 + '%',100 + '%', 100 + '%'])}} >
                    <motion.h2 
                    className='text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-violet via-schedir-gneon to-schedir-g1 text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    Sea of sharing cultures</motion.h2>
                    <motion.span 
                    className='text-transparent bg-clip-text text-left  background-animate bg-gradient-to-r from-schedir-violet via-schedir-gneon to-schedir-g1 text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] '>
                    The Mediterranean Sea is a cultural orgy:   <br/>
                    the history of life has always been handed down around it.  <br/> 
                    Sailing it teaches that we are all children <br/>of the same mother Nature, <br/>
                    showing that our multiple cultures are not divergent,<br/>
                     but complementary. <br/>
                    The Mediterranean area is a vast human being: <br/>
                    full of sins and wonders, liquid and constantly changing.
                    </motion.span>
                </motion.div>

              </div>
              
              <div className='grid grid-rows-2 grid-flow-col gap-3 top-[80vh] lg:top-[40vh] mx-16 mr-[50vw] -z-20'>
                  <motion.div
                    style={{backgroundPositionX:useTransform(scrollYProgress, 
                      [0, 1],
                      [0 + '%', 100 + '%'])}}
                    className='container h-[30vh] w-[40vw] row-span-3 col-span-1
                    lg:h-full lg:w-[20vw] bg-clip-padding bg-[url("/HomeMedia/IMG_5.png")] bg-cover bg-center z-[10] '>
                  </motion.div>
                  <motion.div
                    className='container h-[30vh] w-[40vw] row-span-1 col-span-2
                    lg:h-[30vh] lg:w-[24vw] bg-clip-padding bg-[url("/HomeMedia/IMG_5.png")] bg-cover bg-center z-[10] '>
                  </motion.div>
                  <motion.div
                    className=' container h-[30vh] w-[40vw] row-span-2 col-span-2
                    lg:h-[35vh] aspect-square bg-clip-padding bg-[url("/HomeMedia/IMG_5.png")] bg-cover bg-center z-[10] '>
                  </motion.div>
              </div>
          </div>
    </>
  )
}

export default HomeSec3