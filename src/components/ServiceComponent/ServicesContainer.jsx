import React from "react";

const ServicesContainer = () => {
    
    return (
  <section className="bg-black py-20 px-6 md:px-12">
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* ROW 1: Hardware Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl p-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center p-4">
          <span className="text-secondary text-xs font-bold uppercase tracking-widest mb-2 block">
            Premium Hardware
          </span>
          <h2 className="text-3xl font-bold text-primary mb-4 leading-tight">
            Laptop & <br /> Smartphone Sales
          </h2>
          <p className="text-gray-500 text-sm mb-8 pr-4">
            Experience uncompromised performance with our curated selection of high-end 
            workstations and next-gen mobile devices.
          </p>
          <div className="flex items-center space-x-6">
            <button className="bg-container text-white text-sm font-bold py-3 px-6 rounded shadow-sm hover:opacity-90 transition-opacity">
              Shop Now
            </button>
            <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-2">
              View Catalog <span>&rarr;</span>
            </a>
          </div>
        </div>
        
        {/* Product Cards */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Mac Card */}
          <div className="bg-background rounded-lg overflow-hidden flex flex-col border border-gray-100">
            <div className="h-56 w-full flex items-center justify-center text-gray-400 bg-gray-100">
              {/* Replace with <img src="/macbook.jpg" alt="MacBook Pro" className="w-full h-full object-cover" /> */}
              [MacBook Image]
            </div>
            <div className="p-5 bg-white">
              <h3 className="font-bold text-primary text-lg">MacBook Pro</h3>
              <p className="text-secondary text-sm font-bold mt-1">From $1,299</p>
            </div>
          </div>
          {/* Dell Card */}
          <div className="bg-background rounded-lg overflow-hidden flex flex-col border border-gray-100">
            <div className="h-56 w-full flex items-center justify-center text-gray-400 bg-gray-100">
              {/* Replace with <img src="/dell.jpg" alt="Dell XPS 15" className="w-full h-full object-cover" /> */}
              [Dell XPS Image]
            </div>
            <div className="p-5 bg-white">
              <h3 className="font-bold text-primary text-lg">Dell XPS 15</h3>
              <p className="text-secondary text-sm font-bold mt-1">From $1,149</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: Specialized Services (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Genuine Accessories */}
        <div className="bg-background rounded-xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-lg mb-8 text-primary border border-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Genuine Accessories</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Authentic components from certified manufacturers to ensure your devices perform at their peak.
            </p>
          </div>
          <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-2">
            Explore Store <span>&rarr;</span>
          </a>
        </div>

        {/* CCTV & Monitoring */}
        <div className="bg-primary rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg mb-8 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">CCTV & Monitoring</h3>
            <p className="text-primary-light text-sm mb-6 leading-relaxed">
              24/7 intelligent surveillance solutions designed for maximum coverage and remote accessibility.
            </p>
          </div>
          <a href="#" className="text-container text-sm font-bold hover:underline flex items-center gap-2 relative z-10">
            Secure Your Space <span>&gt;</span>
          </a>
        </div>

        {/* Smart Automation Systems */}
        <div className="bg-gray-900 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="h-44 w-full flex items-center justify-center text-blue-400 bg-[#0A1128] relative">
             {/* Replace with actual background image */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
             [Hologram Image]
          </div>
          <div className="bg-background p-6 flex-1">
            <h3 className="text-lg font-bold text-primary mb-2">Smart Automation Systems</h3>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">
              Bespoke IoT ecosystems that synchronize your environment with your lifestyle—smart and intuitive.
            </p>
            <ul className="text-xs text-primary space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-container">✔</span> Intelligent Lighting Control
              </li>
              <li className="flex items-center gap-2">
                <span className="text-container">✔</span> Voice Ecosystems
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ROW 3: General Services (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expert Repairs */}
        <div className="bg-background rounded-xl p-8 flex justify-between items-start">
          <div className="max-w-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Expert Repairs</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Component-level precision repairs for smartphones, laptops, and technical gear. We restore functionality with factory-grade parts.
            </p>
            <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-2">
              Book a Diagnostic <span>&#8594;</span>
            </a>
          </div>
          <div className="w-12 h-12 flex items-center justify-center text-primary-light">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
        </div>

        {/* Electrical Installation */}
        <div className="bg-background rounded-xl p-8 flex justify-between items-start">
          <div className="max-w-sm">
            <h3 className="text-xl font-bold text-primary mb-3">Electrical Installation</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Industrial and residential electrical engineering. Certified installations that meet the highest safety standards.
            </p>
            <a href="#" className="text-primary text-sm font-bold hover:underline flex items-center gap-2">
              Request Installation <span>&#8594;</span>
            </a>
          </div>
          <div className="w-12 h-12 flex items-center justify-center text-primary-light">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
        </div>
      </div>

    </div>
  </section>
);}

export default ServicesContainer;