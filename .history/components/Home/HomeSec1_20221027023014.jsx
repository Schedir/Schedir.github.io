import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, use} from 'framer-motion'

const HomeSec1 = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  return (
    <AnimatePresence>

        <div className="items-center justify-center my-auto mx-auto">
            {/* <div className="bg-[url('/media/sfondo.jpg')] bg-cover"> */}
                <div
                className='sticky top-[30%] text-center text-red text-[40px] md:text-[80px] font-bold text-schedir-blue z-[30]'>
                    Sea of sharing culture
                </div> 
                <motion.img style={{y}} src='/media/sfondosfumatura.jpg'/>

            {/* </div> */}

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1