import React from 'react'
import PageHero from '../PageHero'

const HeroSection = () => {
  return (
    <PageHero
      badgeText="Engineering Excellence"
      badgeBg="bg-container text-white"
      bg="bg-background"
      textColor="text-primary"
      descColor="text-gray-600"
      title={
        <>
          Architectural Precision in <br />
          Digital Solutions.
        </>
      }
      description="From high-performance hardware to intelligent security infrastructure, we design the systems that power your future."
      padding="py-24 px-6 md:px-12"
    >
      <div className="absolute top-0 right-10 md:right-32 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L20 90 M50 10 L80 90 M35 50 L65 50" stroke="currentColor" className="text-primary" strokeWidth="4"/>
          <circle cx="50" cy="10" r="8" stroke="currentColor" className="text-primary" strokeWidth="4"/>
        </svg>
      </div>
    </PageHero>
  )
}

export default HeroSection