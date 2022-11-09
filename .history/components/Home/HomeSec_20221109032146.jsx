import {React, useRef} from 'react'
import { motion , AnimatePresence, useScroll, useTransform, useSpring} from 'framer-motion'
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

const HomeSec = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 150 })
  const y = useTransform(springscroll, [0, .3], [150, 0])

  const arrowdx = {
    offscreen:{
      x:-200, 
      opacity:1,
      transition: {
        delay: .5,
        ease: "easeInOut",
        duration: .5}},
    onscreen:{
      x:0, 
      opacity:1,
      transition: {
        delay: 0,
        ease: "easeInOut",
        duration: .5}
    }}
    const draw = {
      hidden:{
        pathLength:0,
        opacity:0
      },
      visible:{
        pathLength:1,
        opacity:1,
        transition: {
          pathLength: {type: "spring", duration: 3, bounce: 0 }}
      }
    }
  return (
    <div>
      <div className='relative bg-schedir-blue z-10 '>
        
        {/* <div className='absolute left-[calc(50vw-150px)] top-[40vh] '>
          <motion.h1 
          style={{scale:useTransform(springscroll, [0, .5], [1.5, 0])}} 
          className='text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[70px] 
          mt-[5vh]
          font-bold
          bg-clip-text background-animate
          bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
          hover:from-schedir-yell hover:to-schedir-green hover:via-schedir-red2'>HomePage</motion.h1>
        </div>*/}

        <div className='flex h-screen justify-center items-center mx-[10vw]'>
          <motion.svg 
                initial={"hidden"}
                whileInView={"visible"}
                className='fill-transparent '
                width="7346" height="2507" viewBox="0 0 7346 2507" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <g filter="url(#filter0_i_10_90)">
            <g filter="url(#filter1_i_10_90)"> */}
            <motion.path variants={draw} d="M6711.85 1465.89L6153 1469.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M7270.85 1462.89L6712 1466.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M6924.68 1043.89L6365.83 1047.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M6924.68 1043.89L6711.59 1465.37" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M6365.83 1047.28L6152.74 1468.76" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter2_i_10_90)"> */}
            <motion.path variants={draw} d="M6023.83 1044L5810.74 1465.48" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter3_i_10_90)"> */}
            <motion.path variants={draw} d="M5681.68 1042.89L5122.83 1046.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M5681.68 1042.89L5468.59 1464.37" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M5122.83 1046.28L4909.74 1467.76" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter4_i_10_90)"> */}
            <motion.path variants={draw} d="M4567.18 1463.65L4008.32 1467.04" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M4780.68 1041.89L4221.83 1045.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M4780.68 1041.89L4567.59 1463.37" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M4221.83 1045.28L4008.74 1466.76" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter5_i_10_90)"> */}
            <motion.path variants={draw} d="M3321.24 1046.26L3880.09 1042.87" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M3107.74 1468.02L3666.59 1464.63" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M3107.74 1468.02L3320.83 1046.54" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M3666.66 1464.49L3879.74 1043" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M3879.66 1043.48L4092.74 622" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter6_i_10_90)"> */}
            <motion.path variants={draw} d="M2977.83 1043L2764.74 1464.48" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g> */}
            {/* <g filter="url(#filter7_i_10_90)"> */}
            <g filter="url(#filter8_i_10_90)">
            <motion.path d="M2522.58 1222.87C2553.01 363.713 3286.74 375.033 3344.44 371.828C2657.64 342.289 2314.54 764.99 2156.95 1370.09C2039.26 1867.95 1922.26 2039.59 1612.06 2131.7C1613.98 2179.27 2485.2 2278.06 2522.58 1222.87Z" fill="#1C5C3B"/>
            </g>
            <motion.path  d="M2522.58 1222.87C2553.01 363.713 3286.74 375.033 3344.44 371.828C2657.64 342.289 2314.54 764.99 2156.95 1370.09C2039.26 1867.95 1922.26 2039.59 1612.06 2131.7C1613.98 2179.27 2485.2 2278.06 2522.58 1222.87Z" stroke="#1C5C3B" strokeWidth="25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            {/* </g>
            <g filter="url(#filter9_i_10_90)"> */}
            <motion.path variants={draw} d="M1798.18 1464.65L1239.32 1468.04" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M2011.68 1042.89L1452.83 1046.28" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M2011.67 1042.89L1798.59 1464.37" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M1452.83 1046.28L1239.74 1467.76" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            <g filter="url(#filter10_i_10_90)"> */}
            <motion.path variants={draw} d="M900.255 1463.65L341.405 1467.04" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M1113.76 1041.88L554.908 1045.27" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M1113.76 1041.88L900.67 1463.37" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M341.827 1466.76L128.739 1888.24" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            <motion.path variants={draw} d="M554.915 1044L341.827 1465.48" stroke="#EEEEEE" strokeWidth="150" strokeLinecap="round"/>
            {/* </g>
            </g> */}
            <defs>
            {/* <filter id="filter0_i_10_90" x="53.7229" y="257.872" width="7392.13" height="1912.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-100"/>
            <feGaussianBlur stdDeviation="50"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter1_i_10_90" x="6077.72" y="923.872" width="1318.13" height="620.405" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter2_i_10_90" x="5735.72" y="923.983" width="413.12" height="616.517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter3_i_10_90" x="4834.72" y="922.872" width="971.97" height="619.906" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter4_i_10_90" x="3933.32" y="921.872" width="972.368" height="620.17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter5_i_10_90" x="3032.72" y="501.984" width="1185.04" height="1041.06" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter6_i_10_90" x="2689.72" y="922.983" width="413.12" height="616.517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter7_i_10_90" x="1599.56" y="357.872" width="1761.38" height="1816.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="155" dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>*/}
            <filter id="filter8_i_10_90" x="1599.56" y="357.872" width="1832.38" height="1816.79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="105" dy="4"/>
            <feGaussianBlur stdDeviation="37.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>{/*
            <filter id="filter9_i_10_90" x="1164.32" y="922.872" width="972.365" height="620.17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>
            <filter id="filter10_i_10_90" x="53.7229" y="921.867" width="1185.05" height="1041.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="100" dy="-45"/>
            <feGaussianBlur stdDeviation="25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0313726 0 0 0 0 0.0705882 0 0 0 0 0.129412 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10_90"/>
            </filter>*/}
            </defs> 
          </motion.svg>
        </div>

      </div> 
      <div className='relative bg-schedir-blue'>
        <div className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-right mx-[20%]'>
              <motion.div 
                style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-5 + '%', 120 + '%'])}}
                className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondo_sfum_1.png")] text-transparent'>
                    <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold'>
                        Un viaggio inclusivo alla scoperta di storia, cultura, natura

                    </div>
              </motion.div>
          </div> 
        </div>

        <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            className='flex justify-end mx-[5vw] my-5 mt-[-15vh] z-10'>
                <button 
                  type="button" 
                  className="text-left inline-flex items-center ">
                    <motion.span
                      variants={arrowdx} className='mx-4 text-white'> Scopri la rotta</motion.span>
                      <motion.span 
                      variants={arrowdx}
                      whileHover={{ scale: 1.2 }} 
                      whileTap={{ scale: 0.9 }}
                      className='background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
                      rounded-full p-[1.9px] overlflow-clip'>
                        <svg aria-hidden="true" className="w-14 h-10 rounded-full " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </motion.span>
                    
                </button>
                
        </motion.div> 
        {/* <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            className='flex justify-start mx-[5vw] my-5 mt-[-15vh] z-50 '>
                <button 
                  type="button" 
                  className=" text-left inline-flex items-center rotate-90 ">
                    <h3 className='mx-4 text-white'> Filosofia </h3>
                    <motion.span 
                    variants={arrowbx}
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }}
                    className='background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
                    rounded-full p-[1.9px] overlflow-clip'>
                      <svg aria-hidden="true" className="w-14 h-10 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </motion.span>
                    
                </button>
                
        </motion.div>  */}
      </div>
    </div>
  )
}

export default HomeSec