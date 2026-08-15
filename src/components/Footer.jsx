import React from 'react'
import TagBox from './TagBox'
import {Link} from 'react-router-dom'
import share from '../assets/icons/share.svg'
import at from '../assets/icons/at.svg'

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col h-115 w-full">
      <div className="grid w-full h-full grid-cols-4 gap-[48px] px-8 pt-20 pb-13 justify-between border-b border-gray-300/10">
        <div className='flex flex-col space-y-5'>
          <h2 className="text-white text-xl font-bold">TheElect Solutions</h2>
          <p className="text-primary-light leading-8">Architectural Precision in Digital<br/>
Engineering. We deliver high-end tech<br/>
solutions for the next generation of<br/>
innovators.
          </p>
          <div className="flex space-x-4 mt-2">
            <Link to="/about">
              <TagBox icon={share} bcolor={"bg-white/5"} size={"h-12 w-12"} iconsize={"h-4 w-4"}/>
            </Link>
            <Link to="/contact">
              <TagBox icon={at} bcolor={"bg-white/5"} size={"h-12 w-12"} iconsize={"h-4 w-4"}/>
            </Link>
          </div>
        </div>
        <div className='flex flex-col space-y-5'>
          <h3 className="text-white text-md font-bold">SOLUTIONS</h3>
          <Link to="/service" className='text-primary-light hover:text-container'>Hardware Sales</Link>
          <Link to="/service" className='text-primary-light hover:text-container'>Enterprise Repair</Link>
          <Link to="/service" className='text-primary-light hover:text-container'>Network Architecture</Link> 
          <Link to="/service" className='text-primary-light hover:text-container'>Consultation</Link> 
        </div>
        <div className='flex flex-col space-y-5'>
          <h3 className="text-white text-md font-bold">COMPANY</h3>
          <Link to="/about" className='text-primary-light hover:text-container'>About Us</Link>
          <Link to="/contact" className='text-primary-light hover:text-container'>Privacy Policy</Link>
          <Link to="/about" className='text-primary-light hover:text-container'>Terms of Service</Link> 
          <Link to="/contact" className='text-primary-light hover:text-container'>Support</Link> 
        </div>
        <div className='flex flex-col space-y-5'>
          <h3 className="text-white text-md font-bold">GLOBAL OFFICES</h3>
          <p className="text-primary-light leading-8">
            12 Tech District, Innovation Ave<br/>
Silicon Plaza, SP 5050<br/>
United Kingdom
          </p>
          <div className="text-container">+44 (0) 20 7946 0958</div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-white">© 2026 The Elect. All rights reserved.</p>
      </div>
    </div>
  )
} 

export default Footer