import React from "react";

const CTASection = () => {
  
  
  
  return (
  <section className="py-20 px-6 md:px-12 bg-white pb-32">
    <div className="max-w-5xl mx-auto bg-[#0B1B3D] rounded-3xl py-16 px-8 text-center shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to architect your solution?
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Join the ranks of industry leaders who prioritize structural integrity in their digital journey.
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-3 px-8 rounded-md">
        Start Your Consultation
      </button>
    </div>
  </section>
);
}

export default CTASection;