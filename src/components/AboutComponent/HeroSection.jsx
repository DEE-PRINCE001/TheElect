import React from "react";

const HeroSection = () => {
  
  return (
  <section className="bg-[#0B1B3D] text-white py-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto mt-12">
      <span className="inline-block bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
        Building Excellence
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
        Architecting the <span className="text-orange-500">Future</span><br />
        of Digital Infrastructure.
      </h1>
      <p className="text-gray-300 text-lg max-w-2xl">
        We build solutions that leverage cutting-edge technology to push boundaries. 
        Software architecture designed for scalability, reliability, and security.
      </p>
    </div>
  </section>
);}

export default HeroSection;