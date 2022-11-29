import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {
  

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .7], [250, 0])

  return (
    <div>
      <div className='flex justify-center'>
        <div 
        className='bg-fixed bg-[url("/media/Schedir_1.JPG")] bg-cover w-screen h-64 z-30 mx-0' >

        </div>
      </div>
      <div className='relative bg-schedir-blue mb-[-25vh] mt-[-10vh] -z-30'>
        <div className="items-center justify-center my-auto mx-auto">
          <div className='sticky top-[30vh] text-left text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue -z-20 mx-[10vw]'>
              Surrounded by time and sea</div> 
          <div className='sticky top-[40vh] md:top-[45vh] text-left text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] text-schedir-blue -z-20 mx-[10vw] '>
              Sailing the sea allows you to slow down time, to immerse yourself in it and to join its flow, <br/>
              breaking the regime of speed that imposes on the human being a deep distance from him/herself.<br/>
              It is a journey in which we discover unexpected riches, <br/>
              in which we understand forgotten values.</div> 
          {/* <motion.div style={{y}}> */}
          <div className='h-[300vh] my-20vh justify-center'>
            <img src='/HomeMedia/sfondosfumatura5.jpg' className='mt-[0vh] absolute -z-30 '/> 
            <canvas id="hero-lightpass" className='sticky bottom-[-10vh] ml-[90.5vh] pt-[55vh] mb-[40vh] w-full -z-10'/>
            <img src='/HomeMedia/sfondoblu.png' className='mt-[-140vh] -z-0 border-b-[3vh] pb-0 border-schedir-blue'/>
          </div>


          {/* </motion.div> */}
        </div>


      </div>

    </div>
  )
}

export default HomeSec1