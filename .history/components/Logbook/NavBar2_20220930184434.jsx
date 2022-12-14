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
                setTextColor('#E0E0E0');
            }
            else {
                setColor('transparent');
                setTextColor('#E0E0E0');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div id='Navbar' style={{backgroundColor: `${color}`}} className='fixed left-0 top-5 w-screen z-10 ease-in duration-300'>
        <div className='max-w-[1500px] m-auto flex justify-between items-center p-4'>
            <a href="#" className="flex items-center my-auto sm:mb-0">
                <img src="/media/full_logo.png" className="mr-3 h-8" alt="Schedir Logo" />
                <h1  className='items-center font-bold text-xl md:text-3xl text-schedir-white hover:text-schedir-green'>Schedir</h1>
            </a>


            <div className=" flex-row md:w-auto " id="navbar-default">
                <ul className="flex flex-row p-3 mt-auto mr-10 bg-schedir-lavander/10 rounded-lg border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/10">

                    <li>
                    <a href="/logbook" className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto pr-4 pl-3 text-xs md:text-[16px] md:border-0 md:p-0">Logbook</a>
                    </li>
                    <li>
                    <a href="#" className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto pr-4 pl-3 text-xs md:text-[16px] md:border-0 md:p-0 ">The Route</a>
                    </li>
                    <li>
                    <a href="#" className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto pr-4 pl-3 text-xs md:text-[16px] md:border-0 md:p-0 ">The Schedir</a>
                    </li>
                    <li>
                    <a href="/" className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-1 pr-4 pl-3 text-xs md:text-[16px] rounded md:p-0" aria-current="page">Home</a>
                    </li>
                    {/* <li>
                    <a href="#" className="block text-schedir-white hover:text-schedir-yell py-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">Join the crew</a>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar2;