import React from 'react'

const StatCard = ({ value, label, bcolor, vcolor, lcolor }) => {
  return (
    <div
      className={`flex flex-col space-y-3 items-center justify-center rounded-3xl p-8 min-h-[220px] sm:min-h-[280px] w-full ${
        bcolor || 'bg-container'
      } shadow-md transition-transform hover:scale-[1.02] duration-300`}
    >
      <div className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold ${vcolor || 'text-primary'} leading-none`}>
        {value}
      </div>
      <div className={`text-xs sm:text-sm font-bold text-center ${lcolor || 'text-secondary'} tracking-wider uppercase`}>
        {label}
      </div>
    </div>
  )
}

export default StatCard