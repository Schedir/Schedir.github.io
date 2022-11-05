import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'

const HomeSec1 = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [350, 0])

  return (
    <AnimatePresence>

        <div className="items-center justify-center my-auto mx-auto">
            {/* <div className="bg-[url('/media/sfondo.jpg')] bg-cover"> */}
                <div
                className='sticky top-[40vh] text-center text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue z-[30]'>
                    Surrounded By TIME and SEA
                </div> 
                <div
                className='sticky top-[50vh] text-center text-[15px] sm:text-[15px] md:text-[25px] lg:text-[24px] font-bold text-schedir-blue z-[30] mx-[15vw]'>
                    Navigare per mare permette di rallentare il tempo, di immergersi in esso e di unirsi al suo flusso, <br/> spezzando il regime di velocità e scadenze che impone all’essere umano una profonda lontananza dal proprio io. <br/>
                    È un viaggio in cui scopriamo ricchezze inaspettate, in cui comprendiamo valori dimenticati. 
                </div> 
                <motion.img style={{y}} src='/media/sfondosfumatura2.png'/>

            {/* </div> */}

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1