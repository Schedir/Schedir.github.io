import {React, useRef} from 'react'
import { motion , useSpring, useScroll, useTransform} from 'framer-motion'

const HomeSec2 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
    const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })

    const y = useParallax(springscroll, -800);

    const boxAnimate={
      offscreen:{x:-100, opacity:0,
        transition: {
          ease: "easeInOut",
          duration: 0.8}},
      onscreen:{
        x:0, 
        opacity:1,
        transition: {
          type:"spring",
          bounce: 0.4,
          ease: "easeInOut",
          duration: 0.8}
      }}

      const txtAnimate={
        offscreen:{opacity:0,
          transition: {
            ease: "easeInOut",
            duration: 0.8}},
        onscreen:{
          opacity:1,
          transition: {
            type:"spring",
            bounce: 0.4,
            ease: "easeInOut",
            duration: 3.8}
        }}

        const boxAnimate2={
          offscreen:{x:80, opacity:0,
            transition: {
              ease: "easeInOut",
              duration: 0.8}},
          onscreen:{
            x:0, 
            opacity:1,
            transition: {
              type:"spring",
              bounce: 0.4,
              ease: "easeInOut",
              duration: 0.8}
          }}
        
  return (
    <>

        <div ref={ref} className='z-20 mt-[0vh] mb-[60vh] '>
              <div className='flex justify-end z-30 mb-[10vh] mx-[7%]'>
                <motion.div  
                  className='fixed top-[30vh]'
                  style={{opacity:useTransform(scrollYProgress, 
                    [0, .4,.6, 1],
                    [0 + '%', 100 + '%',100 + '%', 0 + '%'])}} >
                    <motion.h2 
                    // initial={"offscreen"}
                    // whileInView={"onscreen"}
                    // variants={boxAnimate2}
                    // viewport={{once:false, amount:0.9, margin:['-50px 50px 0px 0px']}}
                    // style={{x:useTransform(springscroll, 
                    //   [0, .5, 1],
                    //   [0 + '%', -100 + '%', 0 + '%'])}}
                    className='text-transparent bg-clip-text text-right background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[25px] sm:text-[40px] md:text-[55px] lg:text-[90px] font-bold '>
                    Being foreigners</motion.h2>
                    <motion.span 
                    // initial={"offscreen2"}
                    // whileInView={"onscreen2"}
                    // variants={txtAnimate}
                    // viewport={{once:false, amount:0.4, margin:['-50px 50px 0px 0px']}}
                    className='text-transparent bg-clip-text text-left  background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell text-[15px] sm:text-[15px] md:text-[20px] lg:text-[29px] '>
                    Ogni terra raggiunta è l’inizio di molte vite: <br/> il rapporto tra la nuova terra e lo straniero è un reciproco dono.<br/>
                    Nuovi odori, nuovi suoni, nuovi sapori, nuove relazioni, nuove storie.<br/>
                    Arrivare via mare in una nuova terra e sentirsi stranieri<br/> è il privilegio che ci consente di essere liberi, <br/> di includere e di trasformarci in qualcosa di nuovo.
                    </motion.span>
                </motion.div>

              </div>
              <div className='fixed top-[40vh] -z-20'>
                  <motion.div
                    // style={{y}}
                    style={{x:useTransform(scrollYProgress, 
                      [0, .4,.6, 1],
                      [-100 + '%', 0 + '%',0 + '%', -100 + '%'])}}
                    className='mt-[-20vh] 
                    overflow-hidden object-none object-center '>
                    <motion.img 
                      // initial={"offscreen"}
                      // whileInView={"onscreen"}
                      // variants={boxAnimate}
                      className='rounded-md'
                      viewport={{once:false, amount:0.5, margin:['-150px 0px 0px 0px']}}
                      src='/HomeMedia/IMG_00.png' width="100%"/>
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