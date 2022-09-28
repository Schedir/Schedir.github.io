import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div className='absolute'>
        <h1 className='text-center text-schedir-white mb-4'>{Date}</h1>
        <ol className="relative border-l h-full border-gray-200 schedir-white ml-[50%]"/>
    </div>
  )
}

export default DateLine