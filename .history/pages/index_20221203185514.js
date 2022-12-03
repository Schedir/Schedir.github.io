import Head from 'next/head';
import HomeSec from '../components/Home/HomeSec';
import HomeSec1 from '../components/Home/HomeSec1';
import HomeSec22 from '../components/Home/HomeSec22';
import HomeSec3 from '../components/Home/HomeSec3';
import {motion, useScroll, useTransform, useSpring} from 'framer-motion'
import Homesec21 from '../components/Home/Homesec21';

const Index = () => {

  const { scrollYProgress } = useScroll();
  const springscroll = useSpring(scrollYProgress, { stiffness: 500, damping: 75 })

  return (
    <motion.div>
      <Head>
        <title>Schedir</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      
      <div className='sticky topè+-lg:top-[-44vh] z-[99] '>
        <div className='flex h-screen justify-center items-center '>
          <motion.div className='items-center' 
          style={{
            scale:useTransform(springscroll, [0, .065], [.7, .15]),
            x:useTransform(springscroll, [0,.065],[0+'vw',-40+'vw'])
          }}  
          >
            <svg className='overflow-clip scale-150 lg:scale-125' viewBox="0 0 4125 4151" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2050.77 981.678C2093.37 981.496 2661.21 1052.13 2661.74 1177.42C2661.94 1224.55 2605.54 1313.58 2588.88 1359.08C2537.37 1499.64 2516.93 1678.97 2538.28 1824.01C2571.63 2050.69 2718.49 2234.4 2751.38 2457.82C2845 3094.1 2543.27 3246.66 2028.99 3265.66C2067.16 3182.48 2135.41 3103.07 2180.48 3021.32C2370.81 2676.01 2431.74 2197.84 2375.18 1813.37C2343.76 1599.85 2273.05 1404.84 2183.26 1213.47C2153.32 1149.69 2051.07 1051.49 2050.77 981.678Z" fill="url(#first)" /> 
              {/* fill="#00A390" */}
              <path d="M1882.84 1001.19C1988.19 991.469 1964.79 1348.87 1964.79 1392.95C1964.79 1640.28 1785.89 1870.04 1773.59 2119.66C1756.39 2467.97 1932.01 2764.67 1932.01 3118.9C1932.01 3135.48 1920.71 3239.06 1904.7 3249.48C1871.68 3270.92 1504.49 3149.56 1500.45 3101.87C1468.77 2728.72 1620.63 2354.51 1620.63 1977.73C1620.63 1702.39 1418.42 1491.69 1429.43 1205.59C1431.71 1146.39 1833.42 1005.75 1882.84 1001.19Z" fill="url(#second)"/>
              {/* fill="#BEE510" */}
              <path d="M2076.7 1202.24C2280.75 1670.86 2353.07 2138.17 2212.76 2663.09C2186.81 2760.14 2108.03 3030.98 2021.54 3078.05C2025.13 2738.31 1881.65 2458.34 1885.17 2124.33C1887.05 1946.53 1980.9 1744.96 2032.32 1579.3C2070.17 1457.29 2069.59 1330.52 2076.7 1202.24Z" fill="url(#third)" />
              {/* fill="#2C6334" */}
              <path d="M1025.53 1717.45C1084.87 1968.8 1358.6 2041.16 1434.68 2280.96C1509.41 2516.54 1397.15 2764.18 1378.79 3000.95C1007.89 2807.55 851.341 2066.95 1025.53 1717.45Z" fill="url(#fourth)"/>
              {/* fill="#00A390" */}
              <path d="M1316.77 1283.75C1332.43 1469.75 1414.31 1608.9 1473.13 1779.43C1518.91 1912.16 1515.15 2049.99 1519.48 2189.42C1443.16 1968.17 933.19 1762.14 1153.74 1468.32C1203.37 1402.19 1258.88 1344.62 1316.77 1283.75Z" fill="url(#fifth)"/>
              {/* fill="#5040C9" */}
              <path d="M2824.08 1252.24C2854.92 1319.6 2937.6 1380.47 2977.84 1452.46C3074.32 1625.22 3030.32 2297.07 2838.62 2450.68C2764.24 2077.79 2423.11 1573.53 2824.08 1252.24Z" fill="url(#sixth)"/>
              {/* fill="#BEE510" */}
              <path d="M3164.33 1724.85C3294.05 2218.59 3224.5 2643.49 2828.75 2988.03C2810.34 2707.75 2946.13 2548.86 3034.54 2305.66C3104.13 2114.17 3136 1927.5 3164.33 1724.85Z" fill="url(#seventh)"/>
              {/* fill="#5040C9" */}
              <defs>
                  <linearGradient id="first" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#00A390" stopOpacity="1">
                      <animate attributeName="stop-color" values="#00A390;#5040C9;#BEE510;#081221;#00A390" dur="12s" repeatCount="indefinite" begin='0s' />
                    </stop>
                    <stop offset="100%" stopColor="#00A390" stopOpacity="1">
                      <animate attributeName="stop-color" values="#00A390;#081221;#2C6334;#5040C9;#00A390" dur="12s" repeatCount="indefinite" begin='0s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="second" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#BEE510" stopOpacity="1">
                      <animate attributeName="stop-color" values="#BEE510;#081221;#2C6334;#00A390;#BEE510" dur="12s" repeatCount="indefinite" begin='0.1s' />
                    </stop>
                    <stop offset="100%" stopColor="#BEE510" stopOpacity="1">
                      <animate attributeName="stop-color" values="#BEE510;#00A390;#5040C9;#081221;#BEE510" dur="12s" repeatCount="indefinite" begin='0.1s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="third" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#2C6334" stopOpacity="1">
                      <animate attributeName="stop-color" values="#2C6334;#BEE510;#5040C9;#081221;#2C6334" dur="12s" repeatCount="indefinite" begin='0.2s' />
                    </stop>
                    <stop offset="100%" stopColor="#2C6334" stopOpacity="1">
                      <animate attributeName="stop-color" values="#2C6334;#0812210;#00A390;#BEE510;#2C6334" dur="12s" repeatCount="indefinite" begin='0.2s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="fourth" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#00A390" stopOpacity="1">
                      <animate attributeName="stop-color" values="#00A390;#5040C9;#BEE510;#081221;#00A390" dur="12s" repeatCount="indefinite" begin='0.3s' />
                    </stop>
                    <stop offset="100%" stopColor="#00A390" stopOpacity="1">
                      <animate attributeName="stop-color" values="#00A390;#081221;#2C6334;#5040C9;#00A390" dur="12s" repeatCount="indefinite" begin='0.3s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="fifth" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#5040C9" stopOpacity="1">
                      <animate attributeName="stop-color" values="#5040C9;#081221;#00A390;#00A390;#5040C9" dur="12s" repeatCount="indefinite" begin='0.2s' />
                    </stop>
                    <stop offset="100%" stopColor="#5040C9" stopOpacity="1">
                      <animate attributeName="stop-color" values="#5040C9;#00A390;#BEE510;#081221;#5040C9" dur="12s" repeatCount="indefinite" begin='0.2s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="sixth" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#BEE510" stopOpacity="1">
                      <animate attributeName="stop-color" values="#BEE510;#081221;#2C6334;#00A390;#BEE510" dur="12s" repeatCount="indefinite" begin='0.1s' />
                    </stop>
                    <stop offset="100%" stopColor="#BEE510" stopOpacity="1">
                      <animate attributeName="stop-color" values="#BEE510;#00A390;#5040C9;#081221;#BEE510" dur="12s" repeatCount="indefinite" begin='0.1s'/>
                    </stop>
                  </linearGradient>
                  <linearGradient id="seventh" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#5040C9" stopOpacity="1">
                      <animate attributeName="stop-color" values="#5040C9;#081221;##00A390;#00A390;#5040C9" dur="12s" repeatCount="indefinite" begin='0s' />
                    </stop>
                    <stop offset="100%" stopColor="#5040C9" stopOpacity="1">
                      <animate attributeName="stop-color" values="#5040C9;#00A390;#BEE510;#081221;#5040C9" dur="12s" repeatCount="indefinite" begin='0s'/>
                    </stop>
                  </linearGradient>
                </defs>
            </svg>
            {/* <motion.h1 
            id='stroke'
            style={{scale:1.5}} 
            className='
            text-center text-transparent text-[25px] sm:text-[40px] md:text-[55px] lg:text-[155px] 
            mt-[-40vh] z-30
            font-extrabold 
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-white via-white to-schedir-white'>posidonia</motion.h1> */}
            <motion.h1 
            style={{scale:1.5}} 
            className='
            text-center text-transparent text-[85px] lg:text-[155px] 
            mt-[-27.5vh] z-30
            font-extrabold 
            bg-clip-text background-animate
            bg-gradient-to-r from-schedir-white via-white to-schedir-white'>posidonia</motion.h1>

          </motion.div>
        </div>
      </div> 
      
      <HomeSec/>
      <HomeSec1/>
      <Homesec21/>
      <HomeSec22/>
      <HomeSec3/>
    </motion.div>
  );
};

export default Index;