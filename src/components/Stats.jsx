import React from 'react'
import StatCard from './StatCard'

const Stats = () => {
  return (
    <div className="flex justify-between items-center h-117 w-full px-8 py-[96px] bg-[#F3F3F9] space-x-5">
        <div className='w-[50%] h-[286px] bg-primary flex flex-col p-10 rounded-3xl justify-between'>
            <div className='text-[40px] font-bold font-manrope-700 text-white'>
                Precision at Scale
            </div>
            <p className='text-[20px] leading-6 font-normal text-[#A9C7FF]'>Delivering excellence across diverse technological <br/>
landscapes for a decade.
            </p>
            <div className='flex space-x-3 mt-4 items-end'>
                <div className='text-[60px] font-extrabold text-white leading-none'>10K+</div>
                <div className='text-[24px] font-normal text-[#A9C7FF]'>Succesful Projects</div>
            </div>
        </div>
        <StatCard value={"99%"} label={"UPTIME RATE"} bcolor={"bg-white"} vcolor={"text-secondary"} lcolor={"text-[#424750]"}/>
        <StatCard value="24/7" label="SUPPORT RESPONSE"  vcolor={"text-[#642F00]"} lcolor={"text-[#642F00]"}/>
    </div>
  )
}

export default Stats