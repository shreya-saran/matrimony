import React from "react";
import logo from "../assets/logo.jpeg"; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-pink-50 to-teal-50 text-gray-700 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Elite Matrimony Services"
              className="w-12 h-12 rounded-full object-contain"
            />
            <h2 className="text-2xl font-bold text-teal-700">
              Elite Matrimony
            </h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Connecting hearts with trust and tradition. Start your journey
            toward a beautiful future today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-pink-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/success-stories"
                className="hover:text-pink-600 transition-colors"
              >
                Success Stories
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-pink-600 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-pink-600 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-teal-700 mb-3">
            Contact Details
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <p>
                <strong>Address:</strong> Kamal Cinema Complex, AB-1, Block A1,
                Nauroji Nagar, Safdarjung Enclave, New Delhi - 110029
              </p>
            </li>
            <li>
              <p>
                <strong>Phone:</strong> +91 7838500048
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong> sycoriaanteam@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-200 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-teal-700 font-semibold">
          Elite Matrimony Services
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
