import React from "react";

const HeroHeader = () => {
    
    return (
  <section className="bg-primary relative overflow-hidden pt-24 pb-48 px-6 md:px-12">
    {/* Abstract Vertical Lines Background Placeholder */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       {/* You can replace this with an actual SVG or background image from Figma */}
       <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_40px,rgba(255,255,255,0.05)_40px,rgba(255,255,255,0.05)_80px)]"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <span className="inline-block bg-container text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm">
        Connect With Excellence
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
        Let’s build your <span className="text-container">digital</span> <br />
        <span className="text-container">future.</span>
      </h1>
      <p className="text-primary-light text-lg max-w-xl leading-relaxed">
        Our structural approach to digital engineering ensures your vision is 
        translated into high-performance reality. Reach out today to start.
      </p>
    </div>
  </section>)}

  export default HeroHeader;