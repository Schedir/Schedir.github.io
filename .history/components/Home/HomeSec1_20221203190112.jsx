import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {
  

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .7], [250, 0])

  return (
    <div>
      <div className='flex justify-center items-center bg-opacity-50'>
        <div className='bg-fixed bg-[url("/HomeMedia/Schedir_1.JPG")] bg-right bg-cover w-screen h-64 z-30 mx-0' >
          <p className='font-bold text-[19px] sm:text-[15px] md:text-[20px] lg:text-[27px] text-transparent mx-[10vw] my-[5%]
          bg-clip-text background-animate text-center
          bg-gradient-to-r from-schedir-blue via-schedir-glake to-schedir-violet'>
            Our purpose is to sail the Mediterranean sea, traveling and living aboard Schedir,
            moved by the desire to feel a strong connection to life and to discover its beauties.
            Sailing by sea, by wind, by land, 
            we want to share experiences, 
            inviting and involving anyone who wants to join us on this journey.
          </p>
        </div>
      </div>
      <div className='relative bg-schedir-blue mb-[-25vh] mt-[-10vh] -z-30'>
        <div className="items-center justify-center my-auto mx-auto">
          <div className='sticky top-[40vh] lg:top-[30vh] text-left text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue -z-20 mx-[10vw]'>
              Surrounded by time and sea</div> 
          <div className='sticky top-[45vh] lg:top-[40vh] md:top-[45vh] text-left text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] text-schedir-blue -z-20 mx-[10vw] '>
              Sailing the sea allows you to slow down time, to immerse yourself in it and to join its flow, <br/>
              breaking the regime of speed that imposes on the human being a deep distance from him/herself.<br/>
              It is a journey in which we discover unexpected riches, <br/>
              in which we understand forgotten values.</div> 
          {/* <motion.div style={{y}}> */}
          <div className='scroll h-[300vh] justify-center'>
            <img src='/HomeMedia/sfondosfumatura5.jpg' className='mt-[0vh] w-screen h-[100vh] lg:h-full absolute -z-30 '/> 
            <canvas id="hero-lightpass" className='sticky w-screen mr-[-50vw] bottom-[0vh] pt-[50vh] mb-[130vh] lg:mb-[-50vh] -z-10'/>
            <img src='/HomeMedia/sfondoblu.png' className='absolute top-0 h-[150vh] lg:h-full lg:top-48 -z-0'/>
          </div>


          {/* </motion.div> */}
        </div>


      </div>

    </div>
  )
}

export default HomeSec1