import React from 'react'
import quotes from '../assets/icons/quotes.svg'
import portrait from '../assets/images/client_portrait.svg'

const Testimonial = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#E8E8EE] flex flex-col justify-center items-center text-center space-y-8">
      <img src={quotes} alt="quotes" className="h-10 w-10 opacity-80" />
      <p className="text-xl sm:text-2xl lg:text-3xl text-primary max-w-3xl leading-relaxed font-medium">
        "TheElect Solutions didn't just sell us hardware; they redesigned our entire workflow with precision and technical mastery. Their network solutions have been a game-changer for our global operations."
      </p>
      <div className="flex items-center space-x-4 pt-2">
        <img
          src={portrait}
          alt="Client Portrait"
          className="h-14 w-14 rounded-xl border-2 border-white shadow-sm object-cover"
        />
        <div className="flex flex-col text-left">
          <p className="text-primary font-bold text-base">Marcus Thorne</p>
          <p className="text-[#424750] font-bold text-xs uppercase tracking-wider">CTO, NEXUS DYNAMICS</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial