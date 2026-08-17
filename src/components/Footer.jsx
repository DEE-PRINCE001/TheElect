import React from 'react'
import TagBox from './TagBox'
import { Link } from 'react-router-dom'
import share from '../assets/icons/share.svg'
import at from '../assets/icons/at.svg'

const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-12 py-16 border-b border-white/10">
        {/* Brand Column */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold">TheElect Solutions</h2>
          <p className="text-primary-light text-sm leading-relaxed">
            Architectural Precision in Digital Engineering. We deliver high-end tech solutions for the next generation of innovators.
          </p>
          <div className="flex space-x-3 pt-2">
            <Link to="/about" aria-label="About Us">
              <TagBox icon={share} bcolor="bg-white/10 hover:bg-container transition-colors" size="h-10 w-10" iconsize="h-4 w-4" />
            </Link>
            <Link to="/contact" aria-label="Contact Us">
              <TagBox icon={at} bcolor="bg-white/10 hover:bg-container transition-colors" size="h-10 w-10" iconsize="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">SOLUTIONS</h3>
          <Link to="/service" className="text-primary-light hover:text-container text-sm transition-colors">
            Hardware Sales
          </Link>
          <Link to="/service" className="text-primary-light hover:text-container text-sm transition-colors">
            Enterprise Repair
          </Link>
          <Link to="/service" className="text-primary-light hover:text-container text-sm transition-colors">
            Network Architecture
          </Link>
          <Link to="/service" className="text-primary-light hover:text-container text-sm transition-colors">
            Consultation
          </Link>
        </div>

        {/* Company Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">COMPANY</h3>
          <Link to="/about" className="text-primary-light hover:text-container text-sm transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-primary-light hover:text-container text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link to="/about" className="text-primary-light hover:text-container text-sm transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="text-primary-light hover:text-container text-sm transition-colors">
            Support
          </Link>
        </div>

        {/* Global Offices Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-white">GLOBAL OFFICES</h3>
          <p className="text-primary-light text-sm leading-relaxed">
            12 Tech District, Innovation Ave
            <br />
            Silicon Plaza, SP 5050
            <br />
            United Kingdom
          </p>
          <div className="text-container font-semibold text-sm pt-1">+44 (0) 20 7946 0958</div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-6 text-center text-xs text-primary-light/80">
        © 2026 TheElect Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer