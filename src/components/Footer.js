import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/erick-kamanda/'
const GITHUB_PROFILE = 'https://github.com/kamandaerick'

const Footer = () => {
  return (
   <footer className='text-center bg-black h-max top-4 pt-4'>
    <div className=''>
      <p className='text-white text-lg pb-3'>Designed By Erick Kamanda</p>
      <div className='flex items-center justify-center gap-10'>
        <Link to={LINKEDIN_PROFILE}>
          <div className='flex items-center gap-3' target="_blank" rel="noopener noreferrer">
            <p>Linkedin:</p>
          <GrLinkedin />
          </div>
        </Link>
        <Link to={GITHUB_PROFILE}>
          <div className='flex items-center gap-3' target="_blank" rel="noopener noreferrer">
          <p>GitHub</p>
            <FaGithubSquare />
          </div>
        </Link>
      </div>
    </div>
   </footer>
  )
}

export default Footer;
