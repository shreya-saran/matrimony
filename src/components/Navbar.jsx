import React, { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const phoneDisplay = "+91 - 7838500048";
  const phoneHref = "tel:+917838500048";

  return (
    <header className="bg-[#fef1f1] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ===== TOP ROW ===== */}
        <div className="flex items-center justify-between py-3 lg:py-4">
          {/* LEFT: Hamburger for mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CFA85C]"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#8B0000]"
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
                className="h-6 w-6 text-[#8B0000]"
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

          {/* CENTER: Logo & Phone (centered on mobile, normal on desktop) */}
          <div className="flex flex-col items-center flex-1">
            <a href="/" className="flex items-center justify-center">
              <img
                src={logo}
                alt="Elite Matrimony Bureau"
                className="h-16 w-auto object-contain"
              />
            </a>

            {/* Phone below logo */}
            <a
              href={phoneHref}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-[#8B0000] text-[#fef1f1] text-base font-medium shadow-md border border-[#CFA85C]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68L9.4 7.6a1 1 0 01-.24 1l-1.2 1.2a11 11 0 005 5l1.2-1.2a1 1 0 011-.24l3.92 1.85c.46.22.98-.02 1.2-.48L21 16.4A2 2 0 0123 17.4V19a2 2 0 01-2 2A19 19 0 013 5z"
                />
              </svg>
              {phoneDisplay}
            </a>
          </div>

          {/* RIGHT: Desktop Nav (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="/#home"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Services
            </a>
            <a
              href="/#success"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Success Stories
            </a>
            <a
              href="/#testimonials"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Testimonials
            </a>
            <a
              href="/#clients"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Clients
            </a>
            <a
              href="/#contact"
              className="text-lg font-medium text-[#8B0000] hover:text-[#CFA85C] transition"
            >
              Contact Us
            </a>

            <a
              href="/#register"
              className="ml-4 inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#CFA85C] to-[#E6BE8A] text-[#8B0000] font-semibold shadow-md hover:shadow-lg hover:from-[#E6BE8A] hover:to-[#CFA85C] transition"
            >
              Register Now
            </a>
          </nav>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out origin-top ${
            open
              ? "max-h-screen opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          } bg-[#fef1f1] border-t border-[#E6BE8A]/40`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Home
            </a>
            {/* <a
              href="/#services"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Services
            </a> */}
            <a
              href="/#success"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Success Stories
            </a>
            <a
              href="/#testimonials"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Testimonials
            </a>
            <a
              href="/#clients"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Clients
            </a>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="text-lg text-[#8B0000] hover:text-[#CFA85C]"
            >
              Contact Us
            </a>

            <a
              href="/#register"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#CFA85C] to-[#E6BE8A] text-[#8B0000] font-semibold shadow hover:from-[#E6BE8A] hover:to-[#CFA85C] transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
