import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .7], [250, 0])

  return (
    <div>
      <div className='relative bg-schedir-blue mb-[-25vh] mt-[-10vh] -z-10'>
        <div className="items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-left text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue z-[30] mx-[10vw]'>
              Surrounded by time and sea</div> 
          <div className='sticky top-[40vh] md:top-[50vh] text-left text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px] text-schedir-blue z-[30] mx-[10vw]'>
              Navigare per mare permette di rallentare il tempo,<br/> di immergersi in esso e di unirsi al suo flusso, <br/> spezzando il regime di velocità e scadenze che impone all’essere umano una profonda lontananza dal proprio io. <br/>
              È un viaggio in cui scopriamo ricchezze inaspettate, in cui comprendiamo valori dimenticati.</div> 
          <motion.img style={{y}} src='/media/sfondoblu.png' className='pb-[20vh]'/>
          <motion.img style={{y}} src='/media/sfondorbg.png' className='pb-[20vh]'/>

          {/* <div className='absolute top-[100vh] z-20 '>
            <div className='container overflow-hidden h-[100vh] object-none object-bottom w-full '>
                <video className='scale-[135%] mt-[0vh] opacity-30' autoPlay loop muted >
                  <source src="/HomeMedia/introloop2.mp4" type="video/mp4" />
                </video>
            </div>
          </div> */}
          <canvas id="hero-lightpass" className='z-20 opacity-50 w-full'/>
        </div>


      </div>
    </div>
  )
}

export default HomeSec1