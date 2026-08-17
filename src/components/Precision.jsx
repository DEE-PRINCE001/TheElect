import React from 'react'
import PrecisionCard from './PrecisionCard'
import laptop from '../assets/icons/laptop.svg'
import phone from '../assets/icons/phone.svg'
import setting from '../assets/icons/setting.svg'
import star from '../assets/icons/star.svg'

const data = [
  {
    label: 'Laptop Sales',
    description: 'High-performance workstations curated for engineers, designers, and executives.',
    icon: laptop,
    color: 'bg-primary/10'
  },
  {
    label: 'Smartphone Sales',
    description: 'Cutting-edge mobile devices from global leaders, configured for enterprise security.',
    icon: phone,
    color: 'bg-secondary/10'
  },
  {
    label: 'Repairs',
    description: 'Architectural-grade repair services for mission-critical hardware failure.',
    icon: setting,
    color: 'bg-primary/10'
  },
  {
    label: 'Network Solutions',
    description: 'Robust infrastructure design for seamless, high-speed digital operations.',
    icon: star,
    color: 'bg-secondary/10'
  }
]

const Precision = () => {
  return (
    <section className="w-full bg-background py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <div className="flex flex-col space-y-2">
            <p className="text-sm md:text-base text-secondary font-bold tracking-[3.2px] uppercase">
              OUR EXPERTISE
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Our Precision Services
            </h2>
          </div>
          <p className="text-primary text-base sm:text-lg max-w-lg lg:w-1/3">
            Engineered solutions tailored to the modern professional. We don't just sell technology; we architect your digital future.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((card) => (
            <PrecisionCard
              key={card.label}
              title={card.label}
              description={card.description}
              bcolor={card.color}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Precision