"use client";

import templateConfig from "../template-config";
import { useState } from "react";

export default function Navbar() {
  const { business } = templateConfig;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-screen-sm md:max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          {business.name}
        </span>
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex space-x-4 md:space-x-8">
          <a href="#" className="text-white hover:text-cyan-200 font-medium transition-colors">Home</a>
          <a href="#doctor" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'doctor')}>Doctor</a>
          <a href="#services" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'services')}>Services</a>
          <a href="#testimonials" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'testimonials')}>Testimonials</a>
          <a href="#contact" className="text-white hover:text-cyan-200 font-medium transition-colors" onClick={e => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700/95 px-4 py-4 flex flex-col gap-4 w-full absolute left-0 top-full shadow-lg z-40">
          <a href="#" className="text-white font-medium" onClick={e => handleSmoothScroll(e, 'home')}>Home</a>
          <a href="#doctor" className="text-white font-medium" onClick={e => handleSmoothScroll(e, 'doctor')}>Doctor</a>
          <a href="#services" className="text-white font-medium" onClick={e => handleSmoothScroll(e, 'services')}>Services</a>
          <a href="#testimonials" className="text-white font-medium" onClick={e => handleSmoothScroll(e, 'testimonials')}>Testimonials</a>
          <a href="#contact" className="text-white font-medium" onClick={e => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
}
