import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div className='sticky top-[8%] pb-10'>
      <div className='block max-w-fit mx-auto'>
        <h1 className='text-center text-xs sm:text-base md:text-lg bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
      </div>
        <div className='ml-[50%]'>
            <div className="absolute border-l h-[39em] border-schedir-white">
            </div>
        </div>
    </div>
    
  )
}

export default DateLine