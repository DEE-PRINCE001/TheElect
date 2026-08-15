import React from "react";

const MapSection = () => {
    
    
    return (
  <section className="relative h-[600px] w-full bg-[#1A303F] overflow-hidden">
    {/* Map Background Placeholder */}
    <div className="absolute inset-0 bg-gray-900">
      {/* Replace with actual map image `<img src="/lagos-map.jpg" className="w-full h-full object-cover opacity-80" />` */}
      <div className="w-full h-full flex items-center justify-center text-gray-600">
        [Map of Lagos Placeholder]
      </div>
    </div>

    {/* Overlay Card */}
    <div className="absolute bottom-10 right-6 md:right-12 lg:right-32 max-w-sm bg-[#E6EBEF] rounded-xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-primary mb-3">Lagos HQ</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Located at the heart of Africa's most vibrant tech ecosystem. Visit our innovation lab for an in-person architecture review.
      </p>
      
      <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-2 mb-8">
        <svg className="w-5 h-5 text-container" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
        Get Directions
      </a>

      <div className="flex gap-8 border-t border-gray-300 pt-6">
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Mon - Fri</p>
          <p className="font-bold text-primary text-sm">08:00 - 18:00</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Sat</p>
          <p className="font-bold text-primary text-sm">10:00 - 14:00</p>
        </div>
      </div>
    </div>
  </section>
);}

export default MapSection;