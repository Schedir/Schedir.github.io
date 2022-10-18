import {React, useRef, matrix} from 'react'
import { motion , AnimatePresence, useScroll, useTransform} from 'framer-motion'
import { Sticky } from 'react-scroll-motion';

const HomeSec1 = () => {

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
      };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

  return (
    <AnimatePresence>

        <div className="items-center justify-center my-auto mx-auto">
            <div>

                <div
                className='sticky top-[30%] text-center text-red text-[40px] md:text-[80px] font-bold text-schedir-blue'>
                    Intro testo di prova testo di prova testo di prova testo di prova
                </div>
                <div 
                className={"mx-auto h-[] bg-[url('/media/sfondo.jpg')]"}>
                </div>

            </div>

        </div>

    </AnimatePresence>
  )
}

export default HomeSec1