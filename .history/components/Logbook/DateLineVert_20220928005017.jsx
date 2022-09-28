import React from 'react'

const DateLineVert = ({Date}) => {
  return (
    <div>
        <h1 className='text-center text-schedir-white mb-4 ml-7 rotate-'>{Date}</h1>
        <div className="absolute border-l h-full border-gray-200 schedir-white ml-[50%]"/>
    </div>
  )
}

export default DateLineVert