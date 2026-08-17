import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/service')
    setIsOpen(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/service', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="sticky top-0 w-full bg-background shadow-xs shadow-primary/10 z-50">
      <div className="flex items-center justify-between h-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div
          onClick={() => navigate('/')}
          className="text-xl font-bold text-primary cursor-pointer"
        >
          TheElect Solutions
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-secondary transition-all duration-300 tracking-[0.35px] ${
                  isActive ? 'text-primary border-b-4 border-secondary pb-1' : 'text-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button onClick={handleClick} text="Get Started" shadow="shadow-md shadow-primary/30" />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? 'bg-primary text-white font-bold' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <Button
              onClick={handleClick}
              text="Get Started"
              size="w-full h-12 text-sm font-bold"
              shadow="shadow-md shadow-primary/30"
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar