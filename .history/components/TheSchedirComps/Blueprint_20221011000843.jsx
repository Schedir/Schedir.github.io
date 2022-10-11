import React from 'react'
import { motion , AnimatePresence} from 'framer-motion'

const pathVar = {
  hidden: {
    opacity:0,
    pathLength:0,
  },
  visible: {
    opacity:1,
    pathLength:1,
    transition: {
      duration:4,
      ease:"easeInOut"
    }
  }
}

const Blueprint = () => {

  return (
    <div>

    </div>
   
  )
}

export default Blueprint