import React from 'react'

const HomeSec1 = () => {
  return (
    <div>

        <div className='flex h-screen items-center justify-center'>
            <h1 className='text-center text-transparent text-[40px] md:text-[80px] font-bold
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
            hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>Intro</h1>
        </div>
        <div className='flex h-screen bg-gradient-to-t from-schedir-blue via-schedir-red2 to-schedir-blue '>
            <div className='container mx-auto'>
                <div>
                    <img src='media/box-1.jpg' width="200px"/>
                </div>
                <div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeSec1