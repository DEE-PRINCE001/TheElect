import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const CTASection = ({
  title = "Ready to upgrade your technology?",
  description = "Schedule a consultation with our digital architects today and transform your enterprise infrastructure.",
  primaryButtonText = "Book a Consultation",
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  subText = "NO STRINGS ATTACHED",
  bg = "bg-primary"
}) => {
  const navigate = useNavigate()

  const defaultConsultationHandler = () => {
    const message = encodeURIComponent("Hello, I would like to schedule a technical consultation with TheElect Solutions.")
    window.open(`https://wa.me/2347032746642?text=${message}`, "_blank")
  }

  const handlePrimaryClick = onPrimaryClick || defaultConsultationHandler
  const handleSecondaryClick = onSecondaryClick || (() => navigate("/contact"))

  return (
    <div className="py-20 bg-background px-6 md:px-12">
      <div className={`max-w-6xl mx-auto ${bg} rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl`}>
        <div className="flex flex-col space-y-4 max-w-xl text-center lg:text-left">
          <h2 className="font-extrabold text-white text-3xl md:text-5xl leading-tight">
            {title}
          </h2>
          <p className="text-[#A9C7FF] text-base md:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center shrink-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={handlePrimaryClick}
              text={primaryButtonText}
              bg="bg-container"
              size="h-[56px] px-8 text-base font-bold text-white"
              otherStyles="hover:scale-105 transition-transform duration-300"
            />
            {secondaryButtonText && (
              <button
                onClick={handleSecondaryClick}
                className="bg-transparent border border-white/30 hover:bg-white/10 transition-colors text-white font-bold h-[56px] px-8 rounded-lg text-base cursor-pointer"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
          {subText && (
            <p className="text-white/50 font-bold tracking-[2.4px] text-xs uppercase mt-2">
              {subText}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CTASection
