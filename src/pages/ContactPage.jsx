import React from 'react'

import HeroHeader from '../components/ContactComponent/HeroHeader';
import ContactFormSection from '../components/ContactComponent/ContactFormSection'
import MapSection from '../components/ContactComponent/MapSection';

export default function ContactPage() {
  
  
  return (
    <div className="min-h-screen font-sans-serif bg-background selection:bg-container selection:text-white">
      <HeroHeader />
      <ContactFormSection />
      <MapSection />
    </div>
  );
}