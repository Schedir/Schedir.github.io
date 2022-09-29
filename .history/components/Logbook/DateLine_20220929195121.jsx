import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const DateLine = ({Date}) => {
  return (
    <div>
        <AnimatePresence>
            <motion.div>
                <h1 className='text-center bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
                <div className='ml-[50%]'>
                    <div className="absolute border-l h-full border-gray-200 schedir-white z-[-1]"/>
                </div>
                
            </motion.div>
        </AnimatePresence>
    </div>
    
  )
}

export default DateLine