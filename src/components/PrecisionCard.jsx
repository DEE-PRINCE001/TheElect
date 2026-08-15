import React from 'react'
import TagBox from './TagBox'
import Button from './Button'
import arrow from '../assets/icons/b_arrow.svg'
import { useNavigate } from 'react-router-dom'


const PrecisionCard = ({bcolor, icon, title, description}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/service")
    }
  return (
    <div className="flex flex-col items-stretch justify-between h-77.5 w-[25%] bg-white rounded-3xl p-8 space-y-4 hover:scale-110 transition duration-300">
        <TagBox bcolor={bcolor} icon={icon} size={"h-15 w-15"} iconsize={"h-7 w-7"}/>
        <h3 className="text-[25px] font-bold text-primary">{title || 'Precision Card'}</h3>
        <p className="text-[#424750] text-[16px] leading-[22.75px]">{description ||
         'High-performance workstations curated for engineers, designers, and executives.'}</p>
        <Button hover_dissapear text="Learn More" onClick={handleClick} icon={arrow} color={"secondary"} bg={"bg-white"} 
        size={"h-10 w-30 text-sm font-bold"} 
        otherStyles={"hover:scale-105 hover:border-2 hover:border-primary duration-300"}
        />
    </div>
  )
}

export default PrecisionCard