import React from 'react';
import navigation from '../constants/navigation';
import { NavLink } from 'react-router-dom';
// import { IoIosSearch } from "react-icons/io";

const mobileNav = navigation;

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 fixed bottom-0 w-full'>
      <div className='flex items-center justify-between h-full w-full'>
        {mobileNav.map((navItem, index) => {
          return (
            <NavLink key={navItem.id+'mobilenavigation'} 
            className={({isActive}) => `px-5 h-full flex items-center flex-col justify-center ${isActive && "text-red-600"}`}
            to={navItem.href}
            >
              <div className='text-xl'>
                {navItem.icon}
              </div>
              <p className='text-sm'>
                {navItem.label}
              </p>
            </NavLink>
          );
        })}
      </div>
    </section>
  )
}

export default MobileNavigation;
