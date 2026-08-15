import React from 'react'

const StatCard = ({ value, label, bcolor, vcolor, lcolor }) => {
  return (
    <div className={`flex flex-col space-y-2 items-center justify-center rounded-3xl h-[286px] w-[25%] ${bcolor || 'bg-container'}`}>
      <div className={`text-[52px] font-extrabold ${vcolor || 'text-primary'} leading-none`}>{value}</div>
      <div className={`text-[16px] font-bold ${lcolor || 'text-secondary'} tracking-[1.4px]`}>{label}</div>
    </div>
  )
}

export default StatCard