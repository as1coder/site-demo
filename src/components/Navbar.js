"use client";

import templateConfig from "../template-config";

export default function Navbar() {
  const { business } = templateConfig;
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          {business.name}
        </span>
        <div className="space-x-4 md:space-x-8">
          <a href="#" className="text-white hover:text-cyan-200 font-medium transition-colors">Home</a>
          <a href="#doctor" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'doctor')}>Doctor</a>
          <a href="#services" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'services')}>Services</a>
          <a href="#testimonials" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'testimonials')}>Testimonials</a>
          <a href="#contact" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
