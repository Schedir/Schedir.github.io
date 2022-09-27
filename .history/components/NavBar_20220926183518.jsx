import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 950){
                setColor('transparent');
                setTextColor('#ffffff');
            }
            else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div id='Navbar' style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-screen z-10 ease-in duration-300'>
        <div className='max-w-[1500px] m-auto flex justify-between items-center p-4 text-white'>
            <a className="flex items-center mb-4 sm:mb-0">
                <img src="/media/full_logo.png" className="mr-3 h-8" alt="Schedir Logo" />
                <h1 href="/" style={{color: `${textColor}`}} className='items-center font-bold text-3xl'>Schedir</h1>
            </a>

                
            {/* <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" className="inline-flex items-center p-2 mt-2 mr-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50/20 dark:bg-gray-800/20 dark:hover:bg-gray-800/40 dark:focus:ring-gray-600/20" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button> */}

            <div class="hidden w-full md:block md:w-auto " id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-[16px] text-white bg- rounded md:bg-transparent md:text-blue-900 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-[16px] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logbook</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-[16px] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">The Route</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-[16px] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">The Schedir</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 pr-4 pl-3 text-[16px] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-blue-900 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Join the crew</a>
                    </li>
                </ul>
            </div>

            {/* <div id="dropdownDotsHorizontal" className="hidden z-10 w-36 bg-white/30 rounded divide-y divide-gray-100/30 shadow dark:bg-gray-700/30 dark:divide-gray-600/30">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="/logbook" className="block text-[16px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:hover:text-white">Logbook</a>
                    </li>
                    <li>
                        <a href="#" className="block text-[16px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:hover:text-white">The Route</a>
                    </li>
                    <li>
                        <a href="#" className="block text-[16px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:hover:text-white">The Schedir</a>
                    </li>
                </ul>
                <div className="py-1">
                <a href="#" className="block py-2 px-4 text-[16px] text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:text-gray-200 dark:hover:text-white">Join the crew</a>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default NavBar;