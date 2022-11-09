import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const HomeSec = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])



  const arrowdx = {
    offscreen:{
      x:-200, 
      opacity:1,
      transition: {
        delay: 1,
        ease: "easeInOut",
        duration: 1}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        delay: 0,
        ease: "easeInOut",
        duration: 1}
    }}

  return (
    <div>
      <div className='relative bg-schedir-blue z-10'>
        
        {/* <div className='fixed flex h-screen w-screen bg-schedir-blue bg-cover z-0'/> */}
        <div className='absolute left-[calc(50vw-150px)] top-[40vh] '>
          <motion.h1 
          style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
          className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] 
          mt-[5vh]
          font-bold
          bg-clip-text background-animate
          bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
          hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'></motion.h1>
        </div>
        {/* <div className='flex h-screen justify-center items-center'>
          <motion.svg 
            initial={"hidden"}
            whileInView={"visible"}
            className='w-[40vw]' viewBox="0 0 3365 1966" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={draw} d="M2887.5 626.5L3125.5 1057.5L2738 1594.5L3319 1911.5" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M2535.5 635L2782 1075" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M2183.5 635L2412.5 1048.5L2095.5 1524" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M2130.5 54L1796.5 626.5L2034 1048.5L1655.5 1585.5L2236.5 1920" stroke="#8BE8CB" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M1365 45.5L1039.5 626.5M1039.5 626.5L1277 1066.5M1039.5 626.5H1418M1418 626.5L1743.5 45.5M1418 626.5L1664 1066.5" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M995.5 63L652 617.5L889.5 1048.5" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M581.5 54L256 617.5L511.5 1066.5L45 1612" stroke="white" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round"/>
              <motion.path variants={draw} d="M2128.5 57.5L1800 624L2033.5 1047.5L1658.5 1584L2232 1916.5" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>

        </div> */}
      </div>
      {/* <div className='h-[50vh]'/> */}

      <div className='relative bg-schedir-blue'>
        <div className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-right mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-5 + '%', 120 + '%'])}}
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondo_sfum_1.png")] text-transparent'>
                    <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold'>
                        Un viaggio inclusivo alla scoperta di storia, cultura, natura

                    </div>
              </motion.div>
          </div> 
        </div>

        <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            className='flex justify-end mx-[5vw] my-5 mt-[-15vh] z-10'>
                <button 
                  type="button" 
                  className="text-left inline-flex items-center ">
                    <motion.span
                      variants={arrowdx} className='mx-4 text-white'> Scopri la rotta</motion.span>
                      <motion.span 
                      variants={arrowdx}
                      whileHover={{ scale: 1.2 }} 
                      whileTap={{ scale: 0.9 }}
                      className='background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
                      rounded-full p-[1.9px] overlflow-clip'>
                        <svg aria-hidden="true" className="w-14 h-10 rounded-full " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </motion.span>
                    
                </button>
                
        </motion.div> 
        {/* <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            className='flex justify-start mx-[5vw] my-5 mt-[-15vh] z-50 '>
                <button 
                  type="button" 
                  className=" text-left inline-flex items-center rotate-90 ">
                    <h3 className='mx-4 text-white'> Filosofia </h3>
                    <motion.span 
                    variants={arrowbx}
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }}
                    className='background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
                    rounded-full p-[1.9px] overlflow-clip'>
                      <svg aria-hidden="true" className="w-14 h-10 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </motion.span>
                    
                </button>
                
        </motion.div>  */}
      </div>
    </div>
  )
}

export default HomeSec