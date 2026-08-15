import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Precision from '../components/Precision'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Stats/>
      <Precision/>
      <Testimonial/>
      <CTA/>
      
    </div>
  )
}

export default HomePage