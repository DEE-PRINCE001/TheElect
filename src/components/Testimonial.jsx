import React from 'react'
import quotes from '../assets/icons/quotes.svg'
import portrait from '../assets/images/client_portrait.svg'
const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8
    w-full h-131.5 py-24 bg-[#E8E8EE]">
        <img src={quotes} alt="quotes" className="h-10 w-10"/>
        <p className="text-center text-[36px] text-primary w-[50%] leading-10">"TheElect Solutions didn't just sell us hardware; they
redesigned our entire workflow with precision and
technical mastery. Their network solutions have been
a game-changer for our global operations."</p>
        <div className="flex justify-center items-center space-x-4 mt-2">
            <img src={portrait} alt="Client Portrait" className="h-15 w-15 rounded-xl border-3 border-white/80"/>
            <div className='flex flex-col py-1 -space-y-0.5'>
                  <p className="text-primary font-bold font-sans-serif-700 text-[15px]">Marcus Thorne</p>
                  <p className="text-[#424750] font-bold font-sans-serif-700 text-[13px]">CTO, NEXUS DYNAMICS</p>
                </div>

        </div>


    </div>
  )
}

export default Testimonial