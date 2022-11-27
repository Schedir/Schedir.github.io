import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .7], [250, 0])

  return (
    <div>
      <div className='relative bg-schedir-blue mb-[-25vh] mt-[-10vh] -z-30'>
        <div className="items-center justify-center my-auto mx-auto">
          <div className='sticky top-[30vh] text-left text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue -z-20 mx-[10vw]'>
              Surrounded by time and sea</div> 
          <div className='sticky top-[40vh] md:top-[45vh] text-left text-[15px] sm:text-[15px] md:text-[20px] lg:text-[29px] text-schedir-blue -z-20 mx-[10vw] '>
              Navigare per mare permette di rallentare il tempo,<br/> di immergersi in esso e di unirsi al suo flusso, <br/> spezzando il regime di velocità che impone all’essere <a></a> una profonda lontananza dal proprio io. <br/>
              È un viaggio in cui scopriamo ricchezze inaspettate, in cui comprendiamo valori dimenticati.</div> 
          {/* <motion.div style={{y}}> */}
            <img src='/HomeMedia/sfondosfumatura5.jpg' className='absolute -z-30 '/> 
            {/* <canvas id="hero-lightpass" className='sticky mt-[20vh] w-full -z-10'/> */}
            <img src='/HomeMedia/sfondoblu.png' className=' -z-0'/>

          {/* </motion.div> */}
        </div>


      </div>

    </div>
  )
}

export default HomeSec1