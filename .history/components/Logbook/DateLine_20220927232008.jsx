import React from 'react'

const DateLine = ({Date}) => {
  return (
    <div>
        <h1 className='text-center text-schedir-white mb-4'>{Date}</h1>
        <ol className=" border-l h-fit border-gray-200 schedir-white ml-[50%]"/>
    </div>
  )
}

export default DateLine