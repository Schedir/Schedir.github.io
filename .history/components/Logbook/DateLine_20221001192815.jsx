import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const DateLine = ({Date}) => {
  return (
    <div className='sticky top-[8%] z-[-10]'>
      <div className='block max-w-fit mx-auto'>
        <h1 className='text-center text-xs sm:text-base md:text.lg bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
      </div>
        <div className='ml-[50%]'>
            <div className="absolute border-l h-full border-gray-200 schedir-white"/>
        </div>
    </div>
    
  )
}

export default DateLine