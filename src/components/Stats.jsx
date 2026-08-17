import React from 'react'
import StatCard from './StatCard'

const Stats = () => {
  return (
    <section className="w-full bg-[#F3F3F9] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Main Stat Banner */}
        <div className="w-full lg:w-1/2 bg-primary flex flex-col justify-between p-8 sm:p-10 rounded-3xl min-h-[280px] shadow-lg text-white">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Precision at Scale
            </h2>
            <p className="text-base sm:text-lg font-normal text-[#A9C7FF]">
              Delivering excellence across diverse technological landscapes for a decade.
            </p>
          </div>
          <div className="flex flex-wrap items-baseline gap-3 mt-6">
            <span className="text-5xl sm:text-6xl font-extrabold leading-none">10K+</span>
            <span className="text-lg sm:text-xl font-medium text-[#A9C7FF]">Successful Projects</span>
          </div>
        </div>

        {/* Side Stat Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard
            value="99%"
            label="UPTIME RATE"
            bcolor="bg-white"
            vcolor="text-secondary"
            lcolor="text-[#424750]"
          />
          <StatCard
            value="24/7"
            label="SUPPORT RESPONSE"
            bcolor="bg-container"
            vcolor="text-white"
            lcolor="text-white/90"
          />
        </div>
      </div>
    </section>
  )
}

export default Stats