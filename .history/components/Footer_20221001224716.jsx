import React from 'react';

const Footer = () => {
  return (
      <div>

        <footer className="p-4 bg-transparent rounded-lg shadow md:px-16 md:py-8 dark:bg-transparent z-[0]">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a className="flex items-center mb-4 sm:mb-0">
                    <img src="/media/full_logo.png" className="mr-3 h-8" alt="Schedir Logo" />
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#Navbar" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#Navbar" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#Navbar" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#Navbar" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-800 sm:mx-auto dark:border-gray-800 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Schedir™</a>. All Rights Reserved.
            </span>
        </footer>

      </div>
  )
}

export default Footer;