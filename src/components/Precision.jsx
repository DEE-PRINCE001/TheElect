import React from 'react'
import PrecisionCard from './PrecisionCard'
import laptop from '../assets/icons/laptop.svg'
import phone from '../assets/icons/phone.svg'
import setting from '../assets/icons/setting.svg'
import star from '../assets/icons/star.svg'

const data = [
        {
        label:"Laptop Sales",
        description:"High-performance workstations curated for engineers, designers, and executives.",
        icon:laptop, 
        color:"bg-primary/10"
    },
        {
        label:"Smartphone Sales",
        description:"Cutting-edge mobile devices from global leaders, configuredn for enterprise security.",
        icon:phone, 
        color:"bg-secondary/10"
    },
        {
        label:"Repairs",
        description:"Architectural-grade repair services for mission-critical hardware failure.",
        icon:setting, 
        color:"bg-primary/10"
    },
        {
        label:"Network Solutions",
        description:"Robust infrastructure design for seamless, high-speed digital operations.",
        icon:star, 
        color:"bg-secondary/10"
    }
]

const Precision = () => {

  return (
    <div className="h-full w-full bg-background py-45 px-8">

        <div className="flex flex-col space-y-25">
            <div className="flex justify-between items-center w-full h-10">
                <div className="flex flex-col">
                    <p className="text-[16px] text-secondary font-bold font-sans-serif-700 tracking-[3.2px]">OUR EXPERTISE</p>
                    <h1 className="text-[52px] font-sans-serif-800 font-extrabold text-primary leading-20">Our Precision Services</h1>
                </div>
                <p className="text-primary text-[20px] mt-4 mb-9 w-[30%]">Engineered solutions tailored to the modern
professional. We don't just sell technology; we
architect your digital future.</p>
            </div>

            <div className="flex justify-between w-full space-x-8">
            {data.map((card)=> (
                <PrecisionCard title={card.label} description={card.description} bcolor={card.color} icon={card.icon}/>
            ))}

            </div>
        </div>
    </div>
  )
}

export default Precision