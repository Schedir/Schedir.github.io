import {React, useRef} from 'react'
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'
import dynamic from "next/dynamic";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const HomeSec = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

  const arrowdx = {
    offscreen:{
      x:-100, 
      opacity:0,
      transition: {
        delay: .5,
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


      <div className='relative bg-schedir-blue z-20 mt-[10vh]'>
        <div className="h-[190vh] items-center justify-center my-auto mx-auto">
            <div className='sticky top-[35vh] text-right mx-[10%] mb-[20vh]'>
                  <div className='flex justify-end'>
                    <motion.div 
                      style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-10 + '%', 200 + '%'])}}
                      className='bg-auto bg-center bg-clip-text bg-[url("/HomeMedia/back_sec.png")] text-transparent '>
                          <div className=' text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold z-40 '>
                              An sailing voyage,<br/> to discover the mediterran sea
                          </div>
                    </motion.div>
                </div>
                  <motion.img 
                      style={{translateX:useTransform(springscroll, [0,.8], [200, -3600])}} src='/HomeMedia/IMG_4.png' className='absolute mt-[-17vh] ml-[-20vw]'/>
            </div>

            <div className='sticky lgtop-[47vh] text-right mx-[10%] z-30'>
              <div className='z-10'>
                <motion.div 
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:1, margin:['-390px 350px 0px 0px']}}
                    className='flex justify-end mx-[5vw] my-5 mt-[-20vh] py-32'>
                  <button 
                    type="button" 
                    className="text-left inline-flex items-center">
                      <motion.span
                        variants={arrowdx} className='mx-4 text-white'>Find us</motion.span>
                        <motion.span 
                        variants={arrowdx}
                        whileHover={{ scale: 1.2 }} 
                        whileTap={{ scale: 0.9 }}
                        className='background-animate bg-gradient-to-r from-schedir-glake via-schedir-green to-schedir-g1 
                        rounded-full p-[1.9px] overlflow-clip'>
                          <svg aria-hidden="true" className="w-14 h-10 rounded-full " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </motion.span>
                  </button>
                </motion.div> 
              </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default HomeSec