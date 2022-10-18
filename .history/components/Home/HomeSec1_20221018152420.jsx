import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className='h-[1000px] items-center justify-center my-auto mx-auto'>
            <div className='flex items-center justify-center bg-[url]'>
                <id
                    className='text-center text-transparent text-[40px] md:text-[80px] font-bold mx-auto'>Intro testo di prova testo di prova testo di prova testo di prova
                </id>
            </div>
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1