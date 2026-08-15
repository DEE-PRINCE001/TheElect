import React from 'react'
import Testimonial from '../components/Testimonial'
import HeroSection from '../components/AboutComponent/HeroSection'
import LegacySection from '../components/AboutComponent/LegacySection'
import MissionVisionSection from '../components/AboutComponent/MissionVisionSection'
import TeamSection from '../components/AboutComponent/TeamSection'
import CTASection from '../components/AboutComponent/CTASection'

const AboutPage = () => {
  return (
    <div className="min-h-screen font-sans-serif bg-white selection:bg-orange-500 selection:text-white">
      <HeroSection />
      <LegacySection />
      <MissionVisionSection />
      <TeamSection />
      <CTASection />
    </div>
  )
}

export default AboutPage