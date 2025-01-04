import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className='text-center bg-black h-max top-4 pt-4'>
    <div className=''>
      <p className='text-white text-lg pb-3'>Designed By Erick Kamanda</p>
      <div className='flex items-center justify-center gap-10'>
        <div className='flex items-center gap-3'>
          <p>Linkedin:</p>
         <GrLinkedin />
        </div>
        <div className='flex items-center gap-3'>
        <p>GitHub</p>
           <FaGithubSquare />
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer;
