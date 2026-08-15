// import React from 'react';

// ==========================================
// SUB-COMPONENTS
// ==========================================

// const HeroHeader = () => (
//   <section className="bg-primary relative overflow-hidden pt-24 pb-48 px-6 md:px-12">
//     {/* Abstract Vertical Lines Background Placeholder */}
//     <div className="absolute inset-0 opacity-20 pointer-events-none">
//        {/* You can replace this with an actual SVG or background image from Figma */}
//        <div className="w-full h-full bg-[repeating-linear-gradient(to_right,transparent,transparent_40px,rgba(255,255,255,0.05)_40px,rgba(255,255,255,0.05)_80px)]"></div>
//     </div>

//     <div className="max-w-7xl mx-auto relative z-10">
//       <span className="inline-block bg-container text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-sm">
//         Connect With Excellence
//       </span>
//       <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
//         Let’s build your <span className="text-container">digital</span> <br />
//         <span className="text-container">future.</span>
//       </h1>
//       <p className="text-primary-light text-lg max-w-xl leading-relaxed">
//         Our structural approach to digital engineering ensures your vision is 
//         translated into high-performance reality. Reach out today to start.
//       </p>
//     </div>
//   </section>
// );

// const ContactFormSection = () => (
//   <section className="bg-black px-6 md:px-12 pb-24">
//     <div className="max-w-6xl mx-auto -mt-32 relative z-20 grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-xl overflow-hidden">
      
//       {/* LEFT CARD: Contact Information */}
//       <div className="bg-[#00224A] text-white p-10 md:p-14 lg:col-span-5 flex flex-col justify-between">
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
//           <p className="text-primary-light text-sm mb-12 leading-relaxed">
//             Ready to scale? Our team is standing by to provide technical specifications and project blueprints.
//           </p>

//           <div className="space-y-8">
//             {/* Phone */}
//             <div className="flex items-start gap-4">
//               <div className="text-container mt-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Phone</p>
//                 <p className="font-medium">+234 (0) 800 ELECT SOL</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <div className="text-container mt-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Email</p>
//                 <p className="font-medium">engineering@theelect.solutions</p>
//               </div>
//             </div>

//             {/* Headquarters */}
//             <div className="flex items-start gap-4">
//               <div className="text-container mt-1">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
//               </div>
//               <div>
//                 <p className="text-xs font-bold text-primary-light uppercase tracking-widest mb-1">Headquarters</p>
//                 <p className="font-medium leading-relaxed">
//                   Lagos Engineering District,<br />
//                   Victoria Island, Nigeria
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-16 pt-8 border-t border-white/10">
//            {/* Replace with specific social SVGs */}
//            <a href="#" className="w-10 h-10 rounded-full bg-[#003B7A] hover:bg-container transition-colors flex items-center justify-center text-white">S1</a>
//            <a href="#" className="w-10 h-10 rounded-full bg-[#003B7A] hover:bg-container transition-colors flex items-center justify-center text-white">S2</a>
//            <a href="#" className="w-10 h-10 rounded-full bg-[#003B7A] hover:bg-container transition-colors flex items-center justify-center text-white">S3</a>
//         </div>
//       </div>

//       {/* RIGHT CARD: Message Form */}
//       <div className="bg-white p-10 md:p-14 lg:col-span-7">
//         <h2 className="text-3xl font-bold text-primary mb-2">Send us a message</h2>
//         <p className="text-gray-500 text-sm mb-10">
//           We usually respond within 24 business hours with a preliminary assessment.
//         </p>

//         <form className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">First Name</label>
//               <input type="text" placeholder="John" className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm" />
//             </div>
//             {/* Last Name */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Last Name</label>
//               <input type="text" placeholder="Doe" className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm" />
//             </div>
//           </div>

//           {/* Email Address */}
//           <div>
//             <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address</label>
//             <input type="email" placeholder="john.doe@company.com" className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm" />
//           </div>

//           {/* Subject Dropdown */}
//           <div>
//             <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Subject</label>
//             <select className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm text-gray-600 appearance-none">
//               <option>Digital Architecture Inquiry</option>
//               <option>Hardware Procurement</option>
//               <option>Smart Automation</option>
//               <option>General Support</option>
//             </select>
//           </div>

//           {/* Project Details */}
//           <div>
//             <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Project Details</label>
//             <textarea rows="4" placeholder="Tell us about your technical requirements..." className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-container focus:ring-2 focus:ring-container/20 rounded-md py-3 px-4 outline-none transition-all text-sm resize-none"></textarea>
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="w-full bg-primary hover:bg-[#001D4A] transition-colors text-white font-bold py-4 px-6 rounded-md text-sm flex justify-center items-center gap-2 mt-4">
//             Initialize Consultation <span>&rarr;</span>
//           </button>
//         </form>
//       </div>

//     </div>
//   </section>
// );

const MapSection = () => (
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
);

// ==========================================
// MAIN PAGE EXPORT
// ==========================================

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen font-sans bg-background selection:bg-container selection:text-white">
//       <HeroHeader />
//       <ContactFormSection />
//       <MapSection />
//     </div>
//   );
// }