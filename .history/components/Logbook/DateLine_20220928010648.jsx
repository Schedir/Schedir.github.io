import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div>
        <div className='bg-schedir-blue '>
            <h1 className='text-center bg-schedir-blue text-schedir-white mb-4'>{Date}</h1>
        </div>
        
        <div className="absolute border-l h-full border-gray-200 schedir-white ml-[50%]"/>
    </div>
  )
}

export default DateLine