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
        delay: .5,
        ease: "easeInOut",
        duration: .5}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        delay: 0,
        ease: "easeInOut",
        duration: .5}
    }}

  return (
    <div>
      <div className='relative bg-schedir-blue z-10 '>
        
        <div className='absolute left-[calc(50vw-100px] top-[40vh] '>
          <motion.h1 
          style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
          className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] 
          mt-[5vh]
          font-bold
          bg-clip-text background-animate
          bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
          hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>HomePage</motion.h1>
        </div>
      </div>

      <div className='relative bg-schedir-blue'>
        <div className="h-[250vh] items-center justify-center my-auto mx-auto">
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