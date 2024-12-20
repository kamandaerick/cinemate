import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate()

  // Define an array of navigation items
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
  //Handle change in the form input
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  // Handle form submission(Prevent default behavior of reloading)
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  //Include the search query in the url
  useEffect(() => {
    navigate(`/search?q=${searchInput}`)
  },[searchInput, navigate])

  return (
   <header className='fixed top-0 w-full h-16 bg-black bg-opacity-70'>

      {/* Logo Section */}
      <div className='container mx-auto px-3 flex items-center h-full'>
        <Link to={'/'}>
          <img src={logo} alt="Cinemate Logo" width={120}/>
        </Link>
      
        {/* Navigation  Links */}
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

        {/* Search bar and User Icon */}
        <div className='ml-auto flex items-center gap-6'>
          <form  className='flex items-center gap-3' onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Search here ...' 
              className='px-4 outline-none bg-black'
              value={searchInput}
              onChange={handleChange}
            />
            {/* Search icon/Button */}
            <button className='text-white'>
              <IoIosSearch size={24}/>
            </button>
          </form>

        <div className='cursor-pointer active:scale-50 transition-all'>
          <FaCircleUser size={30}/>
        </div>
        </div>
      </div>
   </header>
  )
}

export default Header;
