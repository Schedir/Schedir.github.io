import React, {useState, useEffect} from 'react';
import Link from "next/link";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('#8BE8CB')
    
    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 0){
                setColor('#081221');
                setTextColor('#E0E0E0');
            }
            else {
                setColor('081221');
                setTextColor('#E0E0E0');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div className='Relative'>
        <div id='Navbar' style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-screen ease-in duration-300 z-[10]'>
            <div className='max-w-[1500px] m-auto flex justify-between items-center p-4'>
                <a href="#" className="flex items-center my-auto sm:mb-0">
                    <img src="/media/full_logo.png" className="mr-3 h-8" alt="Schedir Logo" />
                    <h1  className='items-center p-2 font-bold text-xl md:text-3xl text-schedir-white hover:text-schedir-green'>Schedir</h1>
                </a>


                <div className=" flex-row md:w-auto " id="navbar-default">
                    <ul className="flex flex-row p-3 mt-auto mr-auto bg-schedir-lavander/10 rounded-lg border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/10">

                        <li>
                            <Link href="/Logbook">
                                <a  className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0">Logbook</a>
                            </Link>
                        </li>
                        <li>
                        <Link href="/Route">                        
                            <a className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 ">The Route</a>
                        </Link>                    
                        </li>
                        <li>
                        <a href="#" className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 ">The Schedir</a>
                        </li>
                        <li>
                            <Link href="/">
                                <a className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto  pr-2 text-[11px] sm:text-[14px] md:text-[16px] rounded md:p-0" aria-current="page">Home</a>
                            </Link>
                        </li>
                        {/* <li>
                        <a href="#" className="block text-schedir-white hover:text-schedir-yell py-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">Join the crew</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar;