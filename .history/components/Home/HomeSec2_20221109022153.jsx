import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(scrollYProgress, 100);

  return (
    <>

        <div className=' bg-schedir-blue -z-20 mt-[40vh] mb-[-40vh] mx-[10%]'>
            <div className='flex-inline justify-start mx-5 z-10'>
                <motion.div >
                    <h2 
                    className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The importance <br/>of being foreigners</h2>
                    <span className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>
                    Ogni terra raggiunta è l’inizio di molte vite: <br/> il rapporto tra la nuova terra e lo straniero è un reciproco dono.<br/>
                    Nuovi odori, nuovi suoni, nuovi sapori, nuove relazioni, nuove storie.<br/>
                    Arrivare via mare in una nuova terra e sentirsi stranieri<br/> è il privilegio che ci consente di essere liberi, <br/> di includere e di trasformarci in qualcosa di nuovo.
                    </span>
                </motion.div>
            </div>
            <motion.div
              className='flex justify-end mt-[-40vh] -z-10
               overflow-hidden object-none object-center '>
                <motion.img 
                  style={{y:useTransform(springscroll, [0, 1], [0 + '%', 100 + '%'])}}
                  className='rounded-md scale-110'
                  src='/HomeMedia/IMG_0.png' width="40%"/>
            </motion.div>
        </div>

    </>
  )
}

export default HomeSec2