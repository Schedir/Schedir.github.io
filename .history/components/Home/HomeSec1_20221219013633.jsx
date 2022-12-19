import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {
  
  const ref = useRef()
  const { scrollYProgress } = useScroll({target: ref});
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .7], [250, 0])

  return (
    <div>
      <div  className=' flex w-screen h-screen justify-center mb-[20vh]'>
        <motion.div 
        // ref={ref}
        // style={{
        //   widht:useTransform(scrollYProgress, 
        //     [0, .5],
        //     [30 + 'vw', 100 + 'vw'])}}
        ref={ref}
        className='flex justify-center items-center bg-opacity-50 lg:mt-[35vh]'>

          <motion.div
            
            style={{
              height:useTransform(scrollYProgress, 
                [0, .3],
                [10 + 'vh', 100 + 'vh'])}}
          className=' bg-[url("/HomeMedia/IMG_0121.jpg")] bg-cover z-30 mx-0' >
            <p className='font-bold text-[19px] sm:text-[15px] md:text-[20px] lg:text-[31px] text-white mx-[10vw] lg:my-[5%] text-center'>
              Our purpose is to sail the Mediterranean sea,<br/>
              traveling and living aboard Schedir,<br/>
              moved by the desire to feel a strong connection<br/> to life and to discover its beauties.<br/>
              Sailing by sea, by wind, by land, <br/>
              we want to share experiences,<br/>
              inviting and involving anyone who wants <br/>
              to join us on this journey.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className='relative bg-schedir-blue mb-[-25vh] mt-[-10vh] -z-30'>
        <div className="items-center justify-center my-auto mx-auto">
          <div className='sticky top-[40vh] lg:top-[30vh] text-left text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue -z-20 mx-[10vw]'>
              Surrounded by time and sea</div> 
          <div className='sticky top-[45vh] lg:top-[44vh] md:top-[45vh] text-left text-[15px] sm:text-[15px] md:text-[20px] lg:text-[27px] text-schedir-blue -z-20 mx-[10vw] '>
            Sailing the sea allows you to slow down time, to immerse yourself in it and to join its flow,  <br/>
            breaking the regime of speed that imposes on the human being a deep distance from him/herself.<br/>
            It is a journey in which we discover unexpected riches, <br/>
            in which we understand forgotten values. </div> 

          <div className='scroll h-[300vh] justify-center'>
            <img src='/HomeMedia/sfondosfumatura5.jpg' className='mt-[0vh] w-screen h-[100vh] lg:h-full absolute -z-30'/> 
            <video
                autoPlay
                loop
                playsInline
                muted
                className='sticky top-[8vh] pt-[60vh]'
                >
                  <source src="/HomeMedia/Seq3.mp4" />
            </video>
            <img src='/HomeMedia/sfondoblu.png' className='absolute top-0 h-[150vh] lg:h-full lg:top-48 -z-0'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeSec1