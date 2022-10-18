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

        <div className='h-[1000px] sticky top-[40%] mx-auto justify-items-center bg-u'>

            Un modo magico e innovativo di interagire con iPhone. Una nuova, essenziale funzione per la sicurezza, pensata per salvare vite. Una straordinaria fotocamera da 48MP per dettagli da non credere. E dietro tutto questo, la&nbsp;potenza del&nbsp;più evoluto chip per smartphone.
            
            {/* <div className={'translate-x-[' + scrollYProgress + ']'}>
                <img
                className='mx-auto'
                style={{width:'500px'}}
                src="/media/hero_background_medium.png"/>
                <img
                className='mx-auto rotate-180'
                style={{width:'500px'}}
                src="/media/hero_background_medium.png"/>
            </div> */}
        </div>

    </AnimatePresence>
  )
}

export default HomeSec1