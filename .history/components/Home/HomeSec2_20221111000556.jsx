import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const { scrollYProgress } = useScroll();
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(springscroll, -600);

  return (
    <>

        <div className='z-20 mt-[40vh] mb-[40vh] mx-[10%]'>
              <div className='flex justify-end text-right z-30 mb-[10vh]'>
                <motion.div >
                    <h2 
                    className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] font-bold '>
                    The importance of being foreigners</h2>
                    <span className='text-transparent bg-clip-text background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[23px]'>
                    Ogni terra raggiunta è l’inizio di molte vite: <br/> il rapporto tra la nuova terra e lo straniero è un reciproco dono.<br/>
                    Nuovi odori, nuovi suoni, nuovi sapori, nuove relazioni, nuove storie.<br/>
                    Arrivare via mare in una nuova terra e sentirsi stranieri<br/> è il privilegio che ci consente di essere liberi, <br/> di includere e di trasformarci in qualcosa di nuovo.
                    </span>
                </motion.div>

              </div>
              <div className='absolute -z-20'>
                  <motion.div
                    style={{y}}
                    className='mt-[-20vh] 
                    overflow-hidden object-none object-center '>
                    <motion.img 
                      className='rounded-md'
                      src='/HomeMedia/IMG_0.png' width="40%"/>
                  </motion.div>
              </div>
          </div>
          {/* <div>
            <motion.img 
            style={{translateX:useTransform(springscroll, [0,.8], [0, 0])}} src='/HomeMedia/IMG_costa_2.png' className='sticky bottom-[-20vh] mt-[-90vh] z-30'/>
          </div> */}
    </>
  )
}

export default HomeSec2