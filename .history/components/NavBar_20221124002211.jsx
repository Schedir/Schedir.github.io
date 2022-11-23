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
            if(window.scrollY >= 850){
                setColor('#transparent');
                setTextColor('#E0E0E0');
            }
            else {
                setColor('#transparent');
                setTextColor('#E0E0E0');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

  return (
    <div className='absolute z-50'>
        <div id='Navbar' style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-screen ease-in duration-300 z-[10]'>
            <div className='max-w-[1500px] m-auto flex justify-between items-center p-4'>
                <div href="#" className="flex items-center my-auto sm:mb-0">
                    <img src="/HomeMedia/posidonia_logo.png" className="mr-1 h-20" alt="Schedir Logo" />
                    {/* <h1  className='items-center p-2 font-bold text-xl md:text-3xl text-schedir-white hover:text-schedir-green'>posidonia</h1> */}
                </div>


                <div className=" flex-row md:w-auto " id="navbar-default">
                    <ul className="flex flex-row p-3 mt-auto mr-auto bg-schedir-lavander/10 rounded-lg border-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-schedir-lavander/50">

                        <li>
                            <Link href="/">
                                <div className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto  pr-2 text-[11px] sm:text-[14px] md:text-[16px] rounded md:p-0" aria-current="page">Home</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/logbook">
                                <div  className="block text-schedir-white hover:text-schedir-yell hover:scale-105 py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0">Logbook</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/TheSchedir">
                                <div href="#" className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 ">Schedir</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/JoinCrew">                        
                                <div className="block text-schedir-white hover:text-schedir-yell hover:scale-105  py-auto px-auto pr-2 text-[11px] sm:text-[14px] md:text-[16px] md:border-0 md:p-0 ">Join the crew</div>
                            </Link>                    
                        </li>
                        {/* <li>
                        <div href="#" className="block text-schedir-white hover:text-schedir-yell py-2 pr-4 pl-3 text-[16px] md:border-0 md:p-0 ">Join the crew</div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar;