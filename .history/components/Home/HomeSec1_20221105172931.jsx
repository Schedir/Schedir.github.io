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
                className='sticky top-[45vh] text-center text-red text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold text-schedir-blue z-[30]'>
                    Surrpunded By TIME and SEA
                </div> 
                <motion.img style={{y}} src='/media/sfondosfumatura2.png'/>

            {/* </div> */}

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1