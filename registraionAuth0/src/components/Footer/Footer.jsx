import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-400 p-36 pt-10 pb-10 space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="text-white text-3xl lg:text-4xl">
          <h1>CINEVERSE</h1>
        </div>
        <div className="text-white text-sm lg:text-base">
          <ul className="text-center lg:text-left">
            <li className="font-semibold text-yellow-400 text-lg pb-4 lg:pb-6">About</li>
            <li>CineVerse</li>
            <li>React JS</li>
          </ul>
        </div>
        <div className="text-white text-sm lg:text-base">
          <ul className="text-center lg:text-left">
            <li className="font-semibold text-yellow-400 text-lg pb-4 lg:pb-6">Legal</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="text-white text-sm lg:text-base">
          <ul className="text-center lg:text-left">
            <li className="font-semibold text-yellow-400 text-lg pb-4 lg:pb-6">Legal</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-400 p-36 pt-6 pb-6 space-y-6 lg:space-y-0 lg:space-x-10'>
        <div className="text-white text-sm lg:text-sm">
          <h1>@ 2024 CINEVERSE</h1>
        </div>
        <div className='flex gap-3 text-2xl'>
          <Link to='https://www.facebook.com/nazmulislam4581' className='text-white'> <BsFacebook/> </Link>
          <Link to='https://github.com/Nazmul246' className='text-white'> <BsGithub/> </Link>
          <Link to='https://www.linkedin.com/in/nazmul-islam-nayem-379424213/' className='text-white'> <BsLinkedin/> </Link>
          <Link></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer