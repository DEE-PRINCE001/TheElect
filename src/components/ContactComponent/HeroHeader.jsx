import React from 'react'
import PageHero from '../PageHero'

const HeroHeader = () => {
  return (
    <PageHero
      badgeText="Connect With Excellence"
      badgeBg="bg-container text-white"
      title={
        <>
          Let’s build your <span className="text-container">digital</span> <br />
          <span className="text-container">future.</span>
        </>
      }
      description="Our structural approach to digital engineering ensures your vision is translated into high-performance reality. Reach out today to start."
      padding="pt-24 pb-48 px-6 md:px-12"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none -z-0">
        <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_40px,rgba(255,255,255,0.05)_40px,rgba(255,255,255,0.05)_80px)]"></div>
      </div>
    </PageHero>
  )
}

export default HeroHeader