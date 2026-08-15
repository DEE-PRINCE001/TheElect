import React from "react";


const TeamSection = () => {
    const teamMembers = [
  { id: 1, name: "Marcus Thorne", role: "CEO & FOUNDER", bio: "20+ years of experience in distributed systems and enterprise architecture.", image: "/path-to-image1.jpg" },
  { id: 2, name: "Elena Rodriguez", role: "HEAD OF ENGINEERING", bio: "Visionary leader specializing in high-scale cloud deployments.", image: "/path-to-image2.jpg" },
  { id: 3, name: "Julian Vance", role: "DIRECTOR OF SECURITY", bio: "Expert in cryptographic protocols and high-security infrastructure.", image: "/path-to-image3.jpg" }
];


    return (
  <section className="py-24 px-6 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block">
          The Core Team
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3D]">Meet the Experts</h2>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col">
            {/* Profile Image Placeholder */}
            <div className="w-full h-80 bg-gray-200 rounded-lg mb-6 overflow-hidden">
               {/* Replace with actual img tag: <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" /> */}
            </div>
            <h3 className="text-xl font-bold text-[#0B1B3D]">{member.name}</h3>
            <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mt-1 mb-3">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}


export default TeamSection;