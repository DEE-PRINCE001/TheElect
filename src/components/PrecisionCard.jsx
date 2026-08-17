import React from 'react'
import TagBox from './TagBox'
import Button from './Button'
import arrow from '../assets/icons/b_arrow.svg'
import { useNavigate } from 'react-router-dom'

const PrecisionCard = ({ bcolor, icon, title, description }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/service')
  }

  return (
    <div className="flex flex-col justify-between w-full h-full min-h-[320px] bg-white rounded-3xl p-6 sm:p-8 space-y-4 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <div className="space-y-4">
        <TagBox bcolor={bcolor} icon={icon} size="h-14 w-14" iconsize="h-7 w-7" />
        <h3 className="text-xl sm:text-2xl font-bold text-primary">{title || 'Precision Card'}</h3>
        <p className="text-[#424750] text-sm sm:text-base leading-relaxed">
          {description || 'High-performance workstations curated for engineers, designers, and executives.'}
        </p>
      </div>

      <div className="pt-2">
        <Button
          text="Learn More"
          onClick={handleClick}
          icon={arrow}
          color="secondary"
          bg="bg-white"
          size="h-10 px-4 text-xs sm:text-sm font-bold border border-primary/20"
          otherStyles="hover:scale-105 hover:border-primary transition-all duration-300"
        />
      </div>
    </div>
  )
}

export default PrecisionCard