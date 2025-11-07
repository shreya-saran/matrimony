// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="pt-12 pb-6"
      style={{
        background: "linear-gradient(90deg, #fff5e6 0%, #fef1f1 100%)",
        color: "#4b4746",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src={logo}
              alt="Elite Matrimony Bureau"
              className="w-12 h-12 rounded-full object-contain"
            />
            <h2 className="text-2xl font-bold" style={{ color: "#924130" }}>
              Elite Matrimony
            </h2>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#6b6b6b" }}>
            Connecting hearts with trust and tradition. Start your journey toward a beautiful future today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "#924130" }}>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Home
              </a>
            </li>
            <li>
              <a href="#success" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Success Stories
              </a>
            </li>
            <li>
              <a href="#testimonials" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#clients" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Clients
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="transition-colors" style={{ color: "#4b4746" }} onMouseEnter={(e)=>e.currentTarget.style.color='#b85947'} onMouseLeave={(e)=>e.currentTarget.style.color='#4b4746'}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ color: "#924130" }}>
            Contact Details
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "#4b4746" }}>
            <li>
              <p>
                <strong>Address:</strong> Kamal Cinema Complex, AB-1, Block A1, Nauroji Nagar, Safdarjung Enclave, New Delhi - 110029
              </p>
            </li>
            <li>
              <p>
                <strong>Phone:</strong> <a href="tel:+917838500048" style={{ color: "#b85947" }}>+91 7838500048</a>
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong> <a href="mailto:sycoriaanteam@gmail.com" style={{ color: "#b85947" }}>sycoriaanteam@gmail.com</a>
              </p>
            </li>
          </ul>

          {/* Social icons */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold mb-2" style={{ color: "#924130" }}>
              Connect With Us
            </h4>

            <div className="flex items-center gap-3">
              {[
                { href: "https://www.facebook.com/sycoriaanmatrimonialservice", icon: <FaFacebookF />, label: "Facebook" },
                { href: "https://www.instagram.com/sycoriaanmatrimonialservice/", icon: <FaInstagram />, label: "Instagram" },
                { href: "https://www.linkedin.com/in/sycorian/", icon: <FaLinkedinIn />, label: "LinkedIn" },
                { href: "https://www.youtube.com/user/SycoriaanMatrimonial", icon: <FaYoutube />, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full border shadow-sm transition-transform duration-200"
                  style={{
                    background: "#fff",
                    borderColor: "#efe0db",
                    color: "#924130",
                  }}
                >
                  {React.cloneElement(s.icon, { className: "text-lg" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-5 text-center text-sm" style={{ borderColor: "#efe0db", color: "#6b6b6b" }}>
        © {new Date().getFullYear()}{" "}
        <span style={{ color: "#924130", fontWeight: 600 }}>Elite Matrimony Services</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
