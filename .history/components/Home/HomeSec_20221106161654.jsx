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

  return (
    <AnimatePresence>
      <div className='relative'>
        
        <div className='fixed flex h-screen w-screen items-center justify-center bg-[url("/media/IMG_1367.png")] bg-cover z-0'>
            <motion.h1 
            style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
            className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] 
            mt-[5vh]
            font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Schedir</motion.h1>
        </div>
        
      </div>
      <div className='relative'>
        
      </div>
        <div className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-right mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 120 + '%'])}}
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondosfumatura2.png")] text-transparent'>
                    <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold'>
                        Un viaggio inclusivo alla scoperta di storia, cultura, natura

                    </div>
              </motion.div>
          </div> 
        </div>
    </AnimatePresence>
  )
}

export default HomeSec