import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";


const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/erick-kamanda/'
const GITHUB_PROFILE = 'https://github.com/kamandaerick'

const Footer = () => {
  return (
   <footer className="hidden lg:block fixed text-center w-full bg-black h-max bottom-0 pt-4">
    <div className=''>
      <p className='text-white text-lg pb-3'>Designed By Erick Kamanda</p>
      <div className='flex items-center justify-center gap-10'>
        <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer">
          <div className='flex items-center gap-3' >
            <p>Linkedin:</p>
          <GrLinkedin />
          </div>
        </a>
        <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
          <div className='flex items-center gap-3'>
          <p>GitHub</p>
            <FaGithubSquare />
          </div>
        </a>
      </div>
    </div>
   </footer>
  )
}

export default Footer;
