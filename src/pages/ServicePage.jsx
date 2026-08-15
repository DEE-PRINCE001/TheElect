import React from 'react'
import Precision from '../components/Precision'
import HeroSection from '../components/ServiceComponent/HeroSection'
import ServicesContainer from '../components/ServiceComponent/ServicesContainer'
import CTASection from '../components/ServiceComponent/CTASection'

export default function ServicePage() {
  return (
    <div className="min-h-screen font-sans-serif bg-background">
      <HeroSection />
      <ServicesContainer />
      <CTASection />
    </div>
  );
}

