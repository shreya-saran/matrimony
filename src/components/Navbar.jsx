import React, { useState } from "react";
import logo from "../assets/logo.jpeg"; // adjust relative path as needed

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#fff8f0] via-[#fffdf9] to-[#fff8f0] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Elite Matrimony Bureau"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#home"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Services
            </a>
            <a
              href="#success"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Success Stories
            </a>
            <a
              href="#testimonials"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Testimonial
            </a>
            <a
              href="#clients"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>

            <a
              href="#register"
              className="ml-4 inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#CFA85C] to-[#E6BE8A] text-[#8B0000] font-semibold shadow-md hover:shadow-lg hover:from-[#E6BE8A] hover:to-[#CFA85C] transition"
            >
              Register Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CFA85C]"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#8B0000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[#8B0000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out origin-top ${
          open
            ? "max-h-screen opacity-100 scale-y-100"
            : "max-h-0 opacity-0 scale-y-0"
        } bg-gradient-to-b from-[#fff8f0] to-[#fffdf9] border-t border-[#E6BE8A]/40`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
          >
            Services
          </a>
          <a
            href="#success"
            onClick={() => setOpen(false)}
            className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
          >
            Success Stories
          </a>
          <a
              href="#testimonials"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Testimonials
          </a>
          <a
              href="#clients"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition transform hover:-translate-y-0.5"
            >
              Clients
            </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
          >
            Contact Us
          </a>

          <a
            href="#register"
            className="mt-3 inline-flex justify-center items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#CFA85C] to-[#E6BE8A] text-[#8B0000] font-semibold shadow hover:from-[#E6BE8A] hover:to-[#CFA85C] transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}
