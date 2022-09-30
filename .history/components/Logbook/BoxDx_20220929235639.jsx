import { motion , AnimatePresence} from 'framer-motion'
import React from 'react'

const BoxDx = ({title, text}) => {

  const isInView = useInView(ref, { once: true });


  return (
    <div className='grid ml-[50%] justify-items-start'>
      <AnimatePresence>
        <div className="mb-10 ml-[5em]">
          <motion.div
            key={"my_unique_key"}
            exit={{ opacity:0 }}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}>
            <a href="#" className="block p-6 max-w-xl bg-[url('/media/prova.jpg')] rounded-lg border shadow-md hover:scale-105 border-gray-700 transition ease-in-out">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </a>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default BoxDx