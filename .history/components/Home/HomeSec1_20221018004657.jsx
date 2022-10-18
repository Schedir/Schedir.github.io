import {React, useRef, translateY} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const { translateYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <article className='h-[1000px] sticky top-[20%] mx-auto'>
            <textcont className='will-change-transform'>
                <img 
                className='mx-auto'
                style={{width:'500px'}}
                src="/media/hero_background_medium.png"/>
            </textcont>
        </article>

    </AnimatePresence>
  )
}

export default HomeSec1