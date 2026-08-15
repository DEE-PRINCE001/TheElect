import React from "react";

const MissionVisionSection = () => {
  
  const stats = [
  { id: 1, value: "99.9%", label: "UPTIME EFFICIENCY" },
  { id: 2, value: "500+", label: "ENTERPRISE PARTNERS" },
  { id: 3, value: "24/7", label: "ELITE SUPPORT" }
];


return (
  <section className="py-16 px-6 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Mission Card */}
        <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
          <div className="text-orange-500 text-3xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-[#0B1B3D] mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To empower global enterprises through the deployment of fault-tolerant, scalable environments, 
            championing transformative solutions.
          </p>
        </div>
        
        {/* Vision Card */}
        <div className="bg-[#0B1B3D] p-10 rounded-lg shadow-sm text-white">
          <div className="text-blue-400 text-3xl mb-4">👁️</div>
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-300">
            To become the defining standard in technological infrastructure, creating systems that foster 
            reliability and creativity.
          </p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-gray-200 py-8 px-4 rounded-lg text-center">
            <h4 className="text-4xl font-extrabold text-[#0B1B3D] mb-2">{stat.value}</h4>
            <p className="text-xs font-bold text-orange-500 tracking-widest uppercase">{stat.label}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);
}

export default MissionVisionSection;
