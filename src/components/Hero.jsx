import React, { useState, useEffect } from 'react'
import overlay from '../assets/images/Overlay+Blur.png'
import boverlay from '../assets/images/heroblur.svg'
import arrow from '../assets/icons/arrow_right.svg'
import Button from './Button'
import heroImage from '../assets/images/hero_image.jpg'
import TagBox from './TagBox'
import markIcon from '../assets/icons/mark.svg'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {setLoaded(true)}, [])

  const navigate = useNavigate()

  const navigateService = () => navigate("/service")

  const navigatePortfolio = () => navigate("/portfolio")

  return (
    <div className={`py-[221.17px] relative items-center w-full bg-background font-sans-serif-700 overflow-hidden`}>
        <img src={overlay} alt="Hero Background" className="absolute w-150 h-150 object-cover -top-60 right-0"/>
        <img src={boverlay} alt="Hero Background" className="absolute w-150 h-150 object-cover -bottom-20 -left-16"/>
        <div className={`flex justify-between h-100 w-full z-10
          ${loaded ? "opacity-100 translate-0 scale-100":"opacity-0 scale-30 translate-y-10"} transition-all duration-1500 ease-in-out`}>
          <div className="flex flex-col h-full w-1/2 space-y-2 p-8 font-sans-serif-700">
            <p className="text-[16px] text-secondary font-bold font-sans-serif-700 tracking-[3.2px]">PRECISION TECH ENGINEERING</p>
            <h1 className="text-[76px] font-sans-serif-800 font-extrabold text-primary leading-25">Your One-Stop <br/> Tech Hub!</h1>
            <p className="text-primary text-[18px] mt-4 mb-9">Experience architectural precision in digital engineering. From high-
              performance hardware to enterprise network solutions, we build the
              foundations of your success.</p>
            <div className="flex space-x-4">
              <Button onClick={navigateService} text="Explore Services" icon={arrow} size={"z-10 h-[58px] w-[220.67px] text-[16px]"} shadow={"shadow-lg shadow-primary/30"} 
              />
              <Button onClick={navigatePortfolio} text="Our Portfolio" color={"secondary"} bg={"bg-white"} size={"z-10 h-[58px] w-[165.36px] text-[16px] font-bold"}
              hover={"hover:scale-105 hover:bg-primary hover:text-white duration-500"}/>
            </div>
          </div>
          <div className="relative h-full">
            <img src={heroImage} alt="Hero Image" className=" mr-8 h-[478.66px] w-[478.66px] object-cover rounded-3xl"/>
            <div className="flex flex-col p-7 justify-center space-y-2 absolute h-36.75 w-60 backdrop-blur-lg -bottom-27 shadow-xl shadow-black/15 -left-13 rounded-2xl bg-white/85">
              <div className="flex space-x-3">
                <TagBox bcolor="bg-container" icon={markIcon}/>
                <div className='flex flex-col py-1 -space-y-0.5'>
                  <p className="text-[#424750] font-bold font-sans-serif-700 text-[12px]">RELIABILITY</p>
                  <p className="text-primary font-bold font-sans-serif-700 text-[14px]">Certified Quality</p>
                </div>
              </div>
              <div className="text-[#424750] text-[12px] font-Regular font-sans-serif-400 leading-4">
                Rigorous testing on every hardware and software solution we deliver.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero