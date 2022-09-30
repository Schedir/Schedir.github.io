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
    <div>
        <ScrollPage>
                <Animator animation={batch(MoveIn(-1000, 0))}>
                    <h1 className='text-center bg-schedir-blue text-schedir-white p-5'>{Date}</h1>
                </Animator>
                <div className='ml-[50%]'>
                    <div className="absolute border-l h-full border-gray-200 schedir-white z-[-1]"/>
                </div>
        </ScrollContainer>
    </div>
    
  )
}

export default DateLine