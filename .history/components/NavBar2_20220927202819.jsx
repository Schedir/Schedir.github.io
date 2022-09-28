import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const NavBar2 = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#8BE8CB')
    
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 850){
                setColor('transparent');
                setTextColor('#8BE8CB');
            }
            else {
                setColor('transparent');
                setTextColor('#8BE8CB');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div id='Navbar' style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-screen z-10 ease-in duration-300'>
        <div className='max-w-[1500px] m-auto flex justify-between items-center p-4'>
            <a className="flex items-center mb-4 sm:mb-0">
            {/* <img src="/media/full_logo.png" className="mr-3 h-8" alt="Schedir Logo" /> */}
                <h1 href="/" style={{color: `${textColor}`}} className='items-center font-bold text-3xl'>Schedir</h1>
            </a>


            <div class="hidden w-full md:block md:w-auto " id="navbar-default">
                <ul class="flex flex-col p-3 mt-auto bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/10">
                    <li>
                    <a href="/" class="block text-schedir-green hover:tepy-2 pr-4 pl-3 text-[16px] rounded md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="/logbook" class="block text-schedir-green hover:tepy-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0">Logbook</a>
                    </li>
                    <li>
                    <a href="#" class="block text-schedir-green hover:tepy-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">The Route</a>
                    </li>
                    <li>
                    <a href="#" class="block text-schedir-green hover:tepy-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">The Schedir</a>
                    </li>
                    <li>
                    <a href="#" class="block text-schedir-green hover:tepy-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">Join the crew</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar2;