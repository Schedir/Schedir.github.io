import { motion , useInView, useScroll, AnimatePresence} from 'framer-motion'
import { useRef } from "react";
import React from 'react'

const BoxDx = ({title, text}) => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll()

  return (
    <div className='grid ml-[50%] justify-items-start'>
        <div className="mb-10 ml-[5em]" ref={ref}>
          <AnimatePresence>
            <motion.div
              key={"my_unique_key"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ root: ref, amount: 0.8 }}>
              <a href="#" className="block p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md hover:scale-105 border-gray-700 transition ease-in-out">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
    </div>
  )
}

export default BoxDx