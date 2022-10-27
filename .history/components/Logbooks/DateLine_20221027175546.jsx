import React from 'react'

const DateLine = (props) => {
  
  return (
    <div className='sticky top-[8%] '>
      <div className='flex justify-center max-w-fit mx-auto'>
        <h1 className='text-center text-xs sm:text-base md:text-lg bg-schedir-blue text-schedir-white '>{props.date}</h1>
      </div>
        {/* {props.json.content.map((content) => ( */}
          <div className={'flex justify-end mr-[50%]'}>
            <div className=" border-r h-fit border-schedir-white">
              {props.box}
            </div>
          </div>
        {/* ))} */}

    </div>
    
  )
}

export default DateLine