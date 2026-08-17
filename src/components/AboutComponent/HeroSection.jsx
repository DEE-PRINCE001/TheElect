import React from 'react'
import PageHero from '../PageHero'

const HeroSection = () => {
  return (
    <PageHero
      badgeText="Building Excellence"
      badgeBg="bg-container text-white"
      title={
        <>
          Architecting the <span className="text-container">Future</span>
          <br />
          of Digital Infrastructure.
        </>
      }
      description="We build solutions that leverage cutting-edge technology to push boundaries. Software architecture designed for scalability, reliability, and security."
      padding="pt-24 pb-20 px-6 md:px-12"
    />
  )
}

export default HeroSection