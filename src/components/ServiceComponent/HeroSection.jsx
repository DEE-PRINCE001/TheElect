import React from "react";

const HeroSection = () => {
    
    
    return (
  <section className="bg-background relative overflow-hidden py-24 px-6 md:px-12">
    {/* Abstract Drafting Compass Graphic */}
    <div className="absolute top-0 right-10 md:right-32 w-64 h-64 opacity-20 pointer-events-none">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 L20 90 M50 10 L80 90 M35 50 L65 50" stroke="currentColor" className="text-primary" strokeWidth="4"/>
        <circle cx="50" cy="10" r="8" stroke="currentColor" className="text-primary" strokeWidth="4"/>
      </svg>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <span className="inline-block bg-[#FDECE2] text-secondary text-xs font-bold px-3 py-1 rounded-sm mb-6 tracking-widest uppercase">
        Engineering Excellence
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight max-w-3xl">
        Architectural Precision in <br />
        Digital Solutions.
      </h1>
      <p className="text-gray-600 text-lg max-w-xl">
        From high-performance hardware to intelligent security infrastructure, 
        we design the systems that power your future.
      </p>
    </div>
  </section>
);
}

export default HeroSection;