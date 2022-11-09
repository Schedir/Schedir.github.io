import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, MotionValue} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
  

    const y = useParallax(scrollYProgress, 100);

  return (
    <>

        <div className=' bg-schedir-blue -z-20 mt-[40vh] mx-[10%]'>
            <div ref={ref} className='flex-inline justify-start mx-5 z-30'>
                <motion.div >
                    <h2 
                    className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The importance of being foreigners</h2>
                    <span className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>
                    Ogni terra raggiunta è l’inizio di molte vite: <br/> il rapporto tra la nuova terra e lo straniero è un reciproco dono.<br/>
                    Nuovi odori, nuovi suoni, nuovi sapori, nuove relazioni, nuove storie.<br/>
                    Arrivare via mare in una nuova terra e sentirsi stranieri è il privilegio che ci consente di essere liberi, <br/> di includere e di trasformarci in qualcosa di nuovo.
                    </span>
                </motion.div>
            </div>
            <motion.div
                style={{y}}
                    className='flex justify-end mt-[-20vh] -z-10'>
                    <img 
                    src='LogMedia/box-1.jpg' width="40%"/>
            </motion.div>
        </div>

    </>
  )
}

export default HomeSec2