import React from "react";


const LegacySection = () => {
  
  return (
  <section className="py-20 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image Placeholder */}
      <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        {/* Replace with actual image tag */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          [Server Racks Image Placeholder]
        </div>
      </div>


      <div>
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-4 block">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3D] mb-6">
          A legacy of structural integrity<br /> in a digital world.
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Founded on the principles of architectural rigor, we bring physical disciplines into digital environments. 
          We build infrastructure that stands the test of time and scale.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our team consists of industry veterans who understand the stakes of modern software development 
          and the importance of a solid foundation.
        </p>
      </div>
    </div>
  </section>
);
}

export default LegacySection;