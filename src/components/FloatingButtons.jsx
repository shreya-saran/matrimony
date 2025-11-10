import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      {/* ===== Mobile View ===== */}
      <div className="fixed bottom-5 left-4 right-4 flex justify-between items-center z-50 md:hidden">
        {/* Call Button (left) */}
        <a
          href="tel:+917838500048"
          className="bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
          aria-label="Call Us"
        >
          <FaPhoneAlt size={22} />
        </a>

        {/* WhatsApp Button (right) */}
        <a
          href="https://wa.me/917838500048"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-300 relative"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={26} />
          {/* Optional Notification Badge */}
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></span>
        </a>
      </div>

      {/* ===== Desktop View ===== */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 gap-3">
        
        <a
          href="tel:+917838500048"
          className="bg-[#25D366] text-white flex items-center gap-2 px-4 py-2 rounded-md shadow-md text-sm font-semibold hover:scale-105 transition-transform duration-300"
          aria-label="Call Us"
        >
          <FaPhoneAlt size={16} />
          <span>08460243956</span>
        </a>

        
        <a
          href="https://wa.me/917838500048"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#25D366] text-[#25D366] flex items-center gap-2 px-4 py-2 rounded-md shadow-md text-sm font-semibold bg-white hover:bg-[#25D366] hover:text-white transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
