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

  useEffect(() => {
    setLoaded(true)
  }, [])

  const navigate = useNavigate()

  const navigateService = () => navigate('/service')
  const navigatePortfolio = () => navigate('/portfolio')

  return (
    <div className="relative py-16 md:py-24 lg:py-32 px-6 md:px-12 w-full bg-background overflow-hidden">
      <img
        src={overlay}
        alt="Hero Background"
        className="absolute w-96 md:w-150 h-96 md:h-150 object-cover -top-40 md:-top-60 right-0 pointer-events-none opacity-80"
      />
      <img
        src={boverlay}
        alt="Hero Background"
        className="absolute w-96 md:w-150 h-96 md:h-150 object-cover -bottom-20 -left-16 pointer-events-none opacity-80"
      />

      <div
        className={`flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto z-10 relative ${
          loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 scale-95 translate-y-6'
        } transition-all duration-1000 ease-in-out`}
      >
        {/* Left Column Text */}
        <div className="flex flex-col w-full lg:w-1/2 space-y-4 text-left">
          <p className="text-sm md:text-base text-secondary font-bold tracking-[3.2px] uppercase">
            PRECISION TECH ENGINEERING
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary leading-tight">
            Your One-Stop <br className="hidden sm:inline" /> Tech Hub!
          </h1>
          <p className="text-primary text-base md:text-lg max-w-xl">
            Experience architectural precision in digital engineering. From high-performance hardware to enterprise network solutions, we build the foundations of your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={navigateService}
              text="Explore Services"
              icon={arrow}
              size="h-14 px-8 text-base font-bold"
              shadow="shadow-lg shadow-primary/30"
            />
            <Button
              onClick={navigatePortfolio}
              text="Our Portfolio"
              color="secondary"
              bg="bg-white"
              size="h-14 px-8 text-base font-bold border border-primary/10"
              hover="hover:scale-105 hover:bg-primary hover:text-white duration-300"
            />
          </div>
        </div>

        {/* Right Column Image & Floating Card */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={heroImage}
              alt="Hero Showcase"
              className="w-full h-80 sm:h-96 md:h-[450px] object-cover rounded-3xl shadow-xl"
            />

            {/* Floating Reliability Card */}
            <div className="flex flex-col p-5 sm:p-6 space-y-2 absolute sm:-bottom-8 -bottom-6 left-4 sm:-left-6 w-64 sm:w-72 backdrop-blur-lg shadow-xl shadow-black/10 rounded-2xl bg-white/90 border border-white/40 z-20">
              <div className="flex items-center space-x-3">
                <TagBox bcolor="bg-container" icon={markIcon} size="h-10 w-10 shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[#424750] font-bold text-xs uppercase tracking-wider">RELIABILITY</p>
                  <p className="text-primary font-bold text-sm">Certified Quality</p>
                </div>
              </div>
              <div className="text-[#424750] text-xs font-normal leading-relaxed">
                Rigorous testing on every hardware and software solution we deliver.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero