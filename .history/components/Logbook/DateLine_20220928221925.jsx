import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div>
        <h1 className='text-center bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
        <div className="absolute border-l h-full border-gray-200 schedir-white justify-items-center z-[-1]"/>
    </div>
  )
}

export default DateLine