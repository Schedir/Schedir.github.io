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

        <div className='flex h-screen justify-center items-center mx-[10vw] bg-clip-text background-animate
          bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell '>

          <motion.svg 
            initial={"hidden"}
            whileInView={"visible"}
            width="7293" height="1418" viewBox="0 0 7293 1418" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path variants={draw} fillRule="evenodd" clipRule="evenodd" d="M6913.24 435.446C6905.94 430.573 6897.73 426.95 6888.93 424.877C6882.57 423.368 6876.12 422.724 6869.74 422.894L6313.96 426.264C6310.43 426.213 6306.91 426.413 6303.43 426.856C6281.39 429.611 6262.34 441.922 6250.53 459.49C6248.53 462.474 6246.73 465.609 6245.17 468.875L6032.81 888.919C6021.88 910.526 6022.41 934.919 6032.11 955.19C6044.17 980.8 6070.29 998.455 6100.45 998.272L6651.76 994.929C6654.29 995.171 6656.86 995.287 6659.45 995.272L7218.3 991.883C7259.73 991.632 7293.1 957.85 7292.85 916.43C7292.6 875.009 7258.82 841.635 7217.4 841.886L6780.46 844.535L6937.95 533.032C6940.91 527.466 6943.18 521.484 6944.67 515.198C6946.8 506.252 6947.22 497.139 6946.07 488.287C6944.69 477.47 6941 467.379 6935.53 458.516C6929.98 449.504 6922.48 441.576 6913.24 435.446ZM6221.81 847.533L6612.06 845.167L6749.34 573.627L6359.09 575.993L6221.81 847.533Z" fill="#EEEEEE"/>
              <motion.path variants={draw} d="M5970.83 497.996L5757.74 919.481" stroke="#EEEEEE" stroke-width="150" stroke-linecap="round"/>
              <motion.path variants={draw}  clip-rule="evenodd" d="M5670.24 434.446C5662.94 429.573 5654.73 425.95 5645.93 423.877C5639.57 422.368 5633.12 421.724 5626.74 421.894L5070.96 425.264C5067.43 425.213 5063.91 425.413 5060.43 425.856C5038.39 428.611 5019.34 440.922 5007.53 458.49C5005.53 461.474 5003.73 464.609 5002.17 467.875L4789.81 887.919C4771.12 924.885 4785.93 970.001 4822.9 988.69C4859.87 1007.38 4904.98 992.562 4923.67 955.596L5116.09 574.993L5506.34 572.627L5348.66 884.53C5329.97 921.496 5344.78 966.613 5381.75 985.301C5418.72 1003.99 5463.83 989.173 5482.52 952.208L5694.95 532.032C5697.91 526.466 5700.18 520.484 5701.67 514.198C5703.8 505.252 5704.22 496.139 5703.07 487.287C5701.69 476.47 5698 466.379 5692.53 457.516C5686.98 448.504 5679.48 440.576 5670.24 434.446Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M4769.24 433.446C4761.94 428.573 4753.73 424.95 4744.93 422.877C4738.57 421.368 4732.12 420.724 4725.74 420.894L4169.96 424.264C4166.43 424.213 4162.91 424.413 4159.43 424.856C4137.39 427.611 4118.34 439.922 4106.53 457.49C4104.53 460.474 4102.73 463.609 4101.17 466.875L3891.39 881.812C3884.29 893.35 3880.24 906.951 3880.33 921.493C3880.58 962.913 3914.36 996.288 3955.78 996.037L4514.63 992.648C4529.9 992.555 4544.09 987.903 4555.89 979.988C4566.46 973.033 4575.4 963.307 4581.52 951.208L4793.95 531.032C4796.91 525.466 4799.18 519.484 4800.67 513.198C4802.8 504.252 4803.22 495.139 4802.07 486.287C4800.69 475.47 4797 465.379 4791.53 456.516C4785.98 447.504 4778.47 439.576 4769.24 433.446ZM4077.93 845.293L4468.18 842.927L4605.34 571.627L4215.09 573.993L4077.93 845.293Z" fill="#EEEEEE"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M3895.92 526.71C3894.49 529.993 3892.84 533.155 3890.98 536.174L3681.37 950.767C3669.41 975.96 3643.8 993.447 3614.04 993.628L3056.71 997.007C3050.15 997.185 3043.52 996.503 3036.98 994.903C3017.5 990.171 3000.97 977.826 2990.76 961.179C2985.37 952.38 2981.73 942.38 2980.35 931.668C2979.2 922.838 2979.61 913.746 2981.72 904.819C2983.21 898.485 2985.5 892.458 2988.48 886.853L3200.89 466.695C3207.03 454.549 3216.03 444.795 3226.65 437.835C3238.43 429.969 3252.56 425.347 3267.79 425.255L3780.7 422.145L3972.81 42.157C3991.5 5.19127 4036.62 -9.62529 4073.58 9.06329C4110.55 27.7519 4125.37 72.8686 4106.68 109.834L3895.92 526.71ZM3314.23 574.976L3704.48 572.61L3567.32 843.908L3177.07 846.274L3314.23 574.976Z" fill="#EEEEEE"/>
              <motion.path variants={draw} d="M2924.83 496.996L2711.74 918.481" stroke="#EEEEEE" stroke-width="150" stroke-linecap="round"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M2001.04 434.982C1993.4 429.747 1984.75 425.889 1975.44 423.764C1969.24 422.336 1962.95 421.728 1956.74 421.894L1400.96 425.264C1397.42 425.213 1393.89 425.414 1390.4 425.859C1368.31 428.63 1349.22 441.002 1337.43 458.646C1335.47 461.577 1333.71 464.654 1332.18 467.856L1122.39 882.812C1115.29 894.35 1111.24 907.951 1111.33 922.493C1111.58 963.913 1145.36 997.288 1186.78 997.037L1745.63 993.648C1760.98 993.555 1775.22 988.858 1787.06 980.873C1797.55 973.926 1806.43 964.24 1812.52 952.208L2024.88 532.166C2028.21 525.933 2030.68 519.176 2032.14 512.053C2036.18 492.578 2032.2 472.474 2021.66 456.144C2016.37 447.956 2009.44 440.717 2001.04 434.982ZM1308.93 846.293L1699.18 843.927L1836.34 572.627L1446.09 574.993L1308.93 846.293Z" fill="#EEEEEE"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M1078.06 422.884C1086.81 424.95 1094.97 428.549 1102.23 433.383C1111.57 439.562 1119.15 447.576 1124.72 456.691C1130.1 465.455 1133.73 475.41 1135.12 486.076C1136.32 495.079 1135.89 504.357 1133.69 513.456C1132.2 519.639 1129.95 525.525 1127.04 531.009L914.603 951.203C908.467 963.339 899.483 973.087 888.875 980.047C877.09 987.923 862.944 992.551 847.709 992.643L334.95 995.752L142.671 1376.08C123.983 1413.04 78.8659 1427.86 41.9002 1409.17C4.93441 1390.48 -9.88215 1345.37 8.80642 1308.4L218.193 894.236C219.235 891.333 220.467 888.461 221.895 885.637L434.983 464.152C450.332 433.792 483.508 418.372 515.354 424.185L1058.83 420.89C1065.22 420.719 1071.68 421.367 1078.06 422.884ZM547.531 573.992L410.372 845.292L801.266 842.922L938.425 571.622L547.531 573.992Z" fill="#EEEEEE"/>
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