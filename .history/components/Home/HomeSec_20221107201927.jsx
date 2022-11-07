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

  const draw = {
    hidden:{
      pathlenght:0,
    }
  }

  return (
    <AnimatePresence>
      <div className='relative bg-schedir-blue z-10'>
        
        {/* <div className='fixed flex h-screen w-screen bg-schedir-blue bg-cover z-0'/> */}
        {/* <div className='absolute left-[calc(50vw-100px)] top-[40vh] '>
          <motion.h1 
          style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
          className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] 
          mt-[5vh]
          font-bold
          bg-clip-text background-animate
          bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
          hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Schedir</motion.h1>
        </div> */}
        <div className='flex h-screen justify-center items-center'>
          <svg className='w-[50vw]' viewBox="0 0 3365 1966" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2887.5 626.5L3125.5 1057.5L2738 1594.5L3319 1911.5" stroke="white" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2535.5 635L2782 1075" stroke="white" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2183.5 635L2412.5 1048.5L2095.5 1524" stroke="white" strokeWidth="90" strokeLinecap="round" stroke-linejoin="round"/>
          <path d="M2130.5 54L1796.5 626.5L2034 1048.5L1655.5 1585.5L2236.5 1920" stroke="#8BE8CB" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1365 45.5L1039.5 626.5M1039.5 626.5L1277 1066.5M1039.5 626.5H1418M1418 626.5L1743.5 45.5M1418 626.5L1664 1066.5" stroke="white" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M995.5 63L652 617.5L889.5 1048.5" stroke="white" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M581.5 54L256 617.5L511.5 1066.5L45 1612" stroke="white" strokeWidth="90" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2128.5 57.5L1800 624L2033.5 1047.5L1658.5 1584L2232 1916.5" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </div>
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
      </div>

    </AnimatePresence>
  )
}

export default HomeSec