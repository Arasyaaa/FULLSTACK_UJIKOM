import React from 'react'
import logo from '../images/logongopi.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="bg-amber-900 w-full z-10 fixed top-0 border-gray-200 shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a
         
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={logo}
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-amber-50 self-center text-2xl font-semibold whitespace-nowrap ">
           Kintamani Coffee
          </span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="tel:5541251234"
            className="text-sm  text-amber-50  hover:underline"
          >
          </a>
          <Link
            to="/login"
            className="text-sm  text-amber-50 font-semibold  hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
    
  </>
  
  )
}

export default Navbar
