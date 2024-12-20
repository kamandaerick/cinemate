import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const navigation = [
    {
      label: "Movies",
      href: "movies"
    },
    {
      label: "TV Shows",
      href: "tv"
    }
  ];
  return (
   <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70'>
      <div className='container mx-auto px-3 flex items-center h-full'>
        <div>
          <img src={logo} alt="Cinemate Logo" width={120}/>
        </div>
      
        <nav className='hidden lg:flex items-center gap-3 ml-5'>
          {
            navigation.map((nav, index) => {
              return (
                <div>
                  <NavLink 
                  key={nav.label} 
                  to={nav.href} 
                  className={({isActive}) => `px-2 hover:text-red-500 {isActive && text-red-500}`}
                  >
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>
        <div className='ml-auto'>
          <div>
          <FaCircleUser size={30}/>
          </div>
        </div>
      </div>
   </header>
  )
}

export default Header;
