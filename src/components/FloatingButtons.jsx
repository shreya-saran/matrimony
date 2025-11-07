// src/components/FloatingButtons.jsx
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Call Button */}
      <a
        href="tel:+917838500048"
        className="bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917838500048"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
};

export default FloatingButtons;
