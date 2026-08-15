import React from 'react'
import Button from './Button'

const CTA = () => {

    const handleConsultation = () => {
        const message = encodeURI("Hello, I want to make a consultation regarding your service")

        window.open(`https://wa.me/2347032746642?text=${message}`, "_blank");
    }
  return (
    <div className="h-185 py-32 bg-background px-8">
        <div className="w-full h-full p-30 bg-primary rounded-[48px] flex justify-between items-center">
            <div className="flex flex-col space-y-6 w-[50%]">
                <h1 className="font-bold text-white text-[78px] leading-tight">Ready to upgrade <br/> your technology?</h1>
                <p className="text-[#A9C7FF] font-normal text-[25px]">Schedule a consultation with our digital architects today and
transform your enterprise infrastructure.</p>
            </div>
            <div className="flex flex-col space-y-4 items-center justify-center">
                <Button onClick={handleConsultation} text="Book a Consultation" bg={"bg-[#FF8928]"} size={"h-[75px] w-[278px] text-[20px] text-black! font-bold"} 
                otherStyles={"hover:scale-105 duration-300"}/>
                <p className="text-white/50 font-bold tracking-[2.4px] text-[12px]">NO STRING ATTACHED</p>

            </div>

        </div>
    </div>
  )
}

export default CTA