import React from "react";

const CTASection = () => {
    
    return (
  <section className="bg-background py-20 px-6 md:px-12 pb-32">
    <div className="max-w-6xl mx-auto bg-primary rounded-2xl py-14 px-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Need a custom <br /> technical plan?
        </h2>
        <p className="text-primary-light text-sm leading-relaxed max-w-md">
          Our engineers are ready to architect your bespoke digital or electrical infrastructure. Let's build your vision.
        </p>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <button className="bg-container hover:bg-opacity-90 transition-opacity text-white font-bold py-3 px-8 rounded text-sm">
          Get a Consultation
        </button>
        <button className="bg-transparent border border-white/20 hover:bg-white/10 transition-colors text-white font-bold py-3 px-8 rounded text-sm">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);}

export default CTASection;