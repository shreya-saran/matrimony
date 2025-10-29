import React from "react";
import logo1 from "../assets/logos/1.png";
import logo2 from "../assets/logos/2.png";
import logo3 from "../assets/logos/3.png";
import logo4 from "../assets/logos/4.png";
import logo5 from "../assets/logos/5.png";
import logo6 from "../assets/logos/6.png";
import logo7 from "../assets/logos/7.png";
import logo8 from "../assets/logos/8.png";
import logo9 from "../assets/logos/9.png";
import logo10 from "../assets/logos/10.png";
import logo11 from "../assets/logos/11.png";
import logo12 from "../assets/logos/12.png";
import logo13 from "../assets/logos/13.png";
import logo14 from "../assets/logos/14.jpg";
import logo15 from "../assets/logos/15.jpg";
import logo16 from "../assets/logos/16.png";
import logo17 from "../assets/logos/17.png";
import logo18 from "../assets/logos/18.png";
import logo19 from "../assets/logos/19.png";
import logo20 from "../assets/logos/20.png";
import logo21 from "../assets/logos/21.png";
import logo22 from "../assets/logos/22.png";
import logo23 from "../assets/logos/23.png";
import logo24 from "../assets/logos/24.png";
import logo25 from "../assets/logos/25.png";
import logo26 from "../assets/logos/26.png";
import logo27 from "../assets/logos/27.png";
import logo28 from "../assets/logos/28.png";
import logo29 from "../assets/logos/29.png";
import logo30 from "../assets/logos/30.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
];

const ClientsMarquee = () => {
  const logosDoubled = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Clients
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          We are proud to have worked with these amazing clients
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="group">
          <div className="flex animate-marquee gap-10 will-change-transform">
            {logosDoubled.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 bg-gray-50 rounded-2xl shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  className="w-28 h-28 md:w-32 md:h-32 object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        :root {
          --marquee-duration: 120s; /* slower scroll */
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee var(--marquee-duration) linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
        `}
      </style>
    </section>
  );
};

export default ClientsMarquee;
