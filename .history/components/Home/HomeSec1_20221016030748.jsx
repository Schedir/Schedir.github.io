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
        <div className='flex items-center h-[1800px] bg-gradient-to-t from-schedir-blue via-schedir-red2 to-schedir-blue '>
            <div className='container flex mx-5'>
                <div className='flex justify-center'>
                    <img src='media/box-1.jpg' width="50%"/>
                </div>
                <div className='absolute left-[60%]'>
                    <h2 className='text-schedir-white text-[3em]'>testo</h2>
                    <span className='text-schedir-white text-[2em]'>testo di prova</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeSec1