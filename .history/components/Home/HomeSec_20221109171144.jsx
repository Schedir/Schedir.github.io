import {React} from 'react'
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'
import dynamic from "next/dynamic";

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
      x:0, 
      opacity:0,
      transition: {
        delay: .5,
        ease: "easeInOut",
        duration: 1}},
    onscreen:{
      x:300, 
      opacity:1,
      transition: {
        delay: 0,
        ease: "easeInOut",
        duration: 1}
    }}
    const draw = {
      hidden:{
        pathLength:0,
        opacity:0
      },
      visible:{
        pathLength:1,
        opacity:1,
        // fill: [linearGradient(red,blue)],
        transition: {
          pathLength: {type: "spring", duration: 4, bounce: 0 }}
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

        <div className='flex h-screen justify-center items-center mx-[20vw] '>
          <motion.img 
                  className='absolute left-[33vw]'
                  src='/HomeMedia/a.png' width="14%"/>
          <motion.svg 
            initial={"hidden"}
            whileInView={"visible"}
            className='overflow-clip'
            width="7293" height="1418" viewBox="0 0 7293 1418" xmlns="http://www.w3.org/2000/svg">

              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M6913.28 435.471C6905.95 430.572 6897.7 426.933 6888.86 424.86C6882.52 423.363 6876.1 422.724 6869.75 422.893L6313.96 426.263C6310.44 426.213 6306.95 426.411 6303.49 426.848C6281.43 429.588 6262.37 441.894 6250.55 459.463C6248.54 462.455 6246.74 465.6 6245.16 468.877L6032.81 888.918C6021.88 910.526 6022.41 934.919 6032.11 955.19C6044.17 980.799 6070.29 998.454 6100.45 998.271L6651.76 994.928C6654.29 995.17 6656.86 995.287 6659.45 995.271L7218.3 991.882C7259.73 991.631 7293.1 957.85 7292.85 916.429C7292.6 875.008 7258.82 841.634 7217.4 841.885L6780.46 844.534L6937.95 533.028C6940.9 527.468 6943.18 521.493 6944.66 515.214C6946.8 506.265 6947.22 497.148 6946.07 488.293C6944.69 477.462 6941 467.358 6935.51 458.486C6929.97 449.499 6922.49 441.591 6913.28 435.471ZM6221.81 847.532L6612.06 845.166L6749.34 573.626L6359.09 575.992L6221.81 847.532Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#seventh)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M6004.67 431.062C6041.63 449.751 6056.45 494.868 6037.76 531.833L5824.67 953.318C5805.98 990.284 5760.87 1005.1 5723.9 986.412C5686.93 967.724 5672.12 922.607 5690.81 885.641L5903.89 464.156C5922.58 427.19 5967.7 412.374 6004.67 431.062Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#seventh)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M5670.28 434.471C5662.95 429.572 5654.7 425.933 5645.86 423.86C5639.52 422.363 5633.1 421.724 5626.75 421.893L5070.96 425.263C5067.45 425.213 5063.95 425.411 5060.49 425.848C5038.43 428.588 5019.37 440.894 5007.55 458.463C5005.54 461.455 5003.74 464.6 5002.17 467.877L4789.81 887.918C4771.12 924.884 4785.93 970.001 4822.9 988.689C4859.87 1007.38 4904.98 992.561 4923.67 955.595L5116.09 574.992L5506.34 572.626L5348.66 884.529C5329.97 921.495 5344.79 966.612 5381.75 985.3C5418.72 1003.99 5463.83 989.173 5482.52 952.207L5694.95 532.028C5697.9 526.468 5700.18 520.493 5701.67 514.214C5703.8 505.265 5704.22 496.148 5703.07 487.293C5701.69 476.462 5698 466.358 5692.51 457.486C5686.97 448.499 5679.49 440.591 5670.28 434.471Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#sixth)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M4769.28 433.471C4761.95 428.572 4753.7 424.933 4744.86 422.86C4738.52 421.363 4732.1 420.724 4725.75 420.893L4169.96 424.263C4166.45 424.213 4162.95 424.41 4159.5 424.847C4137.47 427.58 4118.42 439.858 4106.6 457.394C4104.56 460.41 4102.75 463.58 4101.16 466.885L3891.39 881.811C3884.29 893.35 3880.24 906.95 3880.33 921.492C3880.58 962.912 3914.36 996.287 3955.78 996.036L4514.63 992.647C4529.91 992.555 4544.1 987.898 4555.9 979.978C4566.46 973.024 4575.41 963.301 4581.52 951.207L4793.95 531.028C4796.9 525.468 4799.18 519.493 4800.66 513.214C4802.8 504.265 4803.22 495.148 4802.07 486.293C4800.69 475.462 4797 465.358 4791.51 456.486C4785.97 447.499 4778.49 439.591 4769.28 433.471ZM4077.93 845.292L4468.18 842.926L4605.34 571.626L4215.09 573.992L4077.93 845.292Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#fifth)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M3895.92 526.708C3894.49 529.992 3892.84 533.154 3890.98 536.175L3681.38 950.763C3669.41 975.957 3643.8 993.446 3614.04 993.627L3056.71 997.006C3050.16 997.185 3043.52 996.502 3036.98 994.902C3017.5 990.17 3000.97 977.825 2990.76 961.178C2985.37 952.379 2981.73 942.379 2980.35 931.667C2979.2 922.837 2979.61 913.745 2981.72 904.818C2983.21 898.484 2985.5 892.457 2988.48 886.852L3200.89 466.694C3207.04 454.548 3216.03 444.794 3226.65 437.833C3238.43 429.968 3252.56 425.346 3267.79 425.254L3780.7 422.144L3972.81 42.156C3991.5 5.19026 4036.62 -9.62629 4073.58 9.06228C4110.55 27.7509 4125.37 72.8676 4106.68 109.833L3895.92 526.708ZM3314.23 574.975L3704.48 572.609L3567.32 843.907L3177.07 846.273L3314.23 574.975Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#fourth)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M2958.67 430.062C2995.63 448.751 3010.45 493.868 2991.76 530.833L2778.67 952.318C2759.98 989.284 2714.87 1004.1 2677.9 985.412C2640.93 966.724 2626.12 921.607 2644.81 884.641L2857.89 463.156C2876.58 426.19 2921.7 411.374 2958.67 430.062Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#third)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M2001.07 435.009C1993.41 429.747 1984.72 425.873 1975.37 423.747C1969.19 422.331 1962.93 421.729 1956.74 421.893L1400.96 425.263C1397.43 425.213 1393.93 425.412 1390.46 425.852C1368.34 428.608 1349.25 440.979 1337.44 458.629C1335.48 461.565 1333.72 464.648 1332.17 467.857L1122.39 882.811C1115.29 894.35 1111.24 907.95 1111.33 922.492C1111.58 963.912 1145.36 997.287 1186.78 997.036L1745.63 993.647C1760.98 993.554 1775.22 988.857 1787.06 980.872C1797.55 973.925 1806.43 964.239 1812.52 952.207L2024.88 532.163C2028.2 525.935 2030.68 519.184 2032.14 512.067C2036.18 492.576 2032.2 472.453 2021.64 456.114C2016.37 447.951 2009.45 440.732 2001.07 435.009ZM1308.93 846.292L1699.18 843.926L1836.34 572.626L1446.09 574.992L1308.93 846.292Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#second)"/>
              <motion.path variants={draw} fill-rule="evenodd" clip-rule="evenodd" d="M1078.06 422.884C1086.81 424.95 1094.96 428.548 1102.23 433.38C1111.57 439.56 1119.15 447.575 1124.72 456.692C1130.1 465.455 1133.73 475.41 1135.12 486.075C1136.32 495.078 1135.89 504.355 1133.69 513.454C1132.2 519.638 1129.95 525.524 1127.04 531.008L914.603 951.202C908.469 963.334 899.489 973.08 888.885 980.039C877.098 987.919 862.948 992.55 847.709 992.642L334.95 995.751L142.671 1376.08C123.983 1413.04 78.8659 1427.86 41.9002 1409.17C4.93441 1390.48 -9.88215 1345.36 8.80642 1308.4L218.193 894.235C219.235 891.332 220.467 888.46 221.895 885.636L434.983 464.151C450.332 433.791 483.508 418.371 515.354 424.184L1058.83 420.889C1065.22 420.718 1071.68 421.366 1078.06 422.884ZM547.531 573.992L410.372 845.291L801.266 842.921L938.425 571.621L547.531 573.992Z" stroke="#EEEEEE" stroke-width="10" stroke-linecap="round" fill="url(#first)"/>
              <defs>
                <linearGradient id="first">
                  {/* <stop offset="0%" stop-color="lightblue" stop-opacity=".5">
                    <animate attributeName="stop-color" values="lightblue;blue;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s' />
                  </stop> */}
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                    <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="second">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="third">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                    <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="fourth">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="fifth">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="sixth">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="seventh">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
                <linearGradient id="eight">
                  <stop offset="100%" stop-color="lightblue" stop-opacity=".5">
                  <animate attributeName="stop-color" values="lightblue;orange;purple;lightblue" dur="8s" repeatCount="indefinite" begin='0s'/>
                  </stop>
                </linearGradient>
              </defs>
          </motion.svg>
        </div>

      </div> 
      <div className='relative bg-schedir-blue'>
        <div className="h-[200vh] items-center justify-center my-auto mx-auto">
          <div className='sticky top-[35vh] text-right mx-[20%]'>

              <div className='flex'>
                <motion.div 
                  style={{backgroundPositionY:useTransform(springscroll, [0, 1], [-5 + '%', 120 + '%'])}}
                  className='bg-auto bg-center bg-clip-text bg-[url("/media/sfondo_sfum_1.png")] text-transparent '>
                      <div className='text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] font-bold  '>
                          Un viaggio inclusivo alla scoperta di storia, cultura, natura
                      </div>
                </motion.div>
              </div>

              <img src='/HomeMedia/IMG_costa.png' className='absolute pt-[16vh] ml-[-20vw]'/>
              </div>
              <div className='sticky top-[45vh] text-right mx-[20%]'>
              <div className='-z-10'>
                <motion.div 
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:0.5, margin:['-350px 0px 0px 0px']}}
                    className='flex justify-end mx-[5vw] my-5 mt-[-10vh]'>
                  <button 
                    type="button" 
                    className="text-left inline-flex items-center">
                      <motion.span
                        variants={arrowdx} className='mx-4 text-white'> Scopri la rotta</motion.span>
                        <motion.span 
                        variants={arrowdx}
                        // viewport={{once:false, amount:1, margin:['-150px 150px 150px 150px']}}
                        whileHover={{ scale: 1.2 }} 
                        whileTap={{ scale: 0.9 }}
                        className='background-animate bg-gradient-to-r from-schedir-green via-schedir-red2 to-schedir-yell 
                        rounded-full p-[1.9px] overlflow-clip'>
                          <svg aria-hidden="true" className="w-14 h-10 rounded-full " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </motion.span>
                  </button>
                </motion.div> 
              </div>
          </div> 

        </div>



      </div>
    </div>
  )
}

export default HomeSec