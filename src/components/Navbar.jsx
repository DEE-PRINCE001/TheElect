import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/service")
    }
  return (
    <div className="flex sticky top-0 items-center h-20 w-full justify-between py-4 px-6 bg-background shadow-xs shadow-primary/10 z-50">
        <div className="text-[20px] font-bold text-primary font-sans-serif-700">TheElect Solutions</div>
        <div className="flex space-x-8 justify-center items-center text-[16px] font-sans-serif-500 font-medium">
            <NavLink to="/" className={({isActive}) => `hover:text-secondary transition-all duration-300 tracking-[0.35px] ${isActive ? "text-primary border-b-4 border-secondary pb-1" : ""}`}>
                Home
            </NavLink>
            <NavLink to="/service" className={({isActive}) => `hover:text-secondary transition-all duration-300 ease-in-out tracking-[0.35px] ${isActive ? "text-primary border-b-4 border-secondary pb-1" : ""}`}>
                Services
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `hover:text-secondary transition-all duration-300 ease-in-out tracking-[0.35px] ${isActive ? "text-primary border-b-4 border-secondary pb-1" : ""}`}>
                About
            </NavLink>
            <NavLink to="/portfolio" className={({isActive}) => `hover:text-secondary transition-all duration-300 ease-in-out tracking-[0.35px] ${isActive ? "text-primary border-b-4 border-secondary pb-1" : ""}`}>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `hover:text-secondary transition-all duration-300 ease-in-out tracking-[0.35px] ${isActive ? "text-primary border-b-4 border-secondary pb-1" : ""}`}>
                Contact
            </NavLink>
        </div>
        <Button onClick={handleClick} text="Get Started" sh/>
    </div>
  )
}

export default Navbar