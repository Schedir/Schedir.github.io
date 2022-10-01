import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const DateLine = ({Date,xxx}) => {
  return (
    <div className='sticky top-[8%] pb-10'>
      <div className='block max-w-fit mx-auto'>
        <h1 className='text-center text-xs sm:text-base md:text-lg bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
      </div>
        <div className='ml-[50%]'>
            <div className="absolute border-lr h-screen border-schedir-white">
              
            </div>
        </div>
        <div className='mr-[50%]'>
            <div className="absolute border-l h-screen border-schedir-white">
              
            </div>
        </div>
    </div>
    
  )
}

export default DateLine