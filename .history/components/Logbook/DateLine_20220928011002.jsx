import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div>
        <h1 className='mt-2 mb-2text-center bg-schedir-blue text-schedir-white mb-4'>{Date}</h1>
        <div className="absolute border-l h-full border-gray-200 schedir-white ml-[50%] z-[-1]"/>
    </div>
  )
}

export default DateLine