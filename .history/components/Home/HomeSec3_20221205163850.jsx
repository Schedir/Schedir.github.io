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

        <div ref={ref} className='z-20 mt-[0vh] mb-[100vh] '>
              <div className='flex justify-end z-30 mb-[10vh] mr-[7%]'>
                <motion.div  
                  className='fixed top-[50vw] lg:top-[23vh] lg:left-[50vw]'
                  style={{opacity:useTransform(scrollYProgress, 
                    [0, .4,.6, 1],
                    [0 + '%', 100 + '%',100 + '%', 0 + '%'])}} >
                    <motion.h2 
                    // initial={"offscreen"}
                    // whileInView={"onscreen"}
                    // variants={boxAnimate2}
                    // viewport={{once:false, amount:0.9, margin:['-50px 50px 0px 0px']}}
                    // style={{x:useTransform(springscroll, 
                    //   [0, .5, 1],
                    //   [0 + '%', -100 + '%', 0 + '%'])}}
                    className='text-transparent bg-clip-text text-left background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    Being foreigners</motion.h2>
                    <motion.span 
                    // initial={"offscreen2"}
                    // whileInView={"onscreen2"}
                    // variants={txtAnimate}
                    // viewport={{once:false, amount:0.4, margin:['-50px 50px 0px 0px']}}
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
              <div className=' top-[80vh] lg:top-[40vh] mx-20 -z-20'>
                  <motion.div
                    style={{backgroundPositionY:useTransform(scrollYProgress, 
                      [0, 1],
                      [-10 + '%', 100 + '%'])}}
                    className='mt-[-20vh] container h-[30vh] w-[40vw] 
                    lg:h-[70vh] lg:w-[40vw] bg-clip-padding bg-[url("/HomeMedia/IMG_1.png")] bg z-[10]'>
                    {/* <motion.img 
                      className='rounded-md'
                      viewport={{once:false, amount:0.5, margin:['-150px 0px 0px 0px']}}
                      src='/HomeMedia/IMG_1.png' width="50%"/> */}
                  </motion.div>
              </div>
          </div>
    </>
  )
}

export default HomeSec3